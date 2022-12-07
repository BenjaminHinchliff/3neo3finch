<script lang="ts">
	import { page } from '$app/stores';

	interface Link {
		href: string;
		text: string;
	}

	const links: Link[] = [
		{ href: '/', text: 'About' },
		{ href: '/projects', text: 'Projects' }
	];
</script>

<nav>
	{#each links as { href, text }}
		<a class="{$page.url.pathname === href ? 'active' : ''} button" {href}>{text}</a>
	{/each}
</nav>

<style lang="scss">
	@import '../style/global.scss';

	nav {
		padding-top: 0.5rem;
		display: flex;
		justify-content: center;
		align-content: center;
	}

	nav a {
		font-size: 1.25rem;
		text-decoration: underline;
		display: inline-block;
		margin: auto 0.2rem;
		transition: color 0.15s ease-in-out 0s;

		&.active {
			text-decoration: none;
		}
	}
</style>
