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
	() => import('./nodes/42'),
	() => import('./nodes/43'),
	() => import('./nodes/44')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/AI_Careation": [3],
		"/Blueberries": [4],
		"/Cosmology": [5],
		"/Creatine": [6],
		"/Crontab": [7],
		"/Dementia": [8],
		"/Determinism": [9],
		"/Dominance_Submission": [10],
		"/Evolution": [11],
		"/Gina": [12],
		"/Grover copy": [14],
		"/Grover": [13],
		"/Insects copy": [16],
		"/Insects": [15],
		"/Isreal-US": [17],
		"/Landauer’s principle": [18],
		"/Machiavelli": [19],
		"/Metabolic_Flexibility": [20],
		"/Nitrate-nitrite-research copy": [22],
		"/Nitrate-nitrite-research": [21],
		"/Nitrous_Oxide_synthesis": [23],
		"/P_adic copy": [25],
		"/P_adic": [24],
		"/Physics and Cosmology": [26],
		"/Recursive_Closures": [27],
		"/Relationships": [28],
		"/Research_2": [30],
		"/Research": [29],
		"/Resistance_Workout": [31],
		"/SUV": [32],
		"/Seduction": [33],
		"/Server copy": [35],
		"/Server": [34],
		"/Sweeteners": [36],
		"/Thoughtful": [37],
		"/Variable_Mutation copy": [39],
		"/Variable_Mutation": [38],
		"/about": [40],
		"/love": [41],
		"/test": [42],
		"/wave equation copy": [44],
		"/wave equation": [43]
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