<div class="header">
	<h1 id="name">Benjamin Hinchliff</h1>
</div>

<style lang="scss">
	.header {
		position: relative;
		background-color: $light-accent;
		padding: 2.5%;
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
		font-size: 4.25rem;
		font-weight: 300;
		font-family: $fonts;
		text-align: center;
		padding-top: 5rem;
		padding-bottom: 5rem;
		margin: 0;
	}

	@media only screen and (prefers-color-scheme: dark) {
		.header::before {
			filter: invert(100%);
		}

		#name {
			color: white;
		}
	}
</style>
