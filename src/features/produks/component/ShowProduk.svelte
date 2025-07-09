<script>
    import Button from "$lib/components/Button.svelte";
    import formatRupiah from "$lib/helper/formatRupiah";
    import { fly, slide } from "svelte/transition";
    import CardPesan from "./CardPesan.svelte";

    const { produk } = $props();

    let howOrder = $state(false);
    function handleHowOrder() {
        howOrder = !howOrder;
    }
</script>

<!-- Route | produk/[slug]  -->

<svelte:head>
    <title>{produk?.name} - Produk</title>
    <meta name="description" content="Detail produk {produk?.name}" />
</svelte:head>

<section
    class="w-full h-72 border-b z-20 relative border-white md:h-96 flex items-center justify-center
bg-[image:radial-gradient(var(--color-gray-300)_1px,_transparent_0)] bg-fixed bg-[size:10px_10px]"
>
    <img
        src="/{produk.img}"
        in:fly={{ y: -20, duration: 1400 }}
        class="h-full object-cover"
        alt="Gambar {produk.name}"
    />
</section>

<main class="w-full max-w-7xl m-auto px-2 md:px-1 z-20 relative">
    <section class="flex flex-col items-center justify-center py-2">
        <h1
            class="text-3xl md:text-4xl font-extrabold text-white mb-2 drop-shadow-lg"
        >
            {produk?.name}
        </h1>
        <p
            class="text-2xl md:text-3xl font-semibold bg-opacity-70 px-4 md:py-2 text-white"
        >
            {formatRupiah(produk?.price)}
        </p>
    </section>

    <section class="mt-2 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
            <h2
                class="text-xl border-b border-white font-semibold text-white mb-2"
            >
                Deskripsi Produk
            </h2>
            <p class="text-white px-1 text-shadow-2xs mb-4">
                {produk?.description || "---"}
            </p>
            <ul class="text-gray-100 space-y-1 py-2">
                <li>
                    <span class="font-medium text-white">Kategori:</span>
                    {produk?.type || "-"}
                </li>
                <li>
                    <span class="font-medium text-white">Stok:</span>
                    {produk?.stok ?? "-"}
                </li>
            </ul>
            <div class="border-b border-white mt-4">
                <Button
                    on:click={handleHowOrder}
                    className="text-lg active:scale-95 transition-all font-semibold !mb-1 bg-gradient-to-bl to-blue-400 from-cyan-400 text-white py-1 shadow"
                >
                    Cara Pemesanan & Pengiriman <span
                        class="border-b-2 border-r-2 w-2 h-2 inline-block {howOrder
                            ? 'rotate-45'
                            : 'rotate-[-135deg]'}     transition-all ml-1"
                    ></span>
                </Button>
            </div>
            {#if howOrder}
                <div
                    transition:slide={{ duration: 200 }}
                    class="text-white px-1 space-y-3 text-shadow-2xs mb-4"
                >
                    <!-- {produk?.description || "Tidak ada deskripsi."} -->
                    <h3 class="text-2xl mt-2">Pemesanan</h3>
                    <p>
                        Silahkan click "Pesan Sekarang" yang ada di bawah ini,
                        untuk mengarahkan ke WhatsApp kami kaa, Otamatis produk
                        ini akan di tampilkan dibagian chat
                    </p>
                    <p>
                        Bisa juga menggunakan instagram kami ka, jangan lupa
                        kirim kan link atau foto produk nya ya ka, jika click
                        pesan melalui instagram akan tercopy link produk nya dan
                        akan mengarahkan ke instagram langsung, jangan lupa di
                        kirim kan ya ka
                    </p>
                </div>
            {/if}
        </div>
        <div class="flex flex-col gap-4">
            <CardPesan price={formatRupiah(produk?.price)} />
        </div>
    </section>
</main>

<style>
    .textStroke {
        -webkit-text-stroke: 1px black;
    }
</style>
