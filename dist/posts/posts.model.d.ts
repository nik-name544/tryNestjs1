import { Model } from "sequelize-typescript";
import { User } from "src/users/users.model";
interface PostCreationAttrs {
    title: string;
    content: string;
    image: string;
    userId: number;
}
export declare class Post extends Model<Post, PostCreationAttrs> {
    id: number;
    title: string;
    content: string;
    image: any;
    userId: number;
    author: User;
}
export {};
