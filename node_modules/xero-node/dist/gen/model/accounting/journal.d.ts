import { JournalLine } from '././journalLine';
export declare class Journal {
    /**
    * Xero identifier
    */
    'journalID'?: string;
    /**
    * Date the journal was posted
    */
    'journalDate'?: string;
    /**
    * Xero generated journal number
    */
    'journalNumber'?: number;
    /**
    * Created date UTC format
    */
    'createdDateUTC'?: Date;
    /**
    * reference field for additional indetifying information
    */
    'reference'?: string;
    /**
    * The identifier for the source transaction (e.g. InvoiceID)
    */
    'sourceID'?: string;
    /**
    * The journal source type. The type of transaction that created the journal
    */
    'sourceType'?: Journal.SourceTypeEnum;
    /**
    * See JournalLines
    */
    'journalLines'?: Array<JournalLine>;
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
export declare namespace Journal {
    enum SourceTypeEnum {
        ACCREC,
        ACCPAY,
        ACCRECCREDIT,
        ACCPAYCREDIT,
        ACCRECPAYMENT,
        ACCPAYPAYMENT,
        ARCREDITPAYMENT,
        APCREDITPAYMENT,
        CASHREC,
        CASHPAID,
        TRANSFER,
        ARPREPAYMENT,
        APPREPAYMENT,
        AROVERPAYMENT,
        APOVERPAYMENT,
        EXPCLAIM,
        EXPPAYMENT,
        MANJOURNAL,
        PAYSLIP,
        WAGEPAYABLE,
        INTEGRATEDPAYROLLPE,
        INTEGRATEDPAYROLLPT,
        EXTERNALSPENDMONEY,
        INTEGRATEDPAYROLLPTPAYMENT,
        INTEGRATEDPAYROLLCN
    }
}
