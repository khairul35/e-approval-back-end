import { PayOutType } from '././payOutType';
export declare class LeaveEarningsLine {
    /**
    * Xero identifier
    */
    'earningsRateID'?: string;
    /**
    * Rate per unit of the EarningsLine.
    */
    'ratePerUnit'?: number;
    /**
    * Earnings rate number of units.
    */
    'numberOfUnits'?: number;
    'payOutType'?: PayOutType;
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
