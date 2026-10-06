import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
export async function GET(context) {
  const y = (await getCollection('yazilar')).sort((a, b) => b.data.tarih - a.data.tarih);
  return rss({
    title: 'FORTIAY', description: 'Türkiye’nin telefon ekosistemi dergisi', site: context.site,
    items: y.map((p) => ({ title: p.data.title, description: p.data.ozet, pubDate: p.data.tarih, link: `/${p.data.kanal}/${p.id}/` })),
    customData: '<language>tr-TR</language>',
  });
}
