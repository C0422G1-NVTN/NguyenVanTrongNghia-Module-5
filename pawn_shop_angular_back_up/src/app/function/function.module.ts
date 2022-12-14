import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PawnContractComponent } from './pawn-contract/pawn-contract.component';
import { LiquidationComponent } from './liquidation/liquidation.component';
import { ReturnItemComponent } from './return-item/return-item.component';
import { StoreInformationComponent } from './store-information/store-information.component';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { IndividualInformationComponent } from './individual-information/individual-information.component';
import { NewsComponent } from './news/news.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { EmployeeInformationComponent } from './employee-information/employee-information.component';
import { FinanceComponent } from './store-information/finance/finance.component';
import { PawnItemListComponent } from './store-information/pawn-item-list/pawn-item-list.component';
import { TopTenTransactionComponent } from './store-information/top-ten-transaction/top-ten-transaction.component';
import { ProfitStatisticsComponent } from './store-information/profit-statistics/profit-statistics.component';
import { TransactionHistoryComponent } from './store-information/transaction-history/transaction-history.component';
import { CustomerListComponent } from './customer-management/customer-list/customer-list.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [PawnContractComponent, LiquidationComponent, ReturnItemComponent, StoreInformationComponent, CustomerManagementComponent, IndividualInformationComponent, NewsComponent, EmployeeManagementComponent, EmployeeInformationComponent, FinanceComponent, PawnItemListComponent, TopTenTransactionComponent, ProfitStatisticsComponent, TransactionHistoryComponent, CustomerListComponent],
  exports: [
    CustomerListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FunctionModule { }
