import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Her yazı bir .md dosyası. Kanal, URL'nin ilk parçasıdır.
const yazilar = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/yazilar' }),
  schema: z.object({
    title: z.string(),
    ozet: z.string(),
    kanal: z.enum(['haber', 'inceleme', 'karsilastirma', 'aksesuar', 'rehber', 'kose']),
    tarih: z.coerce.date(),
    guncelleme: z.coerce.date().optional(),
    imza: z.string().default('FORTIAY Masası'),
    gorsel: z.string().optional(),
    gorselAlt: z.string().optional(),
    gorselKaynak: z.string().optional(),
    damga: z.enum(['olc', 'bag', 'bey', 'bul']).optional(),
    sayi: z.string().optional(),
    sayfa: z.number().optional(),
    mansetMi: z.boolean().default(false),
    ticariBeyan: z.string().optional(),
  }),
});

export const collections = { yazilar };
