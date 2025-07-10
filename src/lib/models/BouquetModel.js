import { bouquet } from "$lib/stores/bouquet";
import bouquetJson from "$lib/bouquet.json";
import { get } from "svelte/store";

export default class BouquetModel {
    constructor() {
        if (get(bouquet) === null) {
            bouquet.set(bouquetJson)
        }
        this.bouquet = get(bouquet)
    }

    getBouquets() {
        return this.bouquet
    }
    getBouquetBySlug(slug) {
        return this.bouquet.find(item => item.slug === slug)
    }
}