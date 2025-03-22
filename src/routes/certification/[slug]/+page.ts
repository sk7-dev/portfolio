import CertData from '$lib/data/certification';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const item = CertData.items.find((item) => {
			return item.slug === params.slug;
		});

		return { item };
	}
}
