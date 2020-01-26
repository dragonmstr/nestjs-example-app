import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { UserRoleRelModule } from './user-role-rel/user-role-rel.module';

@Module({
  imports: [ConfigModule, RolesModule, UsersModule, UserRoleRelModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
