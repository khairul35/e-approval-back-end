export declare class UsageRecord {
    /**
    * The quantity recorded
    */
    'quantity': number;
    /**
    * The unique identifier of the Subscription.
    */
    'subscriptionId': string;
    /**
    * The unique identifier of the SubscriptionItem.
    */
    'subscriptionItemId': string;
    /**
    * If the subscription is a test subscription
    */
    'testMode': boolean;
    /**
    * The time when this usage was recorded in UTC
    */
    'recordedAt': Date;
    /**
    * The unique identifier of the usageRecord.
    */
    'usageRecordId': string;
    /**
    * The price per unit
    */
    'pricePerUnit': number;
    /**
    * The unique identifier of the linked Product
    */
    'productId': string;
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
