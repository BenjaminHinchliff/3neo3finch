<div class="content">
	<slot />
</div>

<style lang="scss">
	@use '../style/palette.scss';
	.content {
		background-color: palette.$bg-mid;
		border-radius: 0.25rem;
		padding: 1rem;
	}
</style>
