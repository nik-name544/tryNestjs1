import { Model, Table, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { ApiProperty } from '@nestjs/swagger'
import { User } from "src/users/users.model";
import { UserRoles } from "./user-roles.model";

interface RoleCreationAttrs {
    value: string
    descr: string
}

@Table({ tableName: "roles" })
export class Role extends Model<Role, RoleCreationAttrs>{

    @ApiProperty({ example: '1', description: "unique user id" })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ApiProperty({ example: 'ADMIN', description: "user role" })
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    value: string

    @ApiProperty({ example: 'text', description: "user role descr" })
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    descr: string

    @BelongsToMany(() => User, () => UserRoles)
    users: User[]
}