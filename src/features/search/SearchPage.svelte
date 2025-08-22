<script>
    import { page } from "$app/stores";

    // import { page } from "$app/state";
    import Navigasi from "$lib/components/Navigasi.svelte";
    import BouquetModel from "$lib/models/BouquetModel";
    import { onMount } from "svelte";
    let produk = $state([]);
    page.subscribe(({ params }) => {
        const bouquet = new BouquetModel();

        console.log(params.search);
        produk = bouquet.getSearch(params.search);
    });
</script>

<Navigasi />
<main class="relative z-20">
    {#each produk as item}
        <h1>this search is {item.name}</h1>
    {/each}
</main>
