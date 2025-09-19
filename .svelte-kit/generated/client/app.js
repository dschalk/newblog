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
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29'),
	() => import('./nodes/30'),
	() => import('./nodes/31'),
	() => import('./nodes/32'),
	() => import('./nodes/33')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/Cosmology": [3],
		"/Creatine": [4],
		"/Crontab": [5],
		"/Dominance_Submission": [6],
		"/Evolution": [7],
		"/Gina": [8],
		"/Grover copy": [10],
		"/Grover": [9],
		"/Insects copy": [12],
		"/Insects": [11],
		"/Isreal-US": [13],
		"/Machiavelli": [14],
		"/Metabolic_Flexibility": [15],
		"/Nitrate-nitrite-research copy": [17],
		"/Nitrate-nitrite-research": [16],
		"/Nitrous_Oxide_synthesis": [18],
		"/P_adic copy": [20],
		"/P_adic": [19],
		"/Physics and Cosmology": [21],
		"/Recursive_Closures": [22],
		"/Relationships": [23],
		"/Resistance_Workout": [24],
		"/ScholarGPT": [25],
		"/Seduction": [26],
		"/Server copy": [28],
		"/Server": [27],
		"/Sucralose": [29],
		"/Variable_Mutation copy": [31],
		"/Variable_Mutation": [30],
		"/wave equation copy": [33],
		"/wave equation": [32]
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