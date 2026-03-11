import {
  projectCategories,
  type ProjectCategory,
  type ProjectEntry,
  type ProjectLinkSet,
  type ProjectLogo,
  type ProjectCategorySlug,
  type ProjectSlug,
} from '@/lib/project-data';

export type {
  ProjectCategory,
  ProjectCategorySlug,
  ProjectEntry,
  ProjectLinkSet,
  ProjectLogo,
  ProjectSlug,
};

export { projectCategories };

export function getProjectCategory(categorySlug: string) {
  return projectCategories.find((category) => category.slug === categorySlug);
}

export function getCategoryWithProjects(categorySlug: string) {
  return getProjectCategory(categorySlug) ?? null;
}
