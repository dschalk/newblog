
<script>
  import '../app.css';
</script>

<div class="layout">
  <header>
    <nav>
      <a href="/">Home</a>
      <!--  <a href="/test">test</a>
      <a href="/love">love</a> -->
      <a href="/Determinism">Determinism</a>
      <a href="/SUV">SUV</a>
      <a href="/Research">Research</a>
      <a href="/Research_2">Research_2</a>
<!--      <a href="/Thoughtful">Thoughtful</a> -->
    </nav>
  </header>

  <main class="prose">
    <slot />
  </main>

  <footer>
    <p>&copy; 2024 Your Site Name</p>
  </footer>
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background-color: beige;
  }

  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  header {
    background: #333;
    color: white;
    padding: 1rem 2rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  nav {
    display: flex;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  nav a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;
  }

  nav a:hover {
    opacity: 0.8;
  }

  main {
    flex: 1;
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    padding: 2rem;
  }

  /* Markdown/Prose styling */
  :global(.prose h1) {
    font-size: 2.5rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  :global(.prose h2) {
    font-size: 2rem;
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
  }

  :global(.prose p) {
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  :global(.prose a) {
    color: #0066cc;
    text-decoration: none;
  }

  :global(.prose a:hover) {
    text-decoration: underline;
  }

  :global(.prose code) {
    background: #f4f4f4;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-size: 0.9em;
    font-family: 'Courier New', monospace;
  }

  :global(.prose pre) {
    background: #282c34;
    color: #abb2bf;
    padding: 1rem;
    border-radius: 5px;
    overflow-x: auto;
    margin: 1rem 0;
  }

  :global(.prose pre code) {
    background: none;
    padding: 0;
    color: inherit;
  }

  :global(.prose blockquote) {
    border-left: 4px solid #ddd;
    padding-left: 1rem;
    margin-left: 0;
    color: #666;
    font-style: italic;
  }

  :global(.prose ul, .prose ol) {
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  :global(.prose img) {
    max-width: 100%;
    height: auto;
	width: 768px; 
    main {
      padding: 1rem;
    }

    nav {
      gap: 1rem;
    }
  }
</style>
