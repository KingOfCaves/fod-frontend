<script lang="ts">
    import WindowBorder from "$lib/components/WindowBorder.svelte"
    import WindowTitlebar from "$lib/components/WindowTitlebar.svelte"

    export let engraved: Boolean = false
</script>

<div
    class="window"
    class:window--engraved={engraved}
>
    <WindowBorder />
    <WindowTitlebar />
    <div class="window__content">

    </div>
</div>