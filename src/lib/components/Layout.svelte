<script>
	import '$lib/style/global.scss';
	import Banner from './Banner.svelte';
	import Container from './Container.svelte';
</script>

<Container>
	<Banner />
	<slot />
</Container>
