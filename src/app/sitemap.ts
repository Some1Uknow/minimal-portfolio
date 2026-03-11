import { MetadataRoute } from 'next';

import { projectCategories } from '@/lib/projects';

const siteUrl = 'https://raghav.codes';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return [
    {
      url: siteUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/blogs`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...projectCategories.map((category) => ({
      url: `${siteUrl}/projects/${category.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
