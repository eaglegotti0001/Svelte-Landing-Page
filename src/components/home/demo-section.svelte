<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	let intersecting: any;
	let element: HTMLDivElement;
</script>

<IntersectionObserver {element} bind:intersecting>
	<div class="flex w-full py-10 lg:py-[4%] bg-gradient" bind:this={element}>
		<div class="container mx-auto flex flex-col">
			<div class="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4 text-white">
				<div class="flex flex-col mb-8 w-full px-4 {intersecting ? 'ml-0 lg:duration-1000 lg:ease-out' : 'lg:-ml-16'}">
					<p class="text-xl md:text-2xl lg:text-3xl font-bold leading-normal mb-8">DESIGNED BY REAL ESTATE AND TECHNOLOGY EXPERTS</p>

					<button class="uppercase rounded border border-2 border-white px-10 py-2 lg:py-4 w-full lg:w-fit text-sm font-bold"> Request A Demo </button>
				</div>

				<div class="flex w-full px-4 text-xl {intersecting ? 'ml-0 lg:duration-1000 lg:ease-out' : 'lg:ml-16'}">
					<p>At State Listings, we believe that brokers should own their own data. We provide the tools and know-how to get the job done without getting in your way. Ready to see a technology solution that actually solves your problems?</p>
				</div>
			</div>
		</div>
	</div>
</IntersectionObserver>
