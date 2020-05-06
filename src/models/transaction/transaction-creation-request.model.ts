import { TransactionType } from './transaction-type.model';

export class TransactionCreationRequest {
    houseId: string;

    type: TransactionType;

    name: string;
    amount: number;

    isMonthlyRepeatable: boolean;
    startDate: Date;
    endDate: Date;

    tags: string[];
}