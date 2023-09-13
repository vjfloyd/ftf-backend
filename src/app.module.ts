import { Module } from '@nestjs/common';
import { CommitModule } from './commit/commit.module';

@Module({
  imports: [CommitModule],
})
export class AppModule {}
