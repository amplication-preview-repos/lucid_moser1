import { Module } from "@nestjs/common";
import { FinancialInformationModuleBase } from "./base/financialInformation.module.base";
import { FinancialInformationService } from "./financialInformation.service";
import { FinancialInformationController } from "./financialInformation.controller";
import { FinancialInformationResolver } from "./financialInformation.resolver";

@Module({
  imports: [FinancialInformationModuleBase],
  controllers: [FinancialInformationController],
  providers: [FinancialInformationService, FinancialInformationResolver],
  exports: [FinancialInformationService],
})
export class FinancialInformationModule {}
