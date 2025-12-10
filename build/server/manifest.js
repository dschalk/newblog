const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DQZNG_0S.js",app:"_app/immutable/entry/app.BcyFNWt-.js",imports:["_app/immutable/entry/start.DQZNG_0S.js","_app/immutable/chunks/C4J5lQvb.js","_app/immutable/chunks/CxrdEmwg.js","_app/immutable/chunks/B3_wD8SH.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/BA_B0UyO.js","_app/immutable/chunks/rU2UCot4.js","_app/immutable/chunks/D1Hr61Oo.js","_app/immutable/entry/app.BcyFNWt-.js","_app/immutable/chunks/B3_wD8SH.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/BA_B0UyO.js","_app/immutable/chunks/rU2UCot4.js","_app/immutable/chunks/D1Hr61Oo.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CxrdEmwg.js","_app/immutable/chunks/b8UvT_zd.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-qQkhlxbB.js')),
			__memo(() => import('./chunks/1-BE9MN_Yj.js')),
			__memo(() => import('./chunks/2--qnlNTKX.js')),
			__memo(() => import('./chunks/3-BZSKnwDW.js')),
			__memo(() => import('./chunks/4-_JJHL-D8.js')),
			__memo(() => import('./chunks/5-BQOy62fW.js')),
			__memo(() => import('./chunks/6-B6Wl4Tl0.js')),
			__memo(() => import('./chunks/7-CN9icDje.js')),
			__memo(() => import('./chunks/8-BkqzyB5q.js')),
			__memo(() => import('./chunks/9-DXoiIv1Y.js')),
			__memo(() => import('./chunks/10-CQphv3Zx.js')),
			__memo(() => import('./chunks/11-uhVQ6oEX.js')),
			__memo(() => import('./chunks/12-D01Lezas.js')),
			__memo(() => import('./chunks/13-CKn7kzhT.js')),
			__memo(() => import('./chunks/14-Ci_fe2Em.js')),
			__memo(() => import('./chunks/15-DkzqiqXg.js')),
			__memo(() => import('./chunks/16-DRrWyXr1.js')),
			__memo(() => import('./chunks/17-Br8K-3Yk.js')),
			__memo(() => import('./chunks/18-BPkNRe7k.js')),
			__memo(() => import('./chunks/19-DClCof5Q.js')),
			__memo(() => import('./chunks/20-D4U8EoQn.js')),
			__memo(() => import('./chunks/21-BSrkPN6-.js')),
			__memo(() => import('./chunks/22-DkmrLHXw.js')),
			__memo(() => import('./chunks/23-Bpnnlh__.js')),
			__memo(() => import('./chunks/24-DglQRIvq.js')),
			__memo(() => import('./chunks/25-B72qXMZo.js')),
			__memo(() => import('./chunks/26-B8zFnnPJ.js')),
			__memo(() => import('./chunks/27-Ct5bDiRE.js')),
			__memo(() => import('./chunks/28-BsZLf9vu.js')),
			__memo(() => import('./chunks/29-CMw06vxm.js')),
			__memo(() => import('./chunks/30-CCIQk_vd.js')),
			__memo(() => import('./chunks/31-DXz30GGc.js')),
			__memo(() => import('./chunks/32-CaT_HHRx.js')),
			__memo(() => import('./chunks/33-CMPE5fK9.js')),
			__memo(() => import('./chunks/34-C5FpVYIh.js')),
			__memo(() => import('./chunks/35-CpaXOxpb.js')),
			__memo(() => import('./chunks/36-C3PJjp41.js')),
			__memo(() => import('./chunks/37-WyZ72MUg.js')),
			__memo(() => import('./chunks/38-D8g48IKG.js')),
			__memo(() => import('./chunks/39-C9a2FiFq.js')),
			__memo(() => import('./chunks/40-BHzaL8jX.js')),
			__memo(() => import('./chunks/41-BAiDjaMd.js')),
			__memo(() => import('./chunks/42-B_pCtdNG.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/Blueberries",
				pattern: /^\/Blueberries\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/Cosmology",
				pattern: /^\/Cosmology\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/Creatine",
				pattern: /^\/Creatine\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/Crontab",
				pattern: /^\/Crontab\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/Dementia",
				pattern: /^\/Dementia\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/Dominance_Submission",
				pattern: /^\/Dominance_Submission\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/Evolution",
				pattern: /^\/Evolution\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/Gina",
				pattern: /^\/Gina\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/Grover copy",
				pattern: /^\/Grover copy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/Grover",
				pattern: /^\/Grover\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/Insects copy",
				pattern: /^\/Insects copy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/Insects",
				pattern: /^\/Insects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/Isreal-US",
				pattern: /^\/Isreal-US\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/Landauer’s principle",
				pattern: /^\/Landauer’s principle\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/Machiavelli",
				pattern: /^\/Machiavelli\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/Metabolic_Flexibility",
				pattern: /^\/Metabolic_Flexibility\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/Nitrate-nitrite-research copy",
				pattern: /^\/Nitrate-nitrite-research copy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/Nitrate-nitrite-research",
				pattern: /^\/Nitrate-nitrite-research\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/Nitrous_Oxide_synthesis",
				pattern: /^\/Nitrous_Oxide_synthesis\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/P_adic copy",
				pattern: /^\/P_adic copy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/P_adic",
				pattern: /^\/P_adic\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/Physics and Cosmology",
				pattern: /^\/Physics and Cosmology\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/Recursive_Closures",
				pattern: /^\/Recursive_Closures\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/Relationships",
				pattern: /^\/Relationships\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/Research_2",
				pattern: /^\/Research_2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/Research",
				pattern: /^\/Research\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/Resistance_Workout",
				pattern: /^\/Resistance_Workout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/SUV",
				pattern: /^\/SUV\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/Seduction",
				pattern: /^\/Seduction\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/Server copy",
				pattern: /^\/Server copy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/Server",
				pattern: /^\/Server\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/Sweeteners",
				pattern: /^\/Sweeteners\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/Thoughtful",
				pattern: /^\/Thoughtful\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/Variable_Mutation copy",
				pattern: /^\/Variable_Mutation copy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/Variable_Mutation",
				pattern: /^\/Variable_Mutation\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/love",
				pattern: /^\/love\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 39 },
				endpoint: null
			},
			{
				id: "/test",
				pattern: /^\/test\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 40 },
				endpoint: null
			},
			{
				id: "/wave equation copy",
				pattern: /^\/wave equation copy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 42 },
				endpoint: null
			},
			{
				id: "/wave equation",
				pattern: /^\/wave equation\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 41 },
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
