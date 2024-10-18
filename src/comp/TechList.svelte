<script lang="ts">
	import { technologies, logos } from "../lib";
</script>

<div class="tech-list">
	<div class="title">Technologies</div>
	<div class="sections">
		{#each technologies as { section, list }}
			<section>
				<div class="title">{section}</div>
				<div class="list">
					{#each list as { label, icon, href, bg, invert_type }}
						<a
							{href}
							class="item"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div
								class="logo"
								style="--icon-bg: rgba({bg.join(',')});"
								data-invert={invert_type}
							>
								<img src={logos[icon]} alt="" />
							</div>

							<div class="label">{label}</div>
						</a>
					{/each}
				</div>
			</section>
		{/each}
	</div>
</div>

<style lang="scss">
	.tech-list {
		padding: 0 8.9rem 5rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		> .title {
			font-size: 1.5rem;
			font-weight: 300;
		}
		> .sections {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;

			> section {
				display: flex;
				flex-direction: column;
				gap: 1rem;
				> .title {
					opacity: 0.6;
					font-weight: 300;
				}
				> .list {
					display: grid;
					grid-template-columns: repeat(
						auto-fill,
						minmax(25rem, 1fr)
					);
					gap: 0.5rem;
					> .item {
						padding: 1em;
						display: flex;
						align-items: center;
						gap: 1rem;
						background: rgba(0, 0, 0, 0.04);
						border-radius: calc(4rem / 4.4);
						color: inherit;
						text-decoration: none;
						transition: background 0.2s ease-in-out;
						> .logo {
							height: 4em;
							width: 4em;
							background: var(--icon-bg);
							padding: 0.8em;
							border-radius: 0.9em;
							> img {
								height: 100%;
								width: 100%;
								object-fit: contain;
							}
						}
						> .label {
							font-weight: 450;
						}

						&:hover {
							background: rgba(0, 0, 0, 0.08);
						}
						&:active {
							background: rgba(0, 0, 0, 0.12);
						}
					}
				}
			}
		}
	}

	@media only screen and (max-width: 820px) {
		.tech-list {
			padding: 1em 1.5em 5rem;
			> .sections {
				> section {
					> .list {
						grid-template-columns: 1fr;
					}
				}
			}
		}
	}

	@media (prefers-color-scheme: dark) {
		.tech-list {
			> .sections {
				> section {
					> .list {
						> .item {
							background: rgba(255, 255, 255, 0.04);
							&:hover {
								background: rgba(255, 255, 255, 0.08);
							}
							&:active {
								background: rgba(255, 255, 255, 0.12);
							}
							> .logo {
								&[data-invert="invert-both"] {
									filter: invert(1);
								}
								&[data-invert="invert-bg"] {
									filter: invert(1);
									> img {
										filter: invert(1);
									}
								}

								&[data-invert="invert-logo"] {
									> img {
										filter: invert(1);
									}
								}
							}
						}
					}
				}
			}
		}
	}
</style>
