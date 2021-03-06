import { Tag } from './tag';

export interface Category {
    id: number;
    name: string;
    tags: Tag[];
}