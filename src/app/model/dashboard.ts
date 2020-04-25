import { User } from './user';
import { Tutorial } from './tutorial';

export interface Dashboard {
    id: number;
    owner: User;
    tutorials: Tutorial[];
}