
import bouquet from "$lib/bouquet.json";
import { json } from "@sveltejs/kit";

// produks POST
export async function POST() {
    return json(bouquet, { status: 200 });
}