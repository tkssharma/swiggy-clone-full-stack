import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/health')
  public getHealth(): string {
    return 'Health OK!';
  }

  @Get()
  public getHello(): string {
    return 'Hello World!';
  }
}
