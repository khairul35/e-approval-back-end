import { ObjectGroup } from '././objectGroup';
import { ObjectType } from '././objectType';
export declare class Association {
    /**
    * The unique identifier of the file
    */
    'fileId'?: string;
    /**
    * The identifier of the object that the file is being associated with (e.g. InvoiceID, BankTransactionID, ContactID)
    */
    'objectId'?: string;
    'objectGroup'?: ObjectGroup;
    'objectType'?: ObjectType;
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
