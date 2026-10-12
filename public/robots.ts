import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://sanchitbarjibhe.vercel.app';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/', '/api/'], // जर काही लपवायचे असेल तर
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}