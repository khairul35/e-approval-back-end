import { EndBalance } from '././endBalance';
import { StartBalance } from '././startBalance';
import { StatementLine } from '././statementLine';
export declare class Statement {
    /**
    * GUID used to identify the Statement.
    */
    'id'?: string;
    /**
    * The Xero generated feed connection Id that identifies the Xero Bank Account Container into which the statement should be delivered. This is obtained by calling GET FeedConnections.
    */
    'feedConnectionId'?: string;
    /**
    * Current status of statements
    */
    'status'?: Statement.StatusEnum;
    /**
    * Opening balance date (can be no older than one year from the current date) ISO-8601 YYYY-MM-DD
    */
    'startDate'?: string;
    /**
    * Closing balance date ISO-8601 YYYY-MM-DD
    */
    'endDate'?: string;
    'startBalance'?: StartBalance;
    'endBalance'?: EndBalance;
    'statementLines'?: Array<StatementLine>;
    'errors'?: Array<Error>;
    'statementLineCount'?: number;
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
export declare namespace Statement {
    enum StatusEnum {
        PENDING,
        REJECTED,
        DELIVERED
    }
}
