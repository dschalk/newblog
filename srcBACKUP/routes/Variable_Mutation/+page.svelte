<script>
const Hask = `Functional purity is a defining characteristic of Haskell, one which leads to many of its strengths. As such, language and ecosystem encourage eschewing mutable state altogether. Thanks to tools such as the State monad, which allows us to keep track of state in a convenient and functionally pure way, and efficient immutable data structures like the ones provided by the containers and unordered-containers packages, Haskell programmers can get by perfectly fine with complete immutability in the vast majority of situations. However, under select circumstances using mutable state is just the most sensible option. One might, for instance, be interested in:

From Haskell code, using a library written in another language which assumes mutable state everywhere. This situation often arises with event-callback GUI toolkits.
Using Haskell to implement a language that provides imperative-style mutable variables.
Implementing algorithms that inherently require destructive updates to variables.
Dealing with volumes of bulk data massive enough to justify squeezing every drop of computational power available to make the problem at hand feasible.
Any general-purpose programming language worth its salt should be able to deal with such tasks. With Haskell, it is no different: there are not only ways to create mutable objects, but also to keep mutability under control, existing peacefully in a setting where immutability is the default.

IORefs
Let's begin with the simplest of those use cases above. A common way of structuring code for user interfaces is through the event-and-callback model. The event might be a button click or a key press, while the callback is just a piece of code meant to be called in response to the event. The client code (that is, your code, if you are using such a library) should set up the wiring that connects interface elements, events involving them, and the corresponding callbacks. A hypothetical function to arrange a callback might have the following type:

register :: (Element -> Event) -> Element -> IO () -> IO ()
The IO () argument is the callback, while the result of register is an IO action which sets up the wiring. Running register click button1 (print "Hello") would lead to "Hello" being printed on the console following every click on button1.

Both register − with pervasive IO and lacking useful return values − and our exposition above have a marked imperative feel. That's because our hypothetical GUI library was written using a more imperative style in a wholly different language. Some good soul has written a facade so that we can use it from Haskell, but the facade is a very thin one, and so the style of the original library leaks into our code [1].

Using register to perform IO actions such as printing to the console or showing dialog boxes is easy enough. However, what if we want to add 1 to a counter every time a button is clicked? The type of register doesn't reveal any way to pass information to the callback, nor to get information back from it (the return types are ()). State doesn't help: even if there was a way to pass an initial state to the callback, run a State computation within it, what would we do with the results? We would need to pass the resulting state of the counter to the callback on the next time the button is clicked, and we would have no idea when that would happen, nor a place to keep the value in the meantime.

The obvious solution to this issue in many languages would be creating a mutable variable outside of the callback and then giving the callback a reference to it, so that its code can change the value of the variable at will. We need not worry, though, as Haskell allows us to do exactly that. In fact, there are several types of mutable variables available, the simplest of which is the IORef.IORefs are very simple; they are just boxes containing mutable values. We can create one as follows:

GHCi> import Data.IORef
GHCi> :t newIORef 
newIORef :: a -> IO (IORef a)
GHCi> box <- newIORef (4 :: Int)
newIORef takes a value and gives back, as the result of an IO action, an IORef initialised to that value. We can then use readIORef to retrieve the value in it...

GHCi> :t readIORef
readIORef :: IORef a -> IO a
GHCi> readIORef box >>= print
4
... and modifyIORef and writeIORef to change it:

GHCi> modifyIORef box (2*)
GHCi> readIORef box >>= print
8
GHCi> writeIORef box 0
GHCi> readIORef box >>= print
0
An IORef would be enough for implementing the counter, given that it would persist between button clicks. The code might look like this:

setupGUI :: IORef Int -> IO ()
setupGUI counter = do
    -- However much other GUI preparation code we need.
    register click button1 (modifyIORef counter (+1))

main :: IO ()
main = do
    -- etc.
    counter <- newIORef (0 :: Int)
    setupGUI counter
    -- Then just use the counter value wherever necessary.
Note there is no point in using IORefs indiscriminately, without a good reason for it. Beyond the more fundamental concerns with mutable state, it just would not be very convenient to do so with all those explicit read/write/modify calls, not to mention the need to introduce IO in extra places to handle the IORef (in our hypothetical example that wouldn't be much of an issue, as the GUI code would have to live in IO anyway, and we presumably would keep it apart from the pure functions forming the core of our program, as good Haskell practice dictates). Still, IORefs are there for when you can't avoid them.

The pitfalls of concurrency
There is another very important use case for mutable variables that we didn't mention in the introduction: concurrency, that is, circumstances when simultaneous computations are being executed by the computer. Concurrency scenarios range from the simple (a progress bar displaying the status of a background task) to the extremely complex (server-side software handling thousands of requests at once). Given that in principle nothing guarantees that simultaneous computations will run in step with each other, any communication between them calls for mutable variables. That, however, introduces a complication: the issues with understandability and predictability of code using mutable state become much more serious in the presence of independent computations with unpredictable timings. For instance, computation A might need the result of computation B, but it might ask for that result earlier than predicted and thus acquire a bogus result. Writing correct concurrent code can be difficult, and subtle bugs are easy to introduce unless adequate measures are taken.

The only functions in Data.IORef that provide extra safety in concurrent code are atomicModifyIORef, atomicModifyIORef' and atomicWriteIORef, which are only of any help in very simple situations in which there is just one IORef meant to be used as a shared resource between computations. Concurrent Haskell code should take advantage of more sophisticated tools tailored for concurrency, such as MVars (mutable variables that a computation can make unavailable to the others for as long as necessary − see Control.Concurrent.MVar) and Control.Concurrent.STM from the stm package (an implementation of software transactional memory, a concurrency model which makes it possible to write safe concurrent code while avoiding the ugliness and complications of having to explicitly manage the availability of all shared variables) [2].

The ST monad
In the IORef example above, mutability was imposed upon our code by external demands. However, in the two final scenarios suggested by the introduction (algorithms that require mutability and extreme computational demands) the need for mutable state is internal − that is, it is not reflected in any way in the overall results. For instance, sorting a list does not require mutability in any essential way, and so a function that sorts a list and returns a new list should, in principle, be functionally pure even if the sorting algorithm uses destructive updates to swap the position of the elements. In such case, the mutability is just an implementation detail. The standard libraries provide a nifty tool for handling such situations while still ending up with pure functions: the ST monad, which can be found in Control.Monad.ST.

data ST s a
ST s a looks a lot like State s a, and indeed they are similar in spirit. An ST computation is one that uses an internal state to produce results, except that the state is mutable. For that purpose, Data.STRef provides STRefs. A STRef s a is exactly like an IORef a, but it lives in the ST s monad rather than in IO.

There is one major difference that sets apart ST from both State and IO. Control.Monad.ST offers a runST function with the following type:

runST :: (forall s. ST s a) -> a
At first, that is a shocking type signature. If ST involves mutability, how come we can simply extract a values from the monad? The answer lies in the forall s. part of the type. Having a forall s. enclosed within the type of an argument amounts to telling the type checker "s could be anything. Don't make any assumptions about it". Not making any assumptions, however, means that s cannot be matched with anything else − even with the s from another invocation of runST [3]:

GHCi> import Control.Monad.ST
GHCi> import Data.STRef
GHCi> -- Attempt to keep an STRef around to pass to pure code:
GHCi> let ref = runST $ newSTRef (4 :: Int)

<interactive>:125:19:
    Couldn't match type ‘a’ with ‘STRef s Int’
      because type variable ‘s’ would escape its scope
    This (rigid, skolem) type variable is bound by
      a type expected by the context: ST s a
      at <interactive>:125:11-37
    Expected type: ST s a
      Actual type: ST s (STRef s Int)
    Relevant bindings include ref :: a (bound at <interactive>:125:5)
    In the second argument of ‘($)’, namely ‘newSTRef (4 :: Int)’
    In the expression: runST $ newSTRef (4 :: Int)
GHCi> -- The error message is quite clear:
GHCi> -- "because type variable ‘s’ would escape its scope"
GHCi> -- Attempt to feed an STRef from one ST computation to another:
GHCi> let x = runST $ readSTRef =<< runST (newSTRef (4 :: Int))

<interactive>:129:38:
    Couldn't match type ‘STRef s1 Int’ with ‘ST s (STRef s a)’
    Expected type: ST s1 (ST s (STRef s a))
      Actual type: ST s1 (STRef s1 Int)
    Relevant bindings include x :: a (bound at <interactive>:129:5)
    In the first argument of ‘runST’, namely ‘(newSTRef (4 :: Int))’
    In the second argument of ‘(=<<)’, namely
      ‘runST (newSTRef (4 :: Int))’
GHCi> -- The 's' from each computation are necessarily not the same.
The overall effect of this type trickery is to insulate the internal state and mutability within each ST computation, so that from the point of view of anything else in the program runST is a pure function.

As a trivial example of ST in action, here is a very imperative-looking version of sum for lists [4]:

import Control.Monad.ST
import Data.STRef
import Data.Foldable

sumST :: Num a => [a] -> a
sumST xs = runST $ do
    n <- newSTRef 0
    "Omitted line"
        modifySTRef n (+x)
    readSTRef n
For all intents and purposes, sumST is no less pure than the familiar sum. The fact that it destructively updates its accumulator n is a mere implementation detail, and there is no way information about n could leak other than through the final result. Looking at a simple example like this one makes it clear that the s type variable in ST s a does not correspond to anything in particular within the computation − it is just an artificial marker. Another detail worth noting is that even though for_ folds the list from the right the sums are done from the left, as the mutations are performed as applicative effects sequenced from left to right.

Mutable data structures
Mutable data structures can be found in the libraries for the exceptional use cases for which they prove necessary. For instance, mutable arrays (alongside with immutable ones) can be found in the vector package or the array package bundled with GHC [5]. There are also mutable hash tables, such as those from the hashtables package. In all cases mentioned, both ST and IO versions are provided.


Further reading
The seventh chapter of Write Yourself a Scheme in 48 Hours provides an interesting example of IORefs being used to implement mutable variables in a language.
Lennart Augustsson's blog shows how a true quicksort (that is, one using the original algorithm which performs destructive updates to sort the list) can be implemented in Haskell, just like we assured that was possible way back in Haskell/Higher-order functions. His implementation is quite amusing thanks to the combinators used to handle mutability, which make Haskell look like C. Be sure to check the two posts before the one linked to see how that was done.
Notes
 The technical term for facades over libraries from other languages is bindings. Bindings can be thin, exposing transparently the constructs of the original library, or they can add extra layers of abstraction can be built on to achieve a more Haskell-like feel. The elementary tool for creating bindings in Haskell is the foreign function interface, which we cover in a chapter of Haskell in Practice.
 A future chapter of this book will introduce some of those features.
 This is an example of an existential type. "Existential" is meant in a precise technical sense, but we can get the gist of it by noting that the only thing we know about it is that it exists.
 Adapted from the HaskellWiki page on ST.
 For general observations on arrays, see the data structures primer.
Mutable objects
Advanced Haskell
Monoids  >> Applicative functors  >> Foldable  >> Traversable  >> Arrow tutorial  >> Understanding arrows 75% developed  >> Continuation passing style  >> Zippers 75% developed  >> Lenses  >> Comonads 0% developed  >> Value recursion (MonadFix)  >> Effectful streaming  >> Mutable objects 50% developed  >> Concurrency 0% developed  >> Template Haskell 0% developed  >> Type Families 0% developed
`

</script>
<style>

pre {
    color: rgb(219, 253, 244);
    font-size: 20px;
}


</style>
<h2>Haskell Mutation</h2>
<p> The following is copied from <a href = "https://en.wikibooks.org/wiki/Haskell/Mutable_objects">Haskell Mutation</a></p>

<pre>{Hask}</pre>

<h1>JavaScript Mutation</h1>
<p>Mutable variables in the global space are liable to being inadvertently "stepped on," especially in group projects, or when editing code after writing it has begunfrom memory. Mutating variables inside of code blocks or functions is safer, and good practice when thousands of iterations through loops could cause memory leaks by generating copious immutable values.</p>

<p>The m-M(x) recursive closures facilitate sequestering mutable state until it is explicitly requested by the programmer. See https://schalk2.com/recursive-closures. </p>
<br><br><br>

<slot />



