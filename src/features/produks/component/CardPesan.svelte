<script>
    import { page } from "$app/state";
    const { price } = $props();
    import Button from "$lib/components/Button.svelte";
    import { fly } from "svelte/transition";

    let sendWithIntagram = $state(false);

    const handleOrderByWhatsApp = () => {
        window.location.href = `https://wa.me/6288980287374?text=${page.url.href}%0APesanan%0A%0ACustom%20pesanan%20ketik:`;
    };

    const handleOrderByInstagram = async () => {
        const ig = `https://www.instagram.com/sweet.keysbouquet`;
        try {
            const str = `${page.url.href}\nPesanan\n\nCustom pesanan ketik:`;
            await navigator.clipboard.writeText(str);
            window.location.href = ig;
        } catch (error) {
            console.log(error);
            window.location.href = ig;
        }
    };
</script>

<div
    class="bg-gradient-to-br relative to-blue-500 from-cyan-400 rounded-lg p-6 shadow-md flex flex-col gap-2"
>
    <button
        on:click={() => (sendWithIntagram = !sendWithIntagram)}
        class="absolute right-0 px-4 text-sm md:text-md top-0 py-2 text-white/80 underline"
        >Pesan melalui {sendWithIntagram ? "WhatsApp" : "Instagram"}</button
    >
    <span class="text-gray-50">Harga</span>
    <span class="text-3xl font-bold text-white">{price}</span>
    {#if sendWithIntagram}
        <Button
            on:click={handleOrderByInstagram}
            className="bg-gradient-to-r transtion-all from-pink-500 via-red-500 to-yellow-500 border-b-4 border-r-4 hover:bg-pink-700 active:translate-y-1 active:scale-95 shadow-md py-2 text-white w-full mt-2 "
            >Pesan Sekarang</Button
        >
    {:else}
        <Button
            on:click={handleOrderByWhatsApp}
            className="bg-emerald-400 border-b-4 border-r-4 hover:bg-green-700 shadow-md py-2 active:translate-y-1 active:scale-95 text-white w-full mt-2"
            >Pesan Sekarang</Button
        >
    {/if}
</div>
