<script>
	import '$lib/style/global.scss';
	import Banner from './Banner.svelte';
	import Container from './Container.svelte';
	import Navbar from './Navbar.svelte';
</script>

<Container>
	<Banner />
	<Navbar />
	<slot />
</Container>
