import * as graphql from "@nestjs/graphql";
import { FinancialInformationResolverBase } from "./base/financialInformation.resolver.base";
import { FinancialInformation } from "./base/FinancialInformation";
import { FinancialInformationService } from "./financialInformation.service";

@graphql.Resolver(() => FinancialInformation)
export class FinancialInformationResolver extends FinancialInformationResolverBase {
  constructor(protected readonly service: FinancialInformationService) {
    super(service);
  }
}
