<script>
    import Window from "$lib/components/Window.svelte";
    import crash from "$lib/images/funne.gif";
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<main>
    <Window engraved={true} >
        <img src={crash}>
    </Window>
</main>