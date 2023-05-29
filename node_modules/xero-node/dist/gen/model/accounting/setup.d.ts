import { Account } from '././account';
import { ConversionBalances } from '././conversionBalances';
import { ConversionDate } from '././conversionDate';
export declare class Setup {
    'conversionDate'?: ConversionDate;
    /**
    * Balance supplied for each account that has a value as at the conversion date.
    */
    'conversionBalances'?: Array<ConversionBalances>;
    'accounts'?: Array<Account>;
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
