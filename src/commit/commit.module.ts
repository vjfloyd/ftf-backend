import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { CommitService } from './service/commit/commit.service';

@Module({
  controllers: [ControllerController],
  providers: [CommitService],
})
export class CommitModule {}
