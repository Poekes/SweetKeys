<script>
    import { goto, replaceState } from "$app/navigation";
    import { redirect } from "@sveltejs/kit";
    import { onMount } from "svelte";
    export let navi;
    const contohPencarian = [
        { text: "Bouquet Pita Satin", color: "pink" },
        { text: "Bouquet flowers", color: "blue" },
        { text: "Bouquet uang", color: "blue" },
        { text: "Bouquet foto", color: "green" },
        { text: "Bouquet boneka", color: "pink" },
        { text: "Bouquet jajan", color: "blue" },
        { text: "Bouquet kawat bulu", color: "blue" },
        { text: "Bouquet kupu kupu", color: "pink" },
        { text: "Bouquet custom", color: "pink" },
    ];
    let searchInput;

    const handlerSearch = ({ target }) => {
        const valueSearch = searchInput.value;
        if (!valueSearch) return;

        goto(`/search/${valueSearch}`, {});
        navi.set(null);
    };
</script>

<div class="w-full max-w-7xl m-auto py-16 px-4">
    <div class="flex flex-col items-center">
        <div class="relative w-full max-w-md">
            <input
                type="text"
                name="search"
                placeholder="Cari sesuatu..."
                bind:this={searchInput}
                autofocus
                on:change={handlerSearch}
                class="border-b-2 bg-black/5 text-white border-gray-50 rounded-full py-3 px-5 w-full focus:outline-none focus:ring-2 focus:ring-blue-300 shadow transition"
            />
            <svg
                on:click={handlerSearch}
                class="absolute cursor-pointer right-4 top-1/2 transform -translate-y-1/2 text-white"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
            >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
        </div>

        <div class="mt-6 w-full max-w-md">
            <div class="text-md text-white mb-2">pencarian:</div>
            <div class="flex flex-wrap gap-2">
                {#each contohPencarian as item, i}
                    <button
                        on:click={() => {
                            goto(`/search/${item.text}`, {});
                            navi.set(null);
                        }}
                        class="px-4 py-2 rounded-full moveTranslateX cursor-pointer transition
                            bg-{item.color}-100 text-{item.color}-700 hover:bg-{item.color}-200"
                        style="animation-delay: {100 * i}ms;"
                        >{item.text}</button
                    >
                {/each}
            </div>
        </div>
    </div>
</div>
