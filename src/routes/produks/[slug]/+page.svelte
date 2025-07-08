<script>
    import { page } from "$app/state";
    import { error } from "@sveltejs/kit";
    import { getContext, onMount, setContext } from "svelte";
    import PagesNotFound from "../../../features/PagesNotFound.svelte";
    import ShowProduk from "../../../features/produks/component/ShowProduk.svelte";

    let produk = $state(null);
    const fecthProdukBySlug = async () => {
        const slug = page.params.slug;
        if (!sessionStorage.getItem(slug)) {
            const res = await fetch(window.location.href, { method: "POST" });

            if (res.status === 404) return (produk = { error: true });
            const data = await res.json();
            sessionStorage.setItem(slug, JSON.stringify(data));
            produk = data;
        } else {
            produk = JSON.parse(sessionStorage.getItem(slug));
        }
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
