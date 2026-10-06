import { getCollection } from 'astro:content';
export async function tumYazilar() {
  const y = await getCollection('yazilar');
  return y.sort((a, b) => b.data.tarih.getTime() - a.data.tarih.getTime());
}
