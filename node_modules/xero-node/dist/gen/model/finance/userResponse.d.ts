import { HistoryRecordResponse } from '././historyRecordResponse';
import { PracticeResponse } from '././practiceResponse';
export declare class UserResponse {
    /**
    * The Xero identifier for the user
    */
    'userId'?: string;
    /**
    * Timestamp of user creation.
    */
    'userCreatedDateUtc'?: Date;
    /**
    * Timestamp of user last login
    */
    'lastLoginDateUtc'?: Date;
    /**
    * User is external partner.
    */
    'isExternalPartner'?: boolean;
    /**
    * User has Accountant role.
    */
    'hasAccountantRole'?: boolean;
    /**
    * Month period in format  yyyy-MM.
    */
    'monthPeriod'?: string;
    /**
    * Number of times the user has logged in.
    */
    'numberOfLogins'?: number;
    /**
    * Number of documents created.
    */
    'numberOfDocumentsCreated'?: number;
    /**
    * Net value of documents created.
    */
    'netValueDocumentsCreated'?: number;
    /**
    * Absolute value of documents created.
    */
    'absoluteValueDocumentsCreated'?: number;
    'attachedPractices'?: Array<PracticeResponse>;
    'historyRecords'?: Array<HistoryRecordResponse>;
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
