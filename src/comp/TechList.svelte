<script lang="ts">
	import { technologies, tech_icon } from "../lib";
</script>

<div class="tech-list">
	<div class="title">Technologies</div>
	<div class="sections">
		{#each technologies as { section, list }}
			<section>
				<div class="title">{section}</div>
				<div class="list">
					{#each list as { label, icon, href, bg }}
						<a
							{href}
							class="item"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={tech_icon(icon)}
								alt=""
								style="--icon-bg: rgba({bg.join(',')});"
							/>
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
		padding: 1em 8.9rem 5rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		> .title {
			font-size: 1.5rem;
			font-weight: 300;
		}
		> .sections {
			display: flex;
			flex-direction: column;
			gap: 2rem;

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
						gap: 0.3rem;
						background: rgba(0, 0, 0, 0.04);
						border-radius: calc(4rem / 4.4);
						color: inherit;
						text-decoration: none;
						transition: background 0.2s ease-in-out;
						> img {
							height: 4em;
							width: 4em;
							margin-right: 0.5em;
							padding: 0.8em;
							object-fit: contain;
							background: var(--icon-bg);
							border-radius: 0.9em;
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
							> img {
								background: var(--icon-bg);
							}
							&:hover {
								background: rgba(255, 255, 255, 0.08);
							}
							&:active {
								background: rgba(255, 255, 255, 0.12);
							}
						}
					}
				}
			}
		}
	}
</style>
