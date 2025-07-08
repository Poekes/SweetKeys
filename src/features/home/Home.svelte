<script>
    import { replaceState } from "$app/navigation";
    import { assets, base } from "$app/paths";
    import { page } from "$app/state";
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
    <title>Toko Bouquet di paguyangan murah, mulai harga 10rb an</title>
    <meta
        name="description"
        content="berbagai Bouquet / buket dan juga barang barang lucu murah mulai dari 10rb, khusus area paguyangan dan sekitar nya"
    />
    <meta
        name="keywords"
        content="Bouquet bunga, Bouquet flowers, bouquet lucu murah, penjual bouquet terdekat, toko bouquet paguyangan, toko bouquet, toko bunga, penjual bunga, toko buket bunga, toko buket murah, toko buket terdekat paguyangan, toko buket patuguran, toko buket bumiayu, toko buket kranggan, toko buket ajibarang"
    />
    <meta name="author" content="Sweetkeys" />
    <link rel="canonical" href={page.url.href} />
    <meta name="robots" content="index, follow" />
    <meta
        property="og:title"
        content="Toko Bouquet dan segala bunga lucu murah mulai dari 10rb an aja"
    />
    <meta
        property="og:description"
        content="SweetKeys Toko bouquet dan bunga asli dan lain nya, yang ada di paguyangan"
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={page.url.href} />
    <meta property="og:image" content="{page.url.origin}/bouquet-bunga.png" />
    <meta property="og:image:alt" content="Bouquet Flowers" />
    <meta property="og:site_name" content="SweetKeys" />

    <link rel="icon" href="{page.url.origin}/favicon.png" sizes="any" />
    <link rel="icon" href="{page.url.origin}/favicon.png" type="image/png" />
    <link rel="apple-touch-icon" href="{page.url.origin}/favicon.png" />

    <meta name="theme-color" content="#FFFFFF" />
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
