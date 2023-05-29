import { StatutoryDeductionCategory } from '././statutoryDeductionCategory';
export declare class StatutoryDeduction {
    /**
    * The Xero identifier for earnings order
    */
    'id'?: string;
    /**
    * Name of the earnings order
    */
    'name'?: string;
    'statutoryDeductionCategory'?: StatutoryDeductionCategory;
    /**
    * Xero identifier for Liability Account
    */
    'liabilityAccountId'?: string;
    /**
    * Identifier of a record is active or not.
    */
    'currentRecord'?: boolean;
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
