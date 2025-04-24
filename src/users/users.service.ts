import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users: { id: number }[] = []

    getAllUsers() {
        return this.users;
    }

    getUserById(id: number) {
        return this.users.find(user => user.id === id);
    }

    createUser(user: any) {
        this.users.push(user);
        return user;
    }

    updateUser(id: number, updatedUser: any) {
        const userIndex = this.users.findIndex(user => user.id == id);
        console.log({ id, userIndex, updatedUser, users: this.users })
        if (userIndex > -1) {
            this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
            return this.users;
        }
        return this.users;
    }

    deleteUser(id: number) {
        return this.users.find(user => user.id != id);
    }

}
