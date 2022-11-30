import type { PageLoad } from './$types';
import type { Repos } from '$lib/types/repos';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch(`/api/repos/1`);
	const repos: Repos = await res.json();
	return { repos };
};
