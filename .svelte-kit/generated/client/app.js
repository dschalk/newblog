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
	() => import('./nodes/16')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/Grover copy": [4],
		"/Grover": [3],
		"/Insects copy": [6],
		"/Insects": [5],
		"/Nitrate-nitrite-research copy": [8],
		"/Nitrate-nitrite-research": [7],
		"/P_adic copy": [10],
		"/P_adic": [9],
		"/Server copy": [12],
		"/Server": [11],
		"/Variable_Mutation copy": [14],
		"/Variable_Mutation": [13],
		"/wave equation copy": [16],
		"/wave equation": [15]
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