import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FinancialInformationServiceBase } from "./base/financialInformation.service.base";

@Injectable()
export class FinancialInformationService extends FinancialInformationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
