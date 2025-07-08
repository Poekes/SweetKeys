import BouquetModel from '$lib/models/BouquetModel';
import { json } from '@sveltejs/kit';


// produks/[slug]/+server.js
export async function POST({ request, params }) {
    const slug = params.slug;
    const bouquetModel = new BouquetModel();

    const getBouquetBySlug = bouquetModel.getBouquetBySlug(slug)

    if (!getBouquetBySlug) {
        return json({ error: 'Bouquet not found' }, {
            status: 404,
        });
    }

    return json(getBouquetBySlug, {
        status: 200,
    })
}