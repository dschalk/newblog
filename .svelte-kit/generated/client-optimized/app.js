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
	() => import('./nodes/18')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/Crontab": [3],
		"/Grover copy": [5],
		"/Grover": [4],
		"/Insects copy": [7],
		"/Insects": [6],
		"/Nitrate-nitrite-research copy": [9],
		"/Nitrate-nitrite-research": [8],
		"/P_adic copy": [11],
		"/P_adic": [10],
		"/Relationships": [12],
		"/Server copy": [14],
		"/Server": [13],
		"/Variable_Mutation copy": [16],
		"/Variable_Mutation": [15],
		"/wave equation copy": [18],
		"/wave equation": [17]
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