
// sitemap.xml 
export async function GET({ request }) {

    const baseUrl = (new URL(request.url)).origin; // url origin

    // routes on website
    const routes = [
        { loc: `${baseUrl}/`, lastmod: '2024-06-01', changefreq: 'daily', priority: '1.0' },
        { loc: `${baseUrl}/about`, lastmod: '2024-06-01', changefreq: 'monthly', priority: '0.8' },
        { loc: `${baseUrl}/products`, lastmod: '2024-06-01', changefreq: 'weekly', priority: '0.9' },
        { loc: `${baseUrl}/blog`, lastmod: '2024-06-01', changefreq: 'weekly', priority: '0.7' },
        { loc: `${baseUrl}/contact`, lastmod: '2024-06-01', changefreq: 'yearly', priority: '0.6' }
    ];

    //maping xml string 
    const urlsXml = routes.map(route => `
        <url>
            <loc>${route.loc}</loc>
            <lastmod>${route.lastmod}</lastmod>
            <changefreq>${route.changefreq}</changefreq>
            <priority>${route.priority}</priority>
        </url>
    `).join('');


    return new Response(
        `
        <?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>

			${urlsXml}
            
		</urlset>
        

        `.trim(),
        {
            headers: {
                'Content-Type': 'application/xml'
            }
        }
    )
}