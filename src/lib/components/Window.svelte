<script lang="ts">
	import WindowBorder from '$lib/components/WindowBorder.svelte';
	import WindowTitlebar from '$lib/components/WindowTitlebar.svelte';

	let { children, engraved = false } = $props();
</script>

<div
	class="window"
	class:window--engraved={engraved}
>
	<WindowBorder />
	<WindowTitlebar />
	<div class="window__content">
		{@render children?.()}
	</div>
</div>

<style lang="scss">
	@use '../sass/components';
</style>
