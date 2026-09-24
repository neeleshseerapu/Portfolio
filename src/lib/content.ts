import { getCollection } from 'astro:content';

const byOrder = (a: { data: { order: number } }, b: { data: { order: number } }) =>
  a.data.order - b.data.order;

export const getProjects = async () => (await getCollection('projects')).sort(byOrder);

export const getExperience = async () => (await getCollection('experience')).sort(byOrder);

// ponytail: naive sentence split, breaks after abbreviations like "U.S."; switch to Intl.Segmenter if that shows up
export const lines = (text: string) => text.split(/(?<=[.!?])\s+/).join('\n');
