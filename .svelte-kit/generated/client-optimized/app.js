export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/Crontab": [3],
		"/Dominance_Submission": [4],
		"/Evolution": [5],
		"/Grover copy": [7],
		"/Grover": [6],
		"/Insects copy": [9],
		"/Insects": [8],
		"/Machiavelli": [10],
		"/Metabolic_Flexibility": [11],
		"/Nitrate-nitrite-research copy": [13],
		"/Nitrate-nitrite-research": [12],
		"/P_adic copy": [15],
		"/P_adic": [14],
		"/Physics and Cosmology": [16],
		"/Recursive_Closures": [17],
		"/Relationships": [18],
		"/ScholarGPT": [19],
		"/Server copy": [21],
		"/Server": [20],
		"/Variable_Mutation copy": [23],
		"/Variable_Mutation": [22],
		"/wave equation copy": [25],
		"/wave equation": [24]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';