export const manifest = (() => {
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
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
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
