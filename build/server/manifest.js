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
		client: {start:"_app/immutable/entry/start.DAonRhzm.js",app:"_app/immutable/entry/app.DrhL_b9S.js",imports:["_app/immutable/entry/start.DAonRhzm.js","_app/immutable/chunks/DVtuJ3NB.js","_app/immutable/chunks/B5DbjzqV.js","_app/immutable/chunks/Cazz7ul6.js","_app/immutable/chunks/Dhjrc8QS.js","_app/immutable/chunks/BZJ4wAHB.js","_app/immutable/entry/app.DrhL_b9S.js","_app/immutable/chunks/Cazz7ul6.js","_app/immutable/chunks/B5DbjzqV.js","_app/immutable/chunks/Dhjrc8QS.js","_app/immutable/chunks/BZJ4wAHB.js","_app/immutable/chunks/DsnmJJEf.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-0aORTwWR.js')),
			__memo(() => import('./chunks/1-CIK7KaMC.js')),
			__memo(() => import('./chunks/2-DjkI4fdV.js')),
			__memo(() => import('./chunks/3-B2yhoju9.js')),
			__memo(() => import('./chunks/4-BW6699gK.js')),
			__memo(() => import('./chunks/5-BoQFn0XI.js'))
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
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/test",
				pattern: /^\/test\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
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
