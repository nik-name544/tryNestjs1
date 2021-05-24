import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { User } from './users.model';

import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from "@nestjs/sequelize";
import { Logger } from '@nestjs/common';
import { RolesService } from 'src/roles/roles.service';
import { AddroleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User) private userRepository: typeof User,
        private roleService: RolesService
    ) { }

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto)
        const role = await this.roleService.getRoleByValue('ADMIN')
        await user.$set('roles', [role.id])
        user.roles = [role]
        return user
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll({ include: { all: true } })
        return users
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({ where: { email }, include: { all: true } })
        return user
    }

    async addRole(dto: AddroleDto) {
        const user = await this.userRepository.findByPk(dto.userId)
        const role = await this.roleService.getRoleByValue(dto.value)
        if (role && user) {
            await user.$add('role', role.id)
            return dto
        }

        throw new HttpException('smth not ok', HttpStatus.NOT_FOUND)
    }

    async ban(dto: BanUserDto) {
        const user = await this.userRepository.findByPk(dto.userId)
        if (!user) {
            throw new HttpException('smth not ok', HttpStatus.NOT_FOUND)
        }
        user.banned = true
        user.banReason = dto.banReason
        await user.save()
        return user
    }
}