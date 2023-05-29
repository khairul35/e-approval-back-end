import { BudgetLine } from '././budgetLine';
import { TrackingCategory } from '././trackingCategory';
export declare class Budget {
    /**
    * Xero identifier
    */
    'budgetID'?: string;
    /**
    * Type of Budget. OVERALL or TRACKING
    */
    'type'?: Budget.TypeEnum;
    /**
    * The Budget description
    */
    'description'?: string;
    /**
    * UTC timestamp of last update to budget
    */
    'updatedDateUTC'?: Date;
    'budgetLines'?: Array<BudgetLine>;
    'tracking'?: Array<TrackingCategory>;
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
export declare namespace Budget {
    enum TypeEnum {
        OVERALL,
        TRACKING
    }
}
