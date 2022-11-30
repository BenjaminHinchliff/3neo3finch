<script lang="ts">
	import Repo from './Repo.svelte';
	import type { Repos } from '$lib/types/repos';
	import { afterUpdate, createEventDispatcher } from 'svelte';
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
	<style lang="scss">
		.jsonly {
			display: none;
		}
	</style>
</noscript>

<style lang="scss">
	.more-button {
		background-color: #d0d0d0;
		color: #565656;
		width: 95%;
		height: 3.5rem;
		margin: 0.5rem auto;
		display: block;
		border-width: 0;
		border-radius: 0.5rem;
		font-size: 1.2rem;
		font-weight: normal;
		cursor: pointer;
	}

	@media (prefers-color-scheme: dark) {
		.more-button {
			background-color: #202020;
			color: #808080;
		}
	}

	.end-marker {
		text-align: center;
	}
</style>
