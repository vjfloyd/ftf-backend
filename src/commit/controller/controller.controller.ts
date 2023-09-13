import { Controller, Get } from '@nestjs/common';

@Controller('/api/v1/commits')
export class ControllerController {
  @Get('')
  commits(): string {
    return 'Commits!';
  }
}
