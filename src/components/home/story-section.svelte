<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	let intersecting: any;
	let element: HTMLDivElement;
</script>

<IntersectionObserver {element} bind:intersecting>
	<div class="flex w-full py-10 lg:py-[4%] bg-white" bind:this={element}>
		<div class="container mx-auto px-6 flex flex-col">
			<span class="text-xl md:text-2xl lg:text-3xl font-bold mb-10 {intersecting ? 'mt-0 lg:duration-1000 lg:ease-out' : 'lg:-mt-16'}">OUR STORY</span>
			<span class="mb-8 {intersecting ? 'mb-8 lg:duration-1000 lg:ease-out' : 'lg:mb-16'}">
				State Listings, Inc. began in 2009 as NY State MLS. Born from a desire to create a common sense MLS solution, New York’s statewide Multiple Listing Service quickly garnered agents across the state - as well as nationwide attention and demand for our
				services. 10 years later, our nationwide Multiple Listing Service, My State MLS, has agents in all 50 states and Puerto Rico. In addition to our MLSs, our services have expanded to include IDX feeds, website design, and private MLS administration.
			</span>

			<div class="flex flex-wrap w-full">
				<button class="uppercase rounded border border-2 border-gray-300 px-10 w-full lg:w-fit py-3 lg:py-4 text-sm font-bold lg:mr-2 mb-4"> Explore Our Solutions </button>

				<button class="uppercase rounded border border-2 border-gray-300 px-10 w-full lg:w-fit py-3 lg:py-4 text-sm font-bold mb-4"> Request A Demo </button>
			</div>
		</div>
	</div>
</IntersectionObserver>
