import { DeductionTypeCalculationType } from '././deductionTypeCalculationType';
export declare class DeductionLine {
    /**
    * Xero deduction type identifier
    */
    'deductionTypeID': string;
    'calculationType'?: DeductionTypeCalculationType;
    /**
    * Deduction type amount
    */
    'amount'?: number;
    /**
    * The Percentage of the Deduction
    */
    'percentage'?: number;
    /**
    * Deduction number of units
    */
    'numberOfUnits'?: number;
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
