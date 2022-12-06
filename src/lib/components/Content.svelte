<div class="content">
	<slot />
</div>

<style lang="scss">
	@use '../style/palette.scss';

	.content {
		background-color: palette.$bg-mid-light;
		border-radius: 0.25rem;
		padding: 1rem;
	}

	@media (prefers-color-scheme: dark) {
		.content {
			background-color: palette.$bg-mid-dark;
		}
	}
</style>
