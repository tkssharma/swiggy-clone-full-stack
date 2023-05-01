import { Controller, Get } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";

@Controller("")
export class AppController {
  constructor() {}

  @EventPattern("payment_status_updated")
  async handleMessagePrinted(data: Record<string, unknown>) {
    console.log(data);
    //
  }
}
