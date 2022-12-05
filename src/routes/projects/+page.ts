import type { PageLoad } from './$types';
import type { Repos } from '$lib/types/repos';

export const load: PageLoad = async ({ fetch, setHeaders }) => {
	const res = await fetch(`/api/repos/1`);
	const repos: Repos = await res.json();

	setHeaders({
		'cache-control': res.headers.get('cache-control') ?? "cache-control': 'public, max-age=3600"
	});

	return { repos };
};
