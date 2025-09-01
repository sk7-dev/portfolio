import CertificationData from './certification';
import VolunteeringData from './volunteering';
import ActivitiesData from './extracurricular';
import type { Highlight } from './types';

const title = 'Highlights';

/**
 * Map your existing certifications into Highlight items with kind='certification'
 */
const certsAsHighlights: Array<Highlight> = CertificationData.items.map((c) => ({
	...c,
	kind: 'certification' as const
}));

const items: Array<Highlight> = [
	...certsAsHighlights,
	...VolunteeringData.items,
	...ActivitiesData.items
];

export default { title, items };
