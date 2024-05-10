<script lang="ts">
	import HomeSection from '$components/home/home-section.svelte';
	import ServiceSection from '$components/home/services-section.svelte';
	import Footer from '$components/home/footer.svelte';
	import InfoSection from '$components/home/info-section.svelte';
	import StorySection from '$components/home/story-section.svelte';
	import DemoSection from '$components/home/demo-section.svelte';
</script>

<section class="w-full h-full">
	<HomeSection />
	<StorySection />
	<DemoSection />
	<ServiceSection />
	<InfoSection />
	<Footer />
</section>
