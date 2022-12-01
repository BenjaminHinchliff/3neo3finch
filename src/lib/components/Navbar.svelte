<nav>
	<a href="/">About</a>
	<a href="/projects">Projects</a>
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
		color: #cdcdcd;
		font-size: 1.25rem;
		text-decoration: none;
		display: inline-block;
		margin: auto 0.2rem;
		transition: color 0.15s ease-in-out 0s;

		&:hover {
			color: #ffffff;
		}
	}
</style>
