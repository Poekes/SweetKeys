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
    getSearch(searchQuery) {
        const keywords = searchQuery.toLowerCase().split(" ").filter(Boolean);

        const resultsWithScore = this.bouquet.map(product => {
            const productName = product.name.toLowerCase();
            let score = 0;

            keywords.forEach(keyword => {
                if (product.name.includes(keyword)) score += 1;
            });

            return { ...product, score };
        });

        const filteredResults = resultsWithScore
            .filter(product => product.score > 0)
            .sort((a, b) => b.score - a.score);

        return filteredResults;
    }

}