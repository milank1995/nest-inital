import {Controller, Get, Post, Body, Param, Delete, Put} from '@nestjs/common';
import { UsersService } from './users.service';

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
    createUser(@Body() user: any) {
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
