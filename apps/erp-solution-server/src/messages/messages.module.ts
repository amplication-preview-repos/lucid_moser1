import { Module } from "@nestjs/common";
import { MessagesModuleBase } from "./base/messages.module.base";
import { MessagesService } from "./messages.service";
import { MessagesController } from "./messages.controller";
import { MessagesResolver } from "./messages.resolver";

@Module({
  imports: [MessagesModuleBase],
  controllers: [MessagesController],
  providers: [MessagesService, MessagesResolver],
  exports: [MessagesService],
})
export class MessagesModule {}
