export type NavItem = {
	name: string;
	link: string;
	children?: NavItem[];
};

export const NavItems = [
	{
		name: 'Home',
		link: '/'
	},
	{
		name: 'About',
		link: '/about',
		children: [
			{
				name: 'child',
				link: '/'
			}
		]
	},
	{
		name: 'Contact',
		link: '/contact'
	}
];
