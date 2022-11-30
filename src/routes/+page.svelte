<script lang="ts" async>
	import '$lib/style/global.scss';
	import Container from '$lib/components/Container.svelte';
	import Banner from '$lib/components/Banner.svelte';
	import type { PageData } from './$types';
	import RepoList from '$lib/components/RepoList.svelte';

	let pages = {
		num: 1,
		has_next: true
	};

	async function load_more() {
		if (pages.has_next) {
			const res = await fetch(`/api/repos/${pages.num + 1}`);
			const more = await res.json();
			pages.has_next = more.has_next;
			if (more.has_next) {
				pages.num += 1;
				data.repos.list = [...data.repos.list, ...more.list];
			}
		}
	}

	export let data: PageData;
</script>

<Container>
	<Banner />
	<RepoList repos={data.repos} has_more={pages.has_next} on:loadmore={load_more} />
</Container>
