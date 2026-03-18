import { Controller } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('register')
    register(@Body() data: RegisterDto) {
        return this.authService.register(data);
    }   

    @Post('login')
    login(@Body() data: LoginDto) {
        return this.authService.login(data);
    }
}   
