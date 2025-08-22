<script>
    import { page } from "$app/state";
    import { error } from "@sveltejs/kit";
    import { getContext, onMount, setContext } from "svelte";
    import PagesNotFound from "../../../features/PagesNotFound.svelte";
    import ShowProduk from "../../../features/produks/component/ShowProduk.svelte";
    import BouquetModel from "$lib/models/BouquetModel";

    const bouquet = new BouquetModel();

    let produk = $state(null);
    const fecthProdukBySlug = async () => {
        const slug = page.params.slug;
        produk = bouquet.getBouquetBySlug(slug);
    };

    onMount(() => {
        fecthProdukBySlug();
    });
</script>

{#if produk?.error}
    <PagesNotFound status="404" />
{/if}
{#if produk?.name}
    <ShowProduk {produk} />
{/if}
