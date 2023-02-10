<script lang="ts">
	import Banner from '$lib/components/Banner.svelte';
	import Content from '$lib/components/Content.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Banner />
<Navbar />
<Content>
	<slot />
</Content>

<style lang="scss">
	:global(body) {
		margin: 0;
		padding: 0;
		color: $light-text;
		background-color: $light-primary;
	}

	@media screen and (prefers-color-scheme: dark) {
		:global(body) {
			color: $dark-text;
			background-color: $dark-primary;
		}
	}
</style>
