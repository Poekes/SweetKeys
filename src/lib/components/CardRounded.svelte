<script>
    import { base } from "$app/paths";
    import { fly } from "svelte/transition";
    let { name, slug, img, price, className = "" } = $props();
</script>

<div
    class="  rounded-full border md:p-6 text-white border-white flex flex-col h-auto items-center {className}
                    bg-[image:radial-gradient(var(--color-gray-300)_1px,_transparent_0)] bg-fixed bg-[size:10px_10px]"
    transition:fly={{ y: -20, duration: 1400 }}
>
    <img
        src={`${base}/${img}`}
        alt="Bouquet 1"
        loading="lazy"
        class="w-full aspect-[6/6] object-contain rounded mb-1"
    />
    <h2 class=" text-center w-full text-sm font-normal mb-1 md:text-xl">
        {name}
    </h2>
    <p class="   text-white font-bold mb-1 text-[11px] md:text-lg">
        {price}
    </p>

    <a
        href="produks/{slug}"
        class=" font-normal border-b-2 border-r-2 border-black/30 mb-4 px-4 cursor-pointer bg-[#009dff] py-0.5 md:py-1 rounded text-sm md:text-lg"
    >
        Beli
    </a>
</div>
