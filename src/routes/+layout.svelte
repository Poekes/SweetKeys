<script>
	import { page } from "$app/stores";
	import { currentUrl, previousUrl } from "$lib/stores/navigation";
	import "../app.css";

	let { children } = $props();

	let lastSeenUrl = null;
	// when the page changes set the currentUrl and previousUrl
	page.subscribe(($page) => {
		if ($page && $page.url) {
			const newUrl = $page.url.href;

			if (lastSeenUrl !== null && lastSeenUrl !== newUrl) {
				previousUrl.set(lastSeenUrl);
			}

			currentUrl.set(newUrl);
			lastSeenUrl = newUrl;
		}
	});
</script>

{@render children()}
