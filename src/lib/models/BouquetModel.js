import bouquet from "$lib/bouquet.json"
export default class BouquetModel {
    constructor() {
        this.bouquet = bouquet
    }
    getBouquets() {
        return this.bouquet
    }
    getBouquetBySlug(slug) {
        return this.bouquet.find(item => item.slug === slug)
    }
}