<script lang="ts">
	import { sidebar } from '$lib/store/sidebar.service';
	import logo from '$assets/images/logo.png';
	import { NavItems } from '$lib/types/nav';
	import chevronDown from '$assets/svg/chevron-down.svg';
	import menuBar from '$assets/svg/bars-solid.svg';

	const onClickMenu = () => {
		sidebar.update((value) => {
			value.isOpened = !value.isOpened;
			return value;
		});
	};
</script>

<div class="fixed left-0 right-0 top-0 h-[80px] z-[11] bg-gray-700">
	<div class="container mx-auto h-full">
		<div class="flex items-center justify-between h-full w-full px-4">
			<img class="cursor-pointer" src={logo} alt="logo" />

			<div class="hidden md:flex flex-row h-full items-center">
				{#each NavItems as item}
					<div class="mx-4 text-sky-300 uppercase text-lg cursor-pointer min-w-[100px] flex flex-row items-center">
						<span class="mr-1">{item.name}</span>
						{#if item.children && item.children.length > 0}
							<img src={chevronDown} width="24px" height="24px" alt="down" />
						{/if}
					</div>
				{/each}
			</div>

			<button class="flex md:hidden" on:click|preventDefault|stopPropagation={onClickMenu}>
				<img src={menuBar} width="20px" height="auto" alt="" />
			</button>
		</div>
	</div>
</div>
