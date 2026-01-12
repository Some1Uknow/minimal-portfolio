import { MetadataRoute } from 'next';

const siteUrl = 'https://raghav.codes';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Single-page portfolio - only include the root URL
  // Hash fragments (#about, #projects) are not indexable by search engines
  return [
    {
      url: siteUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
