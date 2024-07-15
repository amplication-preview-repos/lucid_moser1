import { Module } from "@nestjs/common";
import { MeetingsModuleBase } from "./base/meetings.module.base";
import { MeetingsService } from "./meetings.service";
import { MeetingsController } from "./meetings.controller";
import { MeetingsResolver } from "./meetings.resolver";

@Module({
  imports: [MeetingsModuleBase],
  controllers: [MeetingsController],
  providers: [MeetingsService, MeetingsResolver],
  exports: [MeetingsService],
})
export class MeetingsModule {}
