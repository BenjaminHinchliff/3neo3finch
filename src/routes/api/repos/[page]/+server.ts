import { GITHUB_PAT } from '$env/static/private';
import { error, json } from '@sveltejs/kit';
import { Octokit } from 'octokit';
import type { RequestHandler } from './$types';

const octokit = new Octokit({ auth: GITHUB_PAT });

const username = await octokit.rest.users.getAuthenticated().then(({ data }) => data.name);

export const GET: RequestHandler = async ({ params: { page } }) => {
	const page_num = parseInt(page);
	if (isNaN(page_num)) {
		throw error(400, 'page parameter must be an int');
	}

	const res = await octokit.rest.repos
		.listForUser({
			username: username ?? 'BenjaminHinchliff',
			sort: 'pushed',
			per_page: 20,
			page: page_num
		})
		.catch(() => {
			throw error(500, 'internal server error');
		});
	if (res.status !== 200) {
		throw error(500, 'internal server error');
	}

	const has_next = res.headers.link
		?.split(',')
		.map((link) => link.split(';')[1].trim())
		.includes('rel="next"');

	return json(
		{
			list: res.data,
			has_next
		},
		{
			headers: {
				'cache-control': res.headers['cache-control'] ?? "cache-control': 'public, max-age=3600"
			}
		}
	);
};
