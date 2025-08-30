<script>
    import { onMount } from "svelte";
    import Button from "./Button.svelte";
    import { fade, fly, scale } from "svelte/transition";
    import { flip } from "svelte/animate";
    import Sweetkeys from "../../features/navigasiChildComponent/Sweetkeys.svelte";
    import Menu from "../../features/navigasiChildComponent/Menu.svelte";
    import Search from "../../features/navigasiChildComponent/Search.svelte";
    import { writable } from "svelte/store";
    import { goto, replaceState } from "$app/navigation";

    // state box
    const S_SweetKeys = "Sweetkeys";
    const S_Menu = "Menu";
    const S_Search = "Search";
    export const buttonNav = writable(null);

    const handlerNavigasiBox = (str) => {
        buttonNav.set(str);

        // Gunakan goto untuk pushState tanpa mengganti URL
        goto(window.location.pathname, {
            state: { nav: str },
            replaceState: false, // pushState
            keepfocus: true,
        });
    };

    let whatScroll = $state(true);
    let scrollY = 0;
    let lastScrollY = 0;
    let navigasi;
    let scrollPosition = 0;

    $effect(() => {
        const windowScrollTop = sessionStorage.getItem(
            window.location.pathname,
        );

        if ($buttonNav != null) {
            // Simpan posisi scroll sebelum mengunci body
            scrollPosition = window.scrollY;
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollPosition}px`;
            document.body.style.width = "100%";
        } else {
            // Kembalikan body ke posisi normal dan scroll ke posisi yang disimpan
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";
            setTimeout(() => {
                window.scrollTo(0, scrollPosition);
            }, 0);
        }
    });

    onMount(() => {
        // when user click "Back" or "Forward"
        window.addEventListener("popstate", (event) => {
            // console.log(event.state["sveltekit:states"].nav);
            if (event.state && event.state["sveltekit:states"]?.nav) {
                buttonNav.set(event.state["sveltekit:states"].nav);
            } else {
                buttonNav.set(null);
            }
        });
        // Deteksi jika user langsung reload halaman dan state masih ada
        if (history.state["sveltekit:states"]?.nav) {
            buttonNav.set(history.state["sveltekit:states"]?.nav);
        }

        window.addEventListener("scroll", () => {
            scrollY = window.scrollY;

            if (scrollY > lastScrollY) {
                // Scrolling down
                whatScroll = true;
            } else {
                whatScroll = false;
                // Scrolling up
            }
            lastScrollY = window.scrollY;

            // sessionStorage.setItem(window.location.pathname, scrollY)
        });
    });
</script>

<nav
    bind:this={navigasi}
    class=" flex items-center px-2 justify-end {whatScroll == false
        ? 'sticky top-[8px]'
        : `sticky top-[-40px]`} transition-all duration-[800ms] w-60 m-auto bg-black/5 overflow-hidden z-50 border border-white/50 shadow h-10 md:h-12 backdrop-blur-[4px] rounded-2xl"
>
    <button
        on:click={() => handlerNavigasiBox(S_SweetKeys)}
        class="text-white grow text-lg hover:bg-black/10 active:bg-black/10 transition-all hover:rounded-lg active:rounded-lg hover:shadow-md"
    >
        SweetKeys
    </button>
    <button
        on:click={() => handlerNavigasiBox(S_Menu)}
        class="text-white p-1 hover:bg-black/10 active:bg-black/10 transition-all hover:rounded-lg active:rounded-lg hover:shadow-md"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
        </svg>
    </button>
    <button
        on:click={() => handlerNavigasiBox(S_Search)}
        class="text-white p-1 hover:bg-black/10 active:bg-black/10 transition-all hover:rounded-lg active:rounded-lg hover:shadow-md"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
        </svg>
    </button>
</nav>
{#if $buttonNav}
    <div
        transition:fade
        class="fixed top-0 bottom-0 z-[2000] left-0 right-0 bg-black/5 backdrop-blur-[4px]"
    >
        <Button
            on:click={() => history.back()}
            className="absolute top-4 right-4 text-white active:translate-y-1.5 active:translate-x-[2px] transition-all duration-100 shadow-lg py-1 !px-2 bg-gradient-to-bl to-blue-400 from-cyan-400"
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8 md:size-6"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                />
            </svg>
        </Button>
        {#if $buttonNav === S_SweetKeys}
            <Sweetkeys />
        {/if}
        {#if $buttonNav === S_Menu}
            <Menu />
        {/if}
        {#if $buttonNav === S_Search}
            <Search navi={buttonNav} />
        {/if}
    </div>
{/if}

<style>
    :global(.moveTranslateX) {
        opacity: 0;

        animation: movex 0.6s forwards;
    }
    @keyframes movex {
        0% {
            opacity: 0;
            transform: translateX(-55px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
</style>
