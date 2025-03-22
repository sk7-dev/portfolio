import BaseData from './base';

const left = { title: BaseData.fullName, icon: 'i-carbon-code' } as const;

const items: Array<{
	title: string;
	icon: `i-carbon-${string}`;
	href: string;
}> = [
	{ title: 'Projects', icon: 'i-carbon-cube', href: '/projects' },
	{ title: 'Experience', icon: 'i-carbon-development', href: '/experience' },
	{ title: 'Education', icon: 'i-carbon-education', href: '/education' },
	{ title: 'Certifications', icon: 'i-carbon-certificate', href: '/certification' },
	{ title: 'Skills', icon: 'i-carbon-assembly-cluster', href: '/skills' }
	//{ title: 'Resume', icon: 'i-carbon-document', href: '/resume' }
];

const NavBarData = { left, items };

export default NavBarData;
