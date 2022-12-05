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
		<a class={$page.url.pathname === href ? 'active' : ''} {href}>{text}</a>
	{/each}
</nav>

<style lang="scss">
	@use '../style/palette.scss';

	nav {
		background-color: palette.$primary-light;
		border-radius: 0.25rem;
		border-start-start-radius: 0;
		border-start-end-radius: 0;
		padding: 0.5rem;
		display: flex;
		justify-content: center;
		align-content: center;
	}

	@media (prefers-color-scheme: dark) {
		nav {
			background-color: palette.$primary-dark;
		}
	}

	nav a {
		color: #505050;
		font-size: 1.25rem;
		text-decoration: underline;
		display: inline-block;
		margin: auto 0.2rem;
		transition: color 0.15s ease-in-out 0s;

		&:hover {
			color: #000000;
		}

		&.active {
			text-decoration: none;
		}
	}

	@media (prefers-color-scheme: dark) {
		nav a {
			color: #cdcdcd;

			&:hover {
				color: #ffffff;
			}
		}
	}
</style>
