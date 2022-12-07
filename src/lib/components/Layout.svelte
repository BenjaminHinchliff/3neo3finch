<script lang="ts">
	import '$lib/style/global.scss';
	import Banner from './Banner.svelte';
	import Content from './Content.svelte';
	import Navbar from './Navbar.svelte';

	export let title: string;
</script>

<svelte:head>
	<title>{title} - Benjamin Hinchliff</title>
</svelte:head>

<main class="container">
	<Banner />
	<Navbar />
	<Content>
		<slot />
	</Content>
</main>
