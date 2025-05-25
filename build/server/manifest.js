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
		client: {start:"_app/immutable/entry/start.ClpIwj2k.js",app:"_app/immutable/entry/app.CAvmiCbV.js",imports:["_app/immutable/entry/start.ClpIwj2k.js","_app/immutable/chunks/DGPS9G1W.js","_app/immutable/chunks/DjjVuYvg.js","_app/immutable/chunks/DBwsKZa4.js","_app/immutable/entry/app.CAvmiCbV.js","_app/immutable/chunks/DjjVuYvg.js","_app/immutable/chunks/DXr5GbWP.js","_app/immutable/chunks/D-hE1vav.js","_app/immutable/chunks/DBwsKZa4.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-B_NyuAqR.js')),
			__memo(() => import('./chunks/1-DaXTJXjx.js')),
			__memo(() => import('./chunks/2-BuZrfM13.js')),
			__memo(() => import('./chunks/3-I81b6-B0.js')),
			__memo(() => import('./chunks/4-7ZGrxNSc.js')),
			__memo(() => import('./chunks/5-Ch3sMzgC.js')),
			__memo(() => import('./chunks/6-BEGA7pXK.js')),
			__memo(() => import('./chunks/7-R5pVzH6M.js')),
			__memo(() => import('./chunks/8-EAU0Mi6V.js')),
			__memo(() => import('./chunks/9-Bt26-A7Y.js')),
			__memo(() => import('./chunks/10-DmF6cInH.js')),
			__memo(() => import('./chunks/11-O2Pke1V7.js')),
			__memo(() => import('./chunks/12-C_rsRVQ9.js')),
			__memo(() => import('./chunks/13-DaAO4-Jc.js')),
			__memo(() => import('./chunks/14-CQ-UQkKY.js')),
			__memo(() => import('./chunks/15-KuUClNaj.js')),
			__memo(() => import('./chunks/16-CZZL3TWa.js'))
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
				id: "/Grover copy",
				pattern: /^\/Grover copy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/Grover",
				pattern: /^\/Grover\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/Insects copy",
				pattern: /^\/Insects copy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/Insects",
				pattern: /^\/Insects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/Nitrate-nitrite-research copy",
				pattern: /^\/Nitrate-nitrite-research copy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/Nitrate-nitrite-research",
				pattern: /^\/Nitrate-nitrite-research\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/P_adic copy",
				pattern: /^\/P_adic copy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/P_adic",
				pattern: /^\/P_adic\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/Server copy",
				pattern: /^\/Server copy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/Server",
				pattern: /^\/Server\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/Variable_Mutation copy",
				pattern: /^\/Variable_Mutation copy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/Variable_Mutation",
				pattern: /^\/Variable_Mutation\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/wave equation copy",
				pattern: /^\/wave equation copy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/wave equation",
				pattern: /^\/wave equation\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
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
