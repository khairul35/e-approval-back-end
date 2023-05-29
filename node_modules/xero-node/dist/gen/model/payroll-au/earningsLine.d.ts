import { EarningsRateCalculationType } from '././earningsRateCalculationType';
export declare class EarningsLine {
    /**
    * Xero unique id for earnings rate
    */
    'earningsRateID': string;
    'calculationType'?: EarningsRateCalculationType;
    /**
    * Annual salary for earnings line
    */
    'annualSalary'?: number;
    /**
    * number of units for earning line
    */
    'numberOfUnitsPerWeek'?: number;
    /**
    * Rate per unit of the EarningsLine.
    */
    'ratePerUnit'?: number;
    /**
    * Normal number of units for EarningsLine. Applicable when RateType is \"MULTIPLE\"
    */
    'normalNumberOfUnits'?: number;
    /**
    * Earnings rate amount
    */
    'amount'?: number;
    /**
    * Earnings rate number of units.
    */
    'numberOfUnits'?: number;
    /**
    * Earnings rate amount. Only applicable if the EarningsRate RateType is Fixed
    */
    'fixedAmount'?: number;
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
