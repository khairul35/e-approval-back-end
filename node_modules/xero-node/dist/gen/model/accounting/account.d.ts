import { AccountType } from '././accountType';
import { CurrencyCode } from '././currencyCode';
import { ValidationError } from '././validationError';
export declare class Account {
    /**
    * Customer defined alpha numeric account code e.g 200 or SALES (max length = 10)
    */
    'code'?: string;
    /**
    * Name of account (max length = 150)
    */
    'name'?: string;
    /**
    * The Xero identifier for an account – specified as a string following  the endpoint name   e.g. /297c2dc5-cc47-4afd-8ec8-74990b8761e9
    */
    'accountID'?: string;
    'type'?: AccountType;
    /**
    * For bank accounts only (Account Type BANK)
    */
    'bankAccountNumber'?: string;
    /**
    * Accounts with a status of ACTIVE can be updated to ARCHIVED. See Account Status Codes
    */
    'status'?: Account.StatusEnum;
    /**
    * Description of the Account. Valid for all types of accounts except bank accounts (max length = 4000)
    */
    'description'?: string;
    /**
    * For bank accounts only. See Bank Account types
    */
    'bankAccountType'?: Account.BankAccountTypeEnum;
    'currencyCode'?: CurrencyCode;
    /**
    * The tax type from taxRates
    */
    'taxType'?: string;
    /**
    * Boolean – describes whether account can have payments applied to it
    */
    'enablePaymentsToAccount'?: boolean;
    /**
    * Boolean – describes whether account code is available for use with expense claims
    */
    'showInExpenseClaims'?: boolean;
    /**
    * See Account Class Types
    */
    '_class'?: Account.ClassEnum;
    /**
    * If this is a system account then this element is returned. See System Account types. Note that non-system accounts may have this element set as either “” or null.
    */
    'systemAccount'?: Account.SystemAccountEnum;
    /**
    * Shown if set
    */
    'reportingCode'?: string;
    /**
    * Shown if set
    */
    'reportingCodeName'?: string;
    /**
    * boolean to indicate if an account has an attachment (read only)
    */
    'hasAttachments'?: boolean;
    /**
    * Last modified date UTC format
    */
    'updatedDateUTC'?: Date;
    /**
    * Boolean – describes whether the account is shown in the watchlist widget on the dashboard
    */
    'addToWatchlist'?: boolean;
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
export declare namespace Account {
    enum StatusEnum {
        ACTIVE,
        ARCHIVED,
        DELETED
    }
    enum BankAccountTypeEnum {
        BANK,
        CREDITCARD,
        PAYPAL,
        NONE,
        Empty
    }
    enum ClassEnum {
        ASSET,
        EQUITY,
        EXPENSE,
        LIABILITY,
        REVENUE
    }
    enum SystemAccountEnum {
        DEBTORS,
        CREDITORS,
        BANKCURRENCYGAIN,
        GST,
        GSTONIMPORTS,
        HISTORICAL,
        REALISEDCURRENCYGAIN,
        RETAINEDEARNINGS,
        ROUNDING,
        TRACKINGTRANSFERS,
        UNPAIDEXPCLM,
        UNREALISEDCURRENCYGAIN,
        WAGEPAYABLES,
        CISASSETS,
        CISASSET,
        CISLABOUR,
        CISLABOUREXPENSE,
        CISLABOURINCOME,
        CISLIABILITY,
        CISMATERIALS,
        Empty
    }
}
