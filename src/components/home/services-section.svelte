<script lang="ts">
	import nystatemls from '$assets/images/nystatemls_logo_small.png';
	import logo_brokerls from '$assets/images/logo_brokerls.png';
	import logo_mystate from '$assets/images/logo_mystate.png';
	import logo_sli_home from '$assets/images/logo_sli_home.jpg';
</script>

<div class="w-full bg-white py-12 lg:py-[4%]">
	<div class="container mx-auto px-6">
		<p class="text-xl md:text-2xl lg:text-3xl uppercase font-bold mb-10">Our Products And Services</p>

		<div class="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4">
			<div class="w-full flex flex-col">
				<div class="flex w-full flex-row mb-8">
					<div class="w-[30%] mr-4">
						<img src={nystatemls} width="100%" height="auto" alt="" />
					</div>

					<div class="flex flex-col w-[70%] lg:w-[60%] px-4 mb-8">
						<span class="text-gray-600 font-bold mb-4">NY STATE MLS</span>
						<span class="mb-8">Our flagship product, a statewide MLS covering the entirety of New York.</span>

						<button class="border border-2 border-gray-300 hover:bg-gray-100 rounded px-6 py-2 uppercase w-fit text-sm"> Learn more </button>
					</div>
				</div>

				<div class="flex w-full flex-row mb-8">
					<div class="w-[30%] mr-4">
						<img src={logo_brokerls} width="100%" height="auto" alt="" />
					</div>

					<div class="flex flex-col w-[70%] lg:w-[60%] px-4 mb-8">
						<span class="text-gray-600 font-bold mb-4">BROKERLS</span>
						<span class="mb-8">Own your own private MLS.</span>

						<button class="border border-2 border-gray-300 hover:bg-gray-100 rounded px-6 py-2 uppercase w-fit text-sm"> Learn more </button>
					</div>
				</div>
			</div>

			<div class="w-full flex flex-col">
				<div class="w-full flex flex-row mb-8">
					<div class="w-[30%]">
						<img src={logo_mystate} width="100%" height="auto" alt="" />
					</div>

					<div class="flex flex-col w-[70%] lg:w-[60%] px-4 mb-8">
						<span class="text-gray-600 font-bold mb-4">MY STATE MLS</span>
						<span class="mb-8">The first nationwide Multiple Listing Service, covering all US states and territories.</span>

						<button class="border border-2 border-gray-300 hover:bg-gray-100 rounded px-6 py-2 uppercase w-fit text-sm"> Learn more </button>
					</div>
				</div>

				<div class="w-full flex flex-row mb-8">
					<div class="w-[30%]">
						<img src={logo_sli_home} width="100%" height="auto" alt="" />
					</div>

					<div class="flex flex-col w-[70%] lg:w-[60%] px-4 mb-8">
						<span class="text-gray-600 font-bold mb-4">IDX WEBSITES</span>
						<span class="mb-8">Your own custom website, automatically updated with the MLS.</span>

						<button class="border border-2 border-gray-300 hover:bg-gray-100 rounded px-6 py-2 uppercase w-fit text-sm"> Learn more </button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
