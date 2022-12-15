import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { request } from 'http';
import { Users } from 'src/Entities/users.entity';
// import { User } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users)
  private readonly userRepository: Repository<Users>,) {
  }

  findUsersById(username: string) {
    return this.userRepository.findOne({
      where: { username }
    });

  }

}