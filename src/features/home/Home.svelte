<script>
    import { replaceState } from "$app/navigation";
    import { assets, base } from "$app/paths";
    import CardRounded from "$lib/components/CardRounded.svelte";
    import H1 from "$lib/components/H1.svelte";
    import P from "$lib/components/P.svelte";
    import formatRupiah from "$lib/helper/formatRupiah";
    import intersect from "$lib/helper/intersect";
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
    let targetIntersect;
    let produkAll = $state([]);
    let produks = $state([]);
    onMount(() => {
        const lastProduk = sessionStorage.getItem("produkLength");
        const windowScrollTop = sessionStorage.getItem(
            window.location.pathname,
        );
        // This will ensure the text is visible after the component mounts

        fetch(`${window.location.origin}/produks`, {
            method: "POST",
        })
            .then((response) => response.json())
            .then((res) => {
                produkAll.push(...res);
                produks.push(...res.slice(0, lastProduk || 4));
                produkAll.splice(0, lastProduk || 4);

                setTimeout(() => {
                    window.scrollTo({
                        top: windowScrollTop || 0,
                        behavior: "smooth",
                    });
                }, 50);
            });

        window.addEventListener("scroll", () => {
            sessionStorage.setItem(window.location.pathname, window.scrollY);
        });

        const whenIntersectView = (node) => {
            // if element on view
            produks.push(...produkAll.slice(0, 2));
            produkAll.splice(0, 2);
            sessionStorage.setItem(
                "produkLength",
                produks.length == 0 ? 4 : produks.length,
            );
        };

        if (targetIntersect) {
            intersect(targetIntersect, { threshold: 1.0 }, whenIntersectView);
        }
    });
</script>

<svelte:head>
    <title
        >Beli bouquet murah terdekat paguyangan, bumiayu, kranggan, banyumas
    </title>

    <meta name="robots" content="index, follow" />
    <meta
        name="description"
        content="berbagai Bouquet / buket murah mulai dari 25rb, khusus area paguyangan dan sekitar nya brebes jawa tengah, dan lucu"
    />

    <meta property="og:title" content="Beranda | Website Kamu" />
    <meta
        property="og:description"
        content="Deskripsi singkat untuk sosial media"
    />
</svelte:head>
<main class="font-sans m-auto w-full md:max-w-7xl z-20">
    <section
        class="py-12 px-4 grid md:grid-cols-4 md:gap-2 grid-cols-1 z-20 relative"
    >
        <!-- Teks Section -->
        <div class="col-span-1 md:max-w-96">
            <H1>
                Bouquet Murah Lucu dengan harga terjangkau mulai dari 20 ribu
            </H1>

            <P>
                Temukan berbagai pilihan bouquet cantik untuk hadiah, wisuda,
                ulang tahun, dan momen spesial lainnya.
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

        <div class="opacity-0 w-full h-60" bind:this={targetIntersect}></div>
    </section>
</main>
