export declare class TaxComponent {
    /**
    * Name of Tax Component
    */
    'name'?: string;
    /**
    * Tax Rate (up to 4dp)
    */
    'rate'?: number;
    /**
    * Boolean to describe if Tax rate is compounded.
    */
    'isCompound'?: boolean;
    /**
    * Boolean to describe if tax rate is non-recoverable. Non-recoverable rates are only applicable to Canadian organisations
    */
    'isNonRecoverable'?: boolean;
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
