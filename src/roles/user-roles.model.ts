import { Model, Table, Column, DataType, ForeignKey } from "sequelize-typescript";
import { ApiProperty } from '@nestjs/swagger'
import { Role } from "./roles.model";
import { User } from "src/users/users.model";



@Table({ tableName: "UserRoles", createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles>{

    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ForeignKey(() => Role)
    @Column({
        type: DataType.INTEGER
    })
    roleId: number

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER
    })
    userId: number
}