<script lang="ts">
	import { page } from '$app/stores';

	interface Link {
		href: string;
		text: string;
	}

	const links: Link[] = [
		{ href: '/', text: 'About' },
		{ href: '/projects', text: 'Projects' },
		{ href: '/Resume_CV.pdf', text: 'CV' }
	];
</script>

<nav>
	{#each links as { href, text }}
		<a class={$page.url.pathname === href ? 'active' : ''} {href}>{text}</a>
	{/each}
</nav>

<style lang="scss">
	nav {
		padding-top: 0.5rem;
		display: flex;
		justify-content: center;
		align-content: center;
	}

	nav a {
		color: $light-accent;
		font-family: $fonts;
		font-size: 1.5rem;
		text-decoration: underline;
		display: inline-block;
		padding: 0.5rem;
		margin: auto 0.2rem;
		border-radius: 0.5rem;
		transition: color 0.15s ease-in-out 0s;

		&:hover {
			background-color: rgba($dark-accent, 0.25);
		}

		&.active {
			text-decoration: none;
		}
	}
</style>
