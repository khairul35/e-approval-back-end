import { SubscriptionItem } from '././subscriptionItem';
export declare class Plan {
    /**
    * The unique identifier of the plan
    */
    'id': string;
    /**
    * The name of the plan. It is used in the invoice line item description.
    */
    'name': string;
    /**
    * Status of the plan. Available statuses are ACTIVE, CANCELED, and PENDING_ACTIVATION.
    */
    'status': Plan.StatusEnum;
    /**
    * List of the subscription items belonging to the plan. It does not include cancelled subscription items.
    */
    'subscriptionItems': Array<SubscriptionItem>;
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
export declare namespace Plan {
    enum StatusEnum {
        ACTIVE,
        CANCELED,
        PENDINGACTIVATION
    }
}
