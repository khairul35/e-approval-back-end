import { Price } from '././price';
import { Product } from '././product';
export declare class SubscriptionItem {
    /**
    * Date when the subscription to this product will end
    */
    'endDate'?: Date;
    /**
    * The unique identifier of the subscription item.
    */
    'id': string;
    'price': Price;
    'product': Product;
    /**
    * The quantity of the item. For a fixed product, it is 1. For a per-seat product, it is a positive integer. For metered products, it is always null.
    */
    'quantity'?: number;
    /**
    * Date the subscription started, or will start. Note: this could be in the future for downgrades or reduced number of seats that haven\'t taken effect yet.
    */
    'startDate': Date;
    /**
    * Status of the subscription item. Available statuses are ACTIVE, CANCELED, and PENDING_ACTIVATION.
    */
    'status': SubscriptionItem.StatusEnum;
    /**
    * If the subscription is a test subscription
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
export declare namespace SubscriptionItem {
    enum StatusEnum {
        ACTIVE,
        CANCELED,
        PENDINGACTIVATION
    }
}
