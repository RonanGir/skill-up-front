import { Tag } from './tag';

export interface Tutorial {
    id: number;
    title: string;
    url: string;
    description: string;
    tags: Tag[];
}