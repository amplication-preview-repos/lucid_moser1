import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FinancialInformationService } from "./financialInformation.service";
import { FinancialInformationControllerBase } from "./base/financialInformation.controller.base";

@swagger.ApiTags("financialInformations")
@common.Controller("financialInformations")
export class FinancialInformationController extends FinancialInformationControllerBase {
  constructor(protected readonly service: FinancialInformationService) {
    super(service);
  }
}
