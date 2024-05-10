<script lang="ts">
	import { sidebar } from '$src/lib/store/sidebar.service';
	import { NavItems } from '$lib/types/nav';
	import chevronRight from '$assets/svg/chevron-right.svg';
</script>

<div class="md:hidden fixed left-0 top-[80px] bottom-0 z-10 bg-gray-100 border border-gray-300 py-4 w-[80%] {$sidebar.isOpened ? 'ml-[0] duration-500 ease-out' : '-ml-[80%] duration-100 ease-in'}">
	{#if $sidebar.isOpened}
		<div class="flex flex-col w-full">
			{#each NavItems as item}
				<div class="text-gray-900 uppercase text-sm cursor-pointer flex flex-row items-center py-4 hover:bg-gray-200 px-8">
					<span class="mr-1">{item.name}</span>
					{#if item.children && item.children.length > 0}
						<img src={chevronRight} width="24px" height="24px" alt="down" />
					{/if}
				</div>
			{/each}
		</div>
	{/if}
</div>
