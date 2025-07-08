<script>
    import Button from "$lib/components/Button.svelte";
    import formatRupiah from "$lib/helper/formatRupiah";
    import { fly, slide } from "svelte/transition";

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
        transition:fly={{ y: -20, duration: 1400 }}
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
                <!-- {produk?.description || "Tidak ada deskripsi."} -->
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                nostrum aperiam nesciunt officia eaque, ipsam aliquam nobis sequi!
                Perferendis, magni?
            </p>
            <ul class="text-gray-300 space-y-1 py-2">
                <li>
                    <span class="font-medium text-white">Kategori:</span>
                    {produk?.category || "-"}
                </li>
                <li>
                    <span class="font-medium text-white">Stok:</span>
                    {produk?.stock ?? "-"}
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
                <p
                    transition:slide={{ duration: 200 }}
                    class="text-white px-1 text-shadow-2xs mb-4"
                >
                    <!-- {produk?.description || "Tidak ada deskripsi."} -->
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
                    ratione dicta recusandae totam facilis id cumque fugit, velit
                    minus exercitationem, libero laboriosam aut quia eum doloremque
                    impedit a facere debitis et! Eligendi dolor amet ea ullam laborum
                    illo suscipit, quo repellendus accusantium incidunt, quaerat
                    cum consequatur placeat, voluptate illum dolore voluptas fuga
                    beatae sunt facere! Facere atque dolor velit blanditiis odio
                    ducimus quia alias quaerat repudiandae impedit asperiores nisi,
                    ratione voluptate nihil repellendus fugiat quam laborum excepturi?
                    Aut voluptas quas, pariatur enim eum rem animi ipsa exercitationem,
                    corporis ipsam nam magnam? Ipsam harum rem laborum asperiores
                    voluptas ratione unde maiores.
                </p>
            {/if}
        </div>
        <div class="flex flex-col gap-4">
            <div
                class="bg-gradient-to-br to-blue-500 from-cyan-400 rounded-lg p-6 shadow-md flex flex-col gap-2"
            >
                <span class="text-gray-50">Harga</span>
                <span class="text-3xl font-bold text-white"
                    >{formatRupiah(produk?.price)}</span
                >
                <Button
                    className="bg-emerald-400 border-b-4 border-r-4 hover:bg-green-700 shadow-md py-2 text-white w-full mt-2"
                    >Pesan Sekarang</Button
                >
            </div>
        </div>
    </section>
</main>

<style>
    .textStroke {
        -webkit-text-stroke: 1px black;
    }
</style>
