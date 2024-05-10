<script>
	import Header from './Header.svelte';
	import Sidebar from '$components/sidebar.svelte';

	import '$assets/css/app.scss';
</script>

<div class="fixed left-0 right-0 top-0 bottom-0">
	<Header />
	<main class="absolute left-0 right-0 top-[80px] bottom-0 overflow-y-auto bg-[url('/src/assets/images/home_bg.jpg')] bg-cover bg-center">
		<Sidebar />
		<slot />
	</main>
</div>
