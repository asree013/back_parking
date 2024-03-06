import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConfig } from 'src/config/jwt.confing';
import { repo } from 'src/constants/repo';
import { service } from 'src/constants/service';
import { UsersController } from 'src/controllers/users/users.controller';
import { RepoUsersService } from 'src/repo/repo-users/repo-users.service';
import { ConnectDbService } from 'src/service/connect-db/connect-db.service';
import { JwtStrategy } from 'src/service/users/jwt/jwt.strategy';
import { LocalStrategy } from 'src/service/users/local/local-strategy';
import { UsersService } from 'src/service/users/users.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      global: true,
      secret: jwtConfig.JWT_SECRET,
      signOptions: { expiresIn: '2 days' },
    })
  ],
  providers: [
    {
      provide: repo.user,
      useFactory: function (conDB: ConnectDbService) {
        return new RepoUsersService(conDB);
      },
      inject: [service.connectDb],
    },
    {
      provide: service.users,
      useFactory: function (repo: RepoUsersService, jwt: JwtService) {
        return new UsersService(repo, jwt);
      },
      inject: [repo.user],
    },
    {
      provide: service.localStrategy,
      useClass: LocalStrategy,
    },
    {
      provide: service.jwt,
      useClass: JwtStrategy
    }
  ],
  controllers: [UsersController],
})
export class UsersModule {}
