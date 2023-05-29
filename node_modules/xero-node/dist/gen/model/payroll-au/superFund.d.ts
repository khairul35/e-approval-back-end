import { SuperFundType } from '././superFundType';
import { ValidationError } from '././validationError';
export declare class SuperFund {
    /**
    * Xero identifier for a super fund
    */
    'superFundID'?: string;
    'type': SuperFundType;
    /**
    * Name of the super fund
    */
    'name'?: string;
    /**
    * ABN of the self managed super fund
    */
    'aBN'?: string;
    /**
    * BSB of the self managed super fund
    */
    'bSB'?: string;
    /**
    * The account number for the self managed super fund.
    */
    'accountNumber'?: string;
    /**
    * The account name for the self managed super fund.
    */
    'accountName'?: string;
    /**
    * The electronic service address for the self managed super fund.
    */
    'electronicServiceAddress'?: string;
    /**
    * Some funds assign a unique number to each employer
    */
    'employerNumber'?: string;
    /**
    * The SPIN of the Regulated SuperFund. This field has been deprecated. It will only be present for legacy superfunds. New superfunds will not have a SPIN value. The USI field should be used instead of SPIN.
    */
    'sPIN'?: string;
    /**
    * The USI of the Regulated SuperFund
    */
    'uSI'?: string;
    /**
    * Last modified timestamp
    */
    'updatedDateUTC'?: Date;
    /**
    * Displays array of validation error messages from the API
    */
    'validationErrors'?: Array<ValidationError>;
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
