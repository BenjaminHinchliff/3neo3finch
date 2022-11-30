import type { RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods';

export type Repos = {
	list: RestEndpointMethodTypes['repos']['listForUser']['response']['data'];
	has_next: bool;
};
