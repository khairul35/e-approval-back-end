import { TaxCode } from '././taxCode';
export declare class TaxSettings {
    /**
    * The number of units for the period type
    */
    'periodUnits'?: number;
    /**
    * The type of period (\"weeks\" or \"months\")
    */
    'periodType'?: TaxSettings.PeriodTypeEnum;
    'taxCode'?: TaxCode;
    /**
    * Tax rate for STC and WT
    */
    'specialTaxRate'?: string;
    /**
    * Tax code for a lump sum amount
    */
    'lumpSumTaxCode'?: string;
    /**
    * The total of the lump sum amount
    */
    'lumpSumAmount'?: string;
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
export declare namespace TaxSettings {
    enum PeriodTypeEnum {
        Weeks,
        Months
    }
}
