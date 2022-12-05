<script lang="ts">
	import Layout from '$lib/components/Layout.svelte';

	const START_YEAR = 2015;
</script>

<Layout>
	<h1>Hi!</h1>
	<p>
		I'm Benjamin, a programmer. I've been programming for
		{new Date().getFullYear() - START_YEAR} years now, since early middle school. I'm largely self-taught,
		and am currently attending California Polytechnic University to improve my skills, and get a fancy
		certificate so you know I somewhat know what I'm doing.
	</p>
	<p>
		I've worked professionally doing contract work for Web Development (and yes I've worked a lot
		with React I just like Svelte). I've also got a lot of other skills, everything from 3d graphics
		to a bit of machine learning to game development to programming language development. I love to
		learn new things and am always trying something new and improving my skills.
	</p>
	<p>
		I'm familiar with most mainstream langages, including (but not limited to) Python,
		Javascript/Typescript, C, C++, Java, Bash, SQL (and database stuff generally), Rust, and
		Haskell. Obviously, I'm happy to learn new ones as the need arises.
	</p>
	<p>
		Outside of work, my hobbies include learning about philosiphy and ways of thinking and viewing
		the world, playing with my cats, hanging out with friends and/or my lovely girlfriend, and
		fixing and generally learning how things work.
	</p>
	<p>
		I've accumulated a lot of projects and experiments throughtout the years, in various stages of
		completion. I plan to prepare a showcase when I have more time, but for now please feel free to
		look at the projects page for a full list.
	</p>
</Layout>
