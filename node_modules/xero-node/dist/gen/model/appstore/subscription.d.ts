import { Plan } from '././plan';
export declare class Subscription {
    /**
    * End of the current period that the subscription has been invoiced for.
    */
    'currentPeriodEnd': Date;
    /**
    * If the subscription has been canceled, this is the date when the subscription ends. If null, the subscription is active and has not been cancelled
    */
    'endDate'?: Date;
    /**
    * The unique identifier of the subscription
    */
    'id': string;
    /**
    * The Xero generated unique identifier for the organisation
    */
    'organisationId': string;
    /**
    * List of plans for the subscription.
    */
    'plans': Array<Plan>;
    /**
    * Date when the subscription was first created.
    */
    'startDate': Date;
    /**
    * Status of the subscription. Available statuses are ACTIVE, CANCELED, and PAST_DUE.
    */
    'status': Subscription.StatusEnum;
    /**
    * Boolean used to indicate if the subscription is in test mode
    */
    'testMode'?: boolean;
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
export declare namespace Subscription {
    enum StatusEnum {
        ACTIVE,
        CANCELED,
        PASTDUE
    }
}
