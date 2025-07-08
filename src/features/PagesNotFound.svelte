<script>
    export let status;
    import { page } from "$app/state";
</script>

<div class="container">
    <div class="card">
        <div class="icon-bg">
            <span class="icon">😵‍💫</span>
        </div>
        <h2 class="title">Oops! Halaman tidak ditemukan</h2>
        <p class="status">Status: {status ?? page.status}</p>
        <a href="/" class="home-link">
            <span class="home-link-content">
                <svg
                    class="arrow"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
                Kembali ke Beranda
            </span>
        </a>
    </div>
</div>

<style>
    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        margin: auto;
        /* background: linear-gradient(135deg, #e3f2fd 0%, #90caf9 100%); */
    }
    .card {
        background: #fff;
        border-radius: 1.5rem;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        padding: 3rem 2.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 28rem;
        width: 100%;
    }
    .icon-bg {
        background: #42a5f5;
        border-radius: 50%;
        padding: 1.5rem;
        margin-bottom: 1.5rem;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    }
    .icon {
        font-size: 3.5rem;
    }
    .title {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
        color: #1565c0;
    }
    .status {
        color: #1976d2;
        margin-bottom: 1.5rem;
    }
    .home-link {
        display: inline-block;
        padding: 0.75rem 2rem;
        background: linear-gradient(
            90deg,
            #42a5f5 0%,
            #90caf9 50%,
            #e3f2fd 100%
        );
        color: #0d47a1;
        border-radius: 9999px;
        font-weight: bold;
        text-decoration: none;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        transition:
            background 0.2s,
            transform 0.1s;
    }
    .home-link:hover {
        background: linear-gradient(90deg, #1976d2 0%, #64b5f6 100%);
        transform: scale(0.98);
    }
    .home-link-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .arrow {
        width: 1.25rem;
        height: 1.25rem;
        vertical-align: middle;
    }
</style>
