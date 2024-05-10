<script lang="ts">
	import phoneSvg from '$assets/svg/phone-solid.svg';
	import addressSvg from '$assets/svg/location-pin-solid.svg';
	import eamilSvg from '$assets/svg/envelope-solid.svg';
</script>

<div class="w-full bg-zinc-950/[.9] py-12 lg:py-[4%]">
	<div class="container mx-auto px-6 text-white flex justify-center">
		<div class="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-4 w-[80%]">
			<div class="w-full flex flex-col">
				<div class="flex flex-row uppercase text-md font-semibold mb-3">
					<img class="mr-4" src={addressSvg} width="16px" height="16px" alt="" />
					Address
				</div>
				<span class="ml-8">State Listings, Inc.</span>
				<span class="ml-8">601 Heritage Dr.</span>
				<span class="ml-8">Suite 450</span>
				<span class="ml-8">Jupiter FL 33458</span>
			</div>

			<div class="w-full flex flex-col">
				<div class="flex flex-row uppercase text-md font-semibold mb-3">
					<img class="mr-4" src={phoneSvg} width="16px" height="16px" alt="" />
					Phone
				</div>
				<span class="ml-8 mb-4">(888) 769-7657</span>

				<div class="flex flex-row uppercase text-md font-semibold mb-3">
					<img class="mr-4" src={phoneSvg} width="16px" height="16px" alt="" />
					Fax
				</div>

				<span class="ml-8 mb-4">(888) 617-8499</span>
			</div>

			<div class="w-full flex flex-col">
				<div class="flex flex-row uppercase text-md font-semibold mb-3">
					<img class="mr-4" src={eamilSvg} width="16px" height="16px" alt="" />
					Email
				</div>
				<span class="ml-8">mailus@statelistings.com</span>
			</div>
		</div>
	</div>
</div>
