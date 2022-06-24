import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly userService: UsersService
    ){}

    @UseGuards(JwtAuthGuard)
    @Get('me')
    async getMe(@Request() req){
        return await this.userService.getUserByID(req.user.id);
    }
}
