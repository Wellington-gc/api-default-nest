import { Controller, Get, Redirect, VERSION_NEUTRAL } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';
import { Public } from './common/decorators/public.decorator';

@Controller({ version: VERSION_NEUTRAL })
@ApiExcludeController()
@Public()
export class AppController {
  @Get()
  @Redirect()
  redirectToDocs() {
    return { url: '/docs' };
  }
}
