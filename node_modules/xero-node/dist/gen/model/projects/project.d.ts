import { Amount } from '././amount';
import { CurrencyCode } from '././currencyCode';
import { ProjectStatus } from '././projectStatus';
export declare class Project {
    /**
    * Identifier of the project.
    */
    'projectId'?: string;
    /**
    * Identifier of the contact this project was created for.
    */
    'contactId'?: string;
    /**
    * Name of the project.
    */
    'name': string;
    'currencyCode'?: CurrencyCode;
    /**
    * A total of minutes logged against all tasks on the Project.
    */
    'minutesLogged'?: number;
    'totalTaskAmount'?: Amount;
    'totalExpenseAmount'?: Amount;
    'estimateAmount'?: Amount;
    /**
    * Minutes which have not been invoiced across all chargeable tasks in the project.
    */
    'minutesToBeInvoiced'?: number;
    'taskAmountToBeInvoiced'?: Amount;
    'taskAmountInvoiced'?: Amount;
    'expenseAmountToBeInvoiced'?: Amount;
    'expenseAmountInvoiced'?: Amount;
    'projectAmountInvoiced'?: Amount;
    'deposit'?: Amount;
    'depositApplied'?: Amount;
    'creditNoteAmount'?: Amount;
    /**
    * Deadline for the project. UTC Date Time in ISO-8601 format.
    */
    'deadlineUtc'?: Date;
    'totalInvoiced'?: Amount;
    'totalToBeInvoiced'?: Amount;
    'estimate'?: Amount;
    'status'?: ProjectStatus;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
