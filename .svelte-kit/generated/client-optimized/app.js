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
	() => import('./nodes/33'),
	() => import('./nodes/34'),
	() => import('./nodes/35'),
	() => import('./nodes/36'),
	() => import('./nodes/37'),
	() => import('./nodes/38'),
	() => import('./nodes/39'),
	() => import('./nodes/40'),
	() => import('./nodes/41'),
	() => import('./nodes/42')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/Blueberries": [3],
		"/Cosmology": [4],
		"/Creatine": [5],
		"/Crontab": [6],
		"/Dementia": [7],
		"/Dominance_Submission": [8],
		"/Evolution": [9],
		"/Gina": [10],
		"/Grover copy": [12],
		"/Grover": [11],
		"/Insects copy": [14],
		"/Insects": [13],
		"/Isreal-US": [15],
		"/Landauer’s principle": [16],
		"/Machiavelli": [17],
		"/Metabolic_Flexibility": [18],
		"/Nitrate-nitrite-research copy": [20],
		"/Nitrate-nitrite-research": [19],
		"/Nitrous_Oxide_synthesis": [21],
		"/P_adic copy": [23],
		"/P_adic": [22],
		"/Physics and Cosmology": [24],
		"/Recursive_Closures": [25],
		"/Relationships": [26],
		"/Research_2": [28],
		"/Research": [27],
		"/Resistance_Workout": [29],
		"/SUV": [30],
		"/Seduction": [31],
		"/Server copy": [33],
		"/Server": [32],
		"/Sweeteners": [34],
		"/Thoughtful": [35],
		"/Variable_Mutation copy": [37],
		"/Variable_Mutation": [36],
		"/about": [38],
		"/love": [39],
		"/test": [40],
		"/wave equation copy": [42],
		"/wave equation": [41]
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