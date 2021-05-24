import { Model, Table, Column, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { ApiProperty } from '@nestjs/swagger'
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";
import { User } from "src/users/users.model";

interface PostCreationAttrs {
    title: string
    content: string
    image: string
    userId: number
}

@Table({ tableName: "posts" })
export class Post extends Model<Post, PostCreationAttrs>{

    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    title: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    content: string

    @Column({ type: DataType.STRING })
    image

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number

    @BelongsTo(() => User)
    author: User
}