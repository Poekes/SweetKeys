<script>
    import { page as pageStores } from "$app/stores";
    import { page } from "$app/state";
    import Navigasi from "$lib/components/Navigasi.svelte";
    import BouquetModel from "$lib/models/BouquetModel";
    import { onMount } from "svelte";
    import CardRounded from "$lib/components/CardRounded.svelte";
    import formatRupiah from "$lib/helper/formatRupiah";
    import H1 from "$lib/components/H1.svelte";
    import P from "$lib/components/P.svelte";
    let produks = $state([]);
    const bouquet = new BouquetModel();

    pageStores.subscribe((pg) => {
        if (pg.route.id == "/search/[search]") {
            const params = pg.params;
            produks = bouquet.getSearch(params.search);
        }
    });
</script>

<main class="font-sans m-auto w-full md:max-w-7xl z-20">
    <Navigasi />
    <section
        class="py-12 pt-4 px-4 grid md:grid-cols-4 md:gap-2 grid-cols-1 z-20 relative"
    >
        <!-- Teks Section -->
        <div class="col-span-1 md:max-w-96">
            <H1>
                Bouquet Murah Lucu dengan harga terjangkau mulai dari 20 ribu
            </H1>

            <P>
                Mencari "{page.params.search}"
            </P>
        </div>

        <div
            class=" col-span-3 grid lg:grid-cols-2 grid-cols-2 gap-4 w-full sm:px-10 items-baseline md:py-0 py-4"
        >
            <!-- produk section -->
            {#each produks as produk}
                <CardRounded {...produk} price={formatRupiah(produk.price)} />
            {/each}
        </div>
    </section>
</main>
