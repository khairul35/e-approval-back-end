export * from '././amount';
export * from '././chargeType';
export * from '././currencyCode';
export * from '././modelError';
export * from '././pagination';
export * from '././project';
export * from '././projectCreateOrUpdate';
export * from '././projectPatch';
export * from '././projectStatus';
export * from '././projectUser';
export * from '././projectUsers';
export * from '././projects';
export * from '././task';
export * from '././taskCreateOrUpdate';
export * from '././tasks';
export * from '././timeEntries';
export * from '././timeEntry';
export * from '././timeEntryCreateOrUpdate';
import localVarRequest = require('request');
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserializeDateFormats(type: string, data: any): Date;
    static deserialize(data: any, type: string): any;
}
export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class OAuth implements Authentication {
    accessToken: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class VoidAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(_: localVarRequest.Options): void;
}
