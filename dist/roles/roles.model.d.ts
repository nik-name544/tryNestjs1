import { Model } from "sequelize-typescript";
import { User } from "src/users/users.model";
interface RoleCreationAttrs {
    value: string;
    descr: string;
}
export declare class Role extends Model<Role, RoleCreationAttrs> {
    id: number;
    value: string;
    descr: string;
    users: User[];
}
export {};
