<script lang="ts">
	export let html_url: string;
	export let name: string;
	export let description: string | null;
</script>

<div class="repo">
	<a href={html_url} target="_blank" rel="noreferrer">
		<h2 class="repo-name">{name}</h2>
		<p class="repo-desc">{description ?? '(no description)'}</p>
	</a>
</div>

<style lang="scss">
	.repo {
		border-bottom: 1px solid #9ca3af;
		padding: 0.3rem 0.1rem;
	}

	.repo a {
		display: block;
		max-width: 100%;
		text-decoration: none;
		color: black;
		margin: 0.1rem 0;
		padding: 1.5rem;
		border-radius: 0.5rem;

		&:hover {
			background-color: #d0d0d0;
			transition: background-color 0.25s ease 0s;
		}
	}

	@media (prefers-color-scheme: dark) {
		.repo a {
			&:hover {
				background-color: #202020;
			}
		}
	}

	.repo .repo-name {
		font-weight: 600;
		font-size: 1.75rem;
		margin: 0;
		margin-bottom: 0.5rem;
	}

	.repo .repo-desc {
		margin: 0;
	}
</style>
