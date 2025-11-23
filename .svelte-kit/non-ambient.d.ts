
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/Blueberries" | "/Cosmology" | "/Creatine" | "/Crontab" | "/Dementia" | "/Dominance_Submission" | "/Evolution" | "/Gina" | "/Grover copy" | "/Grover" | "/Insects copy" | "/Insects" | "/Isreal-US" | "/Landauer’s principle" | "/Machiavelli" | "/Metabolic_Flexibility" | "/Nitrate-nitrite-research copy" | "/Nitrate-nitrite-research" | "/Nitrous_Oxide_synthesis" | "/P_adic copy" | "/P_adic" | "/Physics and Cosmology" | "/Recursive_Closures" | "/Relationships" | "/Relationships/(99) Philosos - YouTube_files" | "/Resistance_Workout" | "/Seduction" | "/Server copy" | "/Server" | "/Sweeteners" | "/Thoughtful" | "/Variable_Mutation copy" | "/Variable_Mutation" | "/about" | "/love" | "/scholar-gpt" | "/test" | "/wave equation copy" | "/wave equation";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/Blueberries": Record<string, never>;
			"/Cosmology": Record<string, never>;
			"/Creatine": Record<string, never>;
			"/Crontab": Record<string, never>;
			"/Dementia": Record<string, never>;
			"/Dominance_Submission": Record<string, never>;
			"/Evolution": Record<string, never>;
			"/Gina": Record<string, never>;
			"/Grover copy": Record<string, never>;
			"/Grover": Record<string, never>;
			"/Insects copy": Record<string, never>;
			"/Insects": Record<string, never>;
			"/Isreal-US": Record<string, never>;
			"/Landauer’s principle": Record<string, never>;
			"/Machiavelli": Record<string, never>;
			"/Metabolic_Flexibility": Record<string, never>;
			"/Nitrate-nitrite-research copy": Record<string, never>;
			"/Nitrate-nitrite-research": Record<string, never>;
			"/Nitrous_Oxide_synthesis": Record<string, never>;
			"/P_adic copy": Record<string, never>;
			"/P_adic": Record<string, never>;
			"/Physics and Cosmology": Record<string, never>;
			"/Recursive_Closures": Record<string, never>;
			"/Relationships": Record<string, never>;
			"/Relationships/(99) Philosos - YouTube_files": Record<string, never>;
			"/Resistance_Workout": Record<string, never>;
			"/Seduction": Record<string, never>;
			"/Server copy": Record<string, never>;
			"/Server": Record<string, never>;
			"/Sweeteners": Record<string, never>;
			"/Thoughtful": Record<string, never>;
			"/Variable_Mutation copy": Record<string, never>;
			"/Variable_Mutation": Record<string, never>;
			"/about": Record<string, never>;
			"/love": Record<string, never>;
			"/scholar-gpt": Record<string, never>;
			"/test": Record<string, never>;
			"/wave equation copy": Record<string, never>;
			"/wave equation": Record<string, never>
		};
		Pathname(): "/" | "/Blueberries" | "/Blueberries/" | "/Cosmology" | "/Cosmology/" | "/Creatine" | "/Creatine/" | "/Crontab" | "/Crontab/" | "/Dementia" | "/Dementia/" | "/Dominance_Submission" | "/Dominance_Submission/" | "/Evolution" | "/Evolution/" | "/Gina" | "/Gina/" | "/Grover copy" | "/Grover copy/" | "/Grover" | "/Grover/" | "/Insects copy" | "/Insects copy/" | "/Insects" | "/Insects/" | "/Isreal-US" | "/Isreal-US/" | "/Landauer’s principle" | "/Landauer’s principle/" | "/Machiavelli" | "/Machiavelli/" | "/Metabolic_Flexibility" | "/Metabolic_Flexibility/" | "/Nitrate-nitrite-research copy" | "/Nitrate-nitrite-research copy/" | "/Nitrate-nitrite-research" | "/Nitrate-nitrite-research/" | "/Nitrous_Oxide_synthesis" | "/Nitrous_Oxide_synthesis/" | "/P_adic copy" | "/P_adic copy/" | "/P_adic" | "/P_adic/" | "/Physics and Cosmology" | "/Physics and Cosmology/" | "/Recursive_Closures" | "/Recursive_Closures/" | "/Relationships" | "/Relationships/" | "/Relationships/(99) Philosos - YouTube_files" | "/Relationships/(99) Philosos - YouTube_files/" | "/Resistance_Workout" | "/Resistance_Workout/" | "/Seduction" | "/Seduction/" | "/Server copy" | "/Server copy/" | "/Server" | "/Server/" | "/Sweeteners" | "/Sweeteners/" | "/Thoughtful" | "/Thoughtful/" | "/Variable_Mutation copy" | "/Variable_Mutation copy/" | "/Variable_Mutation" | "/Variable_Mutation/" | "/about" | "/about/" | "/love" | "/love/" | "/scholar-gpt" | "/scholar-gpt/" | "/test" | "/test/" | "/wave equation copy" | "/wave equation copy/" | "/wave equation" | "/wave equation/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/robots.txt" | string & {};
	}
}