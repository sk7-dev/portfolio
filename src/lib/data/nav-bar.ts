import BaseData from './base';

const left = { title: BaseData.suffix, icon: 'i-carbon-code' } as const;

const primaryItems = [
	{ title: 'Projects', icon: 'i-carbon-cube', href: '/projects' },
	{ title: 'Experience', icon: 'i-carbon-development', href: '/experience' },
	{ title: 'Highlights', icon: 'i-carbon-star', href: '/highlights' }
] as const;

const secondaryItems = [
	{ title: 'Education', icon: 'i-carbon-education', href: '/education' },
	{ title: 'Skills', icon: 'i-carbon-assembly-cluster', href: '/skills' }
	//{ title: 'Certifications', icon: 'i-carbon-certificate', href: '/certification' }
] as const;

const NavBarData = { left, primaryItems, secondaryItems };

export default NavBarData;
