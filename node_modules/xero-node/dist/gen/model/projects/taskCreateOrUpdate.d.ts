import { Amount } from '././amount';
import { ChargeType } from '././chargeType';
export declare class TaskCreateOrUpdate {
    /**
    * Name of the task. Max length 100 characters.
    */
    'name': string;
    'rate': Amount;
    'chargeType': ChargeType;
    /**
    * An estimated time to perform the task
    */
    'estimateMinutes'?: number;
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
