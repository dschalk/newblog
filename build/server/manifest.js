const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.C0Tr7iff.js",app:"_app/immutable/entry/app.CQBXUxlM.js",imports:["_app/immutable/entry/start.C0Tr7iff.js","_app/immutable/chunks/d3-AzE6n.js","_app/immutable/chunks/DjjVuYvg.js","_app/immutable/chunks/DBwsKZa4.js","_app/immutable/entry/app.CQBXUxlM.js","_app/immutable/chunks/DjjVuYvg.js","_app/immutable/chunks/DXr5GbWP.js","_app/immutable/chunks/D-hE1vav.js","_app/immutable/chunks/DBwsKZa4.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-B0hxcrTT.js')),
			__memo(() => import('./chunks/1-DWI1LI0d.js')),
			__memo(() => import('./chunks/2-BuZrfM13.js')),
			__memo(() => import('./chunks/3-BGF079zS.js')),
			__memo(() => import('./chunks/4-DT8HezOE.js')),
			__memo(() => import('./chunks/5-DpKQQyzg.js')),
			__memo(() => import('./chunks/6-BEGA7pXK.js')),
			__memo(() => import('./chunks/7-CB4Rf8gS.js')),
			__memo(() => import('./chunks/8-EAU0Mi6V.js')),
			__memo(() => import('./chunks/9-6BbGsyea.js')),
			__memo(() => import('./chunks/10-DmF6cInH.js')),
			__memo(() => import('./chunks/11-DS-enxzR.js')),
			__memo(() => import('./chunks/12-02DWJLdT.js')),
			__memo(() => import('./chunks/13-25Kc0itB.js')),
			__memo(() => import('./chunks/14-COZAbwZe.js')),
			__memo(() => import('./chunks/15-DeO3XGWe.js')),
			__memo(() => import('./chunks/16-BprfL-in.js')),
			__memo(() => import('./chunks/17-ebyb2jfY.js')),
			__memo(() => import('./chunks/18-Dyf4Fyv2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/Crontab",
				pattern: /^\/Crontab\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/Grover copy",
				pattern: /^\/Grover copy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/Grover",
				pattern: /^\/Grover\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/Insects copy",
				pattern: /^\/Insects copy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/Insects",
				pattern: /^\/Insects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/Nitrate-nitrite-research copy",
				pattern: /^\/Nitrate-nitrite-research copy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/Nitrate-nitrite-research",
				pattern: /^\/Nitrate-nitrite-research\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/P_adic copy",
				pattern: /^\/P_adic copy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/P_adic",
				pattern: /^\/P_adic\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/Relationships",
				pattern: /^\/Relationships\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/Server copy",
				pattern: /^\/Server copy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/Server",
				pattern: /^\/Server\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/Variable_Mutation copy",
				pattern: /^\/Variable_Mutation copy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/Variable_Mutation",
				pattern: /^\/Variable_Mutation\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/wave equation copy",
				pattern: /^\/wave equation copy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/wave equation",
				pattern: /^\/wave equation\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
