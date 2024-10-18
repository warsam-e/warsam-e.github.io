<header>
	<div class="name">Warsame Egeh</div>
	<div class="title">Full Stack Developer</div>
	<div class="desc">
		I started as a front-end web developer and expanded into backend, APIs,
		and mobile app development with Flutter.
	</div>
</header>

<style lang="scss">
	header {
		padding: 5em 8.9em 1.5rem;
		> .name {
			font-size: 2em;
		}
		.title {
			font-size: 3em;
			font-weight: 500;
		}
		> .desc {
			margin-top: 0.5em;
			max-width: 40rem;
			font-size: 1.2em;
			opacity: 0.6;
		}
	}

	@media only screen and (max-width: 820px) {
		header {
			padding: 5em 1.5em 1.5rem;
			> .name {
				font-size: 1.5em;
			}
			.title {
				font-size: 2.5em;
			}
			> .desc {
				font-size: 1em;
			}
		}
	}
</style>
