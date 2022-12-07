<script lang="ts">
	import Repo from './Repo.svelte';
	import type { Repos } from '$lib/types/repos';
	import { createEventDispatcher } from 'svelte';
	import Loader from './Loader.svelte';

	const dispatch = createEventDispatcher();

	export let repos: Repos;
	export let has_more: boolean;

	let loading = false;

	function load_more() {
		loading = true;
		dispatch('loadmore');
	}

	// set loading to false when repos is updated
	$: loading = repos && false;
</script>

<div class="repo-list">
	<div class="repos">
		{#each repos.list as { node_id, html_url, name, description } (node_id)}
			<Repo {html_url} {name} {description} />
		{/each}
	</div>
	{#if loading}
		<Loader />
	{:else if has_more}
		<button class="more-button jsonly" on:click={load_more}>Load More</button>
	{:else}
		<p class="end-marker">no more repositories :(</p>
	{/if}
</div>

<noscript>
	<!-- for now just hide the load more button if javascript isn't enabled -->
	<style>
		.jsonly {
			display: none;
		}
	</style>
</noscript>

<style lang="scss">
	.more-button {
		width: 80%;
		margin-left: auto;
		margin-right: auto;
		margin-top: 1rem;
		margin-bottom: 0;
	}
</style>
