import { Module, forwardRef } from '@nestjs/common';

import { Team } from './team.model';
import { TeamController } from './team.controller';
import { TeamResolver } from './team.resolver';
import { TeamService } from './team.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../users/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Team]), forwardRef(() => UserModule)],
  providers: [TeamService, TeamResolver],
  exports: [TeamService],
  controllers: [TeamController],
})
export class TeamModule {}
