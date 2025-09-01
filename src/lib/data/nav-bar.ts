import BaseData from './base';

const left = { title: BaseData.suffix, icon: 'i-carbon-code' } as const;

const primaryItems = [
	{ title: 'Projects', icon: 'i-carbon-cube', href: '/projects' },
	{ title: 'Experience', icon: 'i-carbon-development', href: '/experience' },
	{ title: 'Certifications', icon: 'i-carbon-certificate', href: '/certification' }
] as const;

const secondaryItems = [
	{ title: 'Skills', icon: 'i-carbon-assembly-cluster', href: '/skills' },
	{ title: 'Education', icon: 'i-carbon-education', href: '/education' }
] as const;

const NavBarData = { left, primaryItems, secondaryItems };

export default NavBarData;
