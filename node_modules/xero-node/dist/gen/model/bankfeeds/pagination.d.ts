export declare class Pagination {
    /**
    * Page number which specifies the set of records to retrieve. Example - https://api.xero.com/bankfeeds.xro/1.0/Statements?page=2 to get the second set of the records. When page value is not a number or a negative number, by default, the first set of records is returned.
    */
    'page'?: number;
    /**
    * Page size which specifies how many records per page will be returned (default 50). Example - https://api.xero.com/bankfeeds.xro/1.0/Statements?pageSize=100 to specify page size of 100.
    */
    'pageSize'?: number;
    /**
    * Number of pages available
    */
    'pageCount'?: number;
    /**
    * Number of items returned
    */
    'itemCount'?: number;
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
