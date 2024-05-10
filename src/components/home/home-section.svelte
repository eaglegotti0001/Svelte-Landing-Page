<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	let intersecting: any;
	let element: HTMLDivElement;
</script>

<IntersectionObserver {element} bind:intersecting>
	<div id="home_section_id" class="relative flex w-full h-[80%]" bind:this={element}>
		<div class="flex items-center justify-center absolute left-0 right-0 bottom-0 py-12 lg:py-[5%] {intersecting ? 'bg-zinc-950/[.4] lg:duration-1000 lg:ease-out' : 'lg:bg-zinc-950/[.0]'}">
			<div class="flex container mx-auto items-center justify-center">
				<div class="flex flex-wrap justify-between w-full lg:w-[90%] xl:w-[80%] h-full">
					<div class="flex flex-col text-white mb-8 lg:w-[70%] px-4 {intersecting ? 'ml-0 lg:duration-1000 lg:ease-out' : 'lg:-ml-[10%]'}">
						<h2 class="text-xl md:text-2xl lg:text-3xl font-bold mb-4">YOUR ULTIMATE REAL ESTATE TOOLKIT</h2>
						<span class="text-xl"> After years of being frustrated with the state of real estate technology, we developed a suite of services that are effective - and affordable. </span>
					</div>

					<div class="px-4 flex items-center justify-end w-full lg:w-fit {intersecting ? 'mr-0 lg:duration-1000 lg:ease-out' : 'lg:-mr-[10%]'}">
						<button class="border border-2 border-white rounded uppercase w-full px-12 py-2 lg:py-4 text-xl font-bold text-white">Learn More</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</IntersectionObserver>
