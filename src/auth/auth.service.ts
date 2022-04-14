import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return { message: 'Sign Up !' }; // json 형식으로 응답한다
  }

  signin() {
    return { message: 'Sign In !' }; // json 형식으로 응답한다
  }
}
