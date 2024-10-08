import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards, Request, HttpException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/modules/auth/constants/isPublic.decorator';
import { RecoverPasswordDto } from 'src/modules/auth/dto/recoverPassword.auth.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  async signIn(@Body() signInDto: SignInDto): Promise<{ accessToken: string }> {
    try {
      return await this.authService.signin(signInDto.email, signInDto.pass);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('recoverPassword')
  async recoverPassword(@Body() body: RecoverPasswordDto) {
    try {
      await this.authService.recoverPassword(body.email);

    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @Get('profile')
  async getProfile(@Request() req) {
    return await req.user;
  }
}
