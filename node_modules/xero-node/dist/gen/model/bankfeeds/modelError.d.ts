/**
* On error, the API consumer will receive an HTTP response with a HTTP Status Code of 4xx or 5xx and a Content-Type of application/problem+json.
*/
export declare class ModelError {
    /**
    * Human readable high level error description.
    */
    'title'?: string;
    /**
    * The numeric HTTP Status Code, e.g. 404
    */
    'status'?: number;
    /**
    * Human readable detailed error description.
    */
    'detail'?: string;
    /**
    * Identifies the type of error.
    */
    'type'?: ModelError.TypeEnum;
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
export declare namespace ModelError {
    enum TypeEnum {
        InvalidRequest,
        InvalidApplication,
        InvalidFeedConnection,
        DuplicateStatement,
        InvalidEndBalance,
        InvalidStartAndEndDate,
        InvalidStartDate,
        InternalError,
        FeedAlreadyConnectedInCurrentOrganisation,
        InvalidEndDate,
        StatementNotFound,
        FeedConnectedInDifferentOrganisation,
        FeedAlreadyConnectedInDifferentOrganisation,
        BankFeedNotFound,
        InvalidCountrySpecified,
        InvalidOrganisationBankFeeds,
        InvalidOrganisationMultiCurrency,
        InvalidFeedConnectionForOrganisation,
        InvalidUserRole,
        AccountNotValid,
        FeedNotFoundOrAlreadyDeleted
    }
}
