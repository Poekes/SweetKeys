<script>
    export let href;
    export let className = "";
</script>

{#if href}
    <a
        {href}
        {...$$restProps}
        class="{className} font-normal border-b-2 border-r-2 border-black/30 mb-4 px-4 cursor-pointer bg-[#009dff] py-0.5 md:py-1 rounded text-sm md:text-lg"
    >
        <slot />
    </a>
{:else}
    <button
        on:click
        class="{className} font-normal border-b-2 border-r-2 border-black/30 mb-4 px-4 cursor-pointer bg-[#009dff] py-0.5 md:py-1 rounded text-sm md:text-lg"
    >
        <slot />
    </button>
{/if}
