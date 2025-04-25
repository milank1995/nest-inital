import {Controller, Get, Post, Body, Param, Delete, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto'


@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id: number) {
        return this.usersService.getUserById(id);
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body() user: CreateUserDto) {
        return this.usersService.createUser(user);
    }

    @Put(':id')
    updateUser(@Param('id') id: number, @Body() updatedUser: any) {
        return this.usersService.updateUser(id, updatedUser);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        return this.usersService.deleteUser(id);
    }
}
