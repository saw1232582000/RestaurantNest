import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { SinginUserDto } from 'src/core/domain/auth/dto/SigninUserDto';
import { AuthService } from 'src/core/domain/auth/service/Authservice';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email', // Specify the field name for email
      passwordField: 'password', // This is the default, but you can specify it explicitly
    });
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.validateUser({
      email: email,
      password: password,
    });

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
