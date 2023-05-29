export declare class LockHistoryModel {
    /**
    * Date the account hard lock was set
    */
    'hardLockDate'?: string;
    /**
    * Date the account soft lock was set
    */
    'softLockDate'?: string;
    /**
    * The system date time that the lock was updated
    */
    'updatedDateUtc'?: Date;
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
