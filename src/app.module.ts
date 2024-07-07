import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { Team } from './modules/teams/team.model';
import { TeamModule } from './modules/teams/team.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/users/user.model';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'example',
      password: 'example',
      database: 'example',
      entities: [Team, User],
      synchronize: true,
    }),
    UserModule,
    TeamModule,
  ],
})
export class AppModule {}
