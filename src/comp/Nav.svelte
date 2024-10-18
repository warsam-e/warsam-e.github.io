<nav>
	<div class="right">
		<a
			class="link"
			href="https://github.com/warsam-e"
			target="_blank"
			rel="noopener noreferrer">GitHub</a
		>
		<a
			class="link"
			href="mailto:contact@warsame.me"
			target="_blank"
			rel="noopener noreferrer">Contact Me</a
		>
	</div>
</nav>

<style lang="scss">
	nav {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: flex-end;
		padding: 2em 8.9rem;
		> .right {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			> a {
				margin-left: 1em;
				font-size: 1.2em;
				font-weight: 500;
			}
		}
	}

	@media only screen and (max-width: 820px) {
		nav {
			padding: 1em 1.5em;
		}
	}
</style>
