<script>
	import { SvelteInertiaScroll } from 'svelteinertiascroll';
	import { page } from '$app/stores';
	import Lenis from '@studio-freight/lenis';
	import { onMount } from 'svelte';

	let finished;

	onMount(() => {
		const lenis = new Lenis();

		lenis.on('scroll', (e) => {

		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});
</script>


	<slot />
	

