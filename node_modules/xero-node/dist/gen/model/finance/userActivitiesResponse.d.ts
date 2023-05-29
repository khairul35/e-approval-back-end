import { UserResponse } from '././userResponse';
export declare class UserActivitiesResponse {
    /**
    * The requested Organisation to which the data pertains
    */
    'organisationId'?: string;
    /**
    * The month of the report
    */
    'dataMonth'?: string;
    'users'?: Array<UserResponse>;
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
