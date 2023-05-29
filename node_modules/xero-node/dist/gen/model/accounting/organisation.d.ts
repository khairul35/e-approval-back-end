import { AddressForOrganisation } from '././addressForOrganisation';
import { CountryCode } from '././countryCode';
import { CurrencyCode } from '././currencyCode';
import { ExternalLink } from '././externalLink';
import { PaymentTerm } from '././paymentTerm';
import { Phone } from '././phone';
import { TimeZone } from '././timeZone';
export declare class Organisation {
    /**
    * Unique Xero identifier
    */
    'organisationID'?: string;
    /**
    * Display a unique key used for Xero-to-Xero transactions
    */
    'aPIKey'?: string;
    /**
    * Display name of organisation shown in Xero
    */
    'name'?: string;
    /**
    * Organisation name shown on Reports
    */
    'legalName'?: string;
    /**
    * Boolean to describe if organisation is registered with a local tax authority i.e. true, false
    */
    'paysTax'?: boolean;
    /**
    * See Version Types
    */
    'version'?: Organisation.VersionEnum;
    /**
    * Organisation Type
    */
    'organisationType'?: Organisation.OrganisationTypeEnum;
    'baseCurrency'?: CurrencyCode;
    'countryCode'?: CountryCode;
    /**
    * Boolean to describe if organisation is a demo company.
    */
    'isDemoCompany'?: boolean;
    /**
    * Will be set to ACTIVE if you can connect to organisation via the Xero API
    */
    'organisationStatus'?: string;
    /**
    * Shows for New Zealand, Australian and UK organisations
    */
    'registrationNumber'?: string;
    /**
    * Shown if set. US Only.
    */
    'employerIdentificationNumber'?: string;
    /**
    * Shown if set. Displays in the Xero UI as Tax File Number (AU), GST Number (NZ), VAT Number (UK) and Tax ID Number (US & Global).
    */
    'taxNumber'?: string;
    /**
    * Calendar day e.g. 0-31
    */
    'financialYearEndDay'?: number;
    /**
    * Calendar Month e.g. 1-12
    */
    'financialYearEndMonth'?: number;
    /**
    * The accounting basis used for tax returns. See Sales Tax Basis
    */
    'salesTaxBasis'?: Organisation.SalesTaxBasisEnum;
    /**
    * The frequency with which tax returns are processed. See Sales Tax Period
    */
    'salesTaxPeriod'?: Organisation.SalesTaxPeriodEnum;
    /**
    * The default for LineAmountTypes on sales transactions
    */
    'defaultSalesTax'?: string;
    /**
    * The default for LineAmountTypes on purchase transactions
    */
    'defaultPurchasesTax'?: string;
    /**
    * Shown if set. See lock dates
    */
    'periodLockDate'?: string;
    /**
    * Shown if set. See lock dates
    */
    'endOfYearLockDate'?: string;
    /**
    * Timestamp when the organisation was created in Xero
    */
    'createdDateUTC'?: Date;
    'timezone'?: TimeZone;
    /**
    * Organisation Entity Type
    */
    'organisationEntityType'?: Organisation.OrganisationEntityTypeEnum;
    /**
    * A unique identifier for the organisation. Potential uses.
    */
    'shortCode'?: string;
    /**
    * Organisation Classes describe which plan the Xero organisation is on (e.g. DEMO, TRIAL, PREMIUM)
    */
    '_class'?: Organisation.ClassEnum;
    /**
    * BUSINESS or PARTNER. Partner edition organisations are sold exclusively through accounting partners and have restricted functionality (e.g. no access to invoicing)
    */
    'edition'?: Organisation.EditionEnum;
    /**
    * Description of business type as defined in Organisation settings
    */
    'lineOfBusiness'?: string;
    /**
    * Address details for organisation – see Addresses
    */
    'addresses'?: Array<AddressForOrganisation>;
    /**
    * Phones details for organisation – see Phones
    */
    'phones'?: Array<Phone>;
    /**
    * Organisation profile links for popular services such as Facebook,Twitter, GooglePlus and LinkedIn. You can also add link to your website here. Shown if Organisation settings  is updated in Xero. See ExternalLinks below
    */
    'externalLinks'?: Array<ExternalLink>;
    'paymentTerms'?: PaymentTerm;
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
export declare namespace Organisation {
    enum VersionEnum {
        AU,
        NZ,
        GLOBAL,
        UK,
        US,
        AUONRAMP,
        NZONRAMP,
        GLOBALONRAMP,
        UKONRAMP,
        USONRAMP
    }
    enum OrganisationTypeEnum {
        ACCOUNTINGPRACTICE,
        COMPANY,
        CHARITY,
        CLUBORSOCIETY,
        INDIVIDUAL,
        LOOKTHROUGHCOMPANY,
        NOTFORPROFIT,
        PARTNERSHIP,
        SCORPORATION,
        SELFMANAGEDSUPERANNUATIONFUND,
        SOLETRADER,
        SUPERANNUATIONFUND,
        TRUST
    }
    enum SalesTaxBasisEnum {
        PAYMENTS,
        INVOICE,
        NONE,
        CASH,
        ACCRUAL,
        FLATRATECASH,
        FLATRATEACCRUAL,
        ACCRUALS
    }
    enum SalesTaxPeriodEnum {
        MONTHLY,
        QUARTERLY1,
        QUARTERLY2,
        QUARTERLY3,
        ANNUALLY,
        ONEMONTHS,
        TWOMONTHS,
        SIXMONTHS,
        _1MONTHLY,
        _2MONTHLY,
        _3MONTHLY,
        _6MONTHLY,
        QUARTERLY,
        YEARLY,
        NONE
    }
    enum OrganisationEntityTypeEnum {
        ACCOUNTINGPRACTICE,
        COMPANY,
        CHARITY,
        CLUBORSOCIETY,
        INDIVIDUAL,
        LOOKTHROUGHCOMPANY,
        NOTFORPROFIT,
        PARTNERSHIP,
        SCORPORATION,
        SELFMANAGEDSUPERANNUATIONFUND,
        SOLETRADER,
        SUPERANNUATIONFUND,
        TRUST
    }
    enum ClassEnum {
        DEMO,
        TRIAL,
        STARTER,
        STANDARD,
        PREMIUM,
        PREMIUM20,
        PREMIUM50,
        PREMIUM100,
        LEDGER,
        GSTCASHBOOK,
        NONGSTCASHBOOK,
        ULTIMATE,
        LITE
    }
    enum EditionEnum {
        BUSINESS,
        PARTNER
    }
}
