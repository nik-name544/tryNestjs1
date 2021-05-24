import { Model, Table, Column, DataType, BelongsToMany, HasMany } from "sequelize-typescript";
import { ApiProperty } from '@nestjs/swagger'
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";
import { Post } from "src/posts/posts.model";

interface UserCreationAttrs {
    email: string
    password: string
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs>{

    @ApiProperty({ example: '1', description: "unique user id" })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ApiProperty({ example: 'email@gmail.com', description: "unique user email" })
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    email: string

    @ApiProperty({ example: 'password', description: "user password" })
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password: string

    @ApiProperty({ example: 'false', description: "is banned user" })
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    banned: boolean

    @ApiProperty({ example: 'some', description: "why user was banned" })
    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    banReason: string

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]

    @HasMany(()=> Post)
    posts: Post[]
}