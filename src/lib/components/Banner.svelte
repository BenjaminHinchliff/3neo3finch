<div class="header">
	<h1 id="name">Benjamin Hinchliff</h1>
</div>

<style type="scss">
	@use '../style/palette.scss';

	.header {
		position: relative;
		background-color: palette.$primary-light;
		border-radius: 0.25rem;
		border-end-end-radius: 0;
		border-end-start-radius: 0;
		z-index: -1000;
	}

	.header::before {
		content: '';
		background-image: url('/logo.svg');
		background-repeat: no-repeat;
		background-position: center;
		position: absolute;
		top: 0;
		right: 0;
		bottom: -0.4rem;
		left: 0;
		z-index: -999;
		opacity: 0.3;
	}

	#name {
		font-size: 3.75rem;
		font-weight: 300;
		text-align: center;
		padding-top: 5rem;
		padding-bottom: 5rem;
		margin: 0;
	}

	@media (prefers-color-scheme: dark) {
		.header {
			background-color: palette.$primary-dark;
		}

		.header::before {
			filter: invert(100%);
		}

		#name {
			color: white;
		}
	}
</style>
