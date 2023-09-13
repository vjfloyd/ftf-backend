import { Controller, Get } from '@nestjs/common';
import { CommitResponse } from '../dto/commit.response/commit.response';
import { CommitService } from '../service/commit/commit.service';

@Controller('/api/v1/commits')
export class ControllerController {
  constructor(private commitService: CommitService) {}

  @Get('')
  commits(): Promise<CommitResponse[]> {
    return this.commitService.getAllCommits();
  }
}
