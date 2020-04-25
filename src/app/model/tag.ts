import { Category } from './category';

export interface Tag {
    id: number;
    name: string;
    category: Category;
}