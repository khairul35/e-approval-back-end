export declare class DeductionType {
    /**
    * Name of the earnings rate (max length = 100)
    */
    'name'?: string;
    /**
    * See Accounts
    */
    'accountCode'?: string;
    /**
    * Indicates that this is a pre-tax deduction that will reduce the amount of tax you withhold from an employee.
    */
    'reducesTax'?: boolean;
    /**
    * Most deductions don’t reduce your superannuation guarantee contribution liability, so typically you will not set any value for this.
    */
    'reducesSuper'?: boolean;
    /**
    * Boolean to determine if the deduction type is reportable or exempt from W1
    */
    'isExemptFromW1'?: boolean;
    /**
    * Xero identifier
    */
    'deductionTypeID'?: string;
    /**
    * Last modified timestamp
    */
    'updatedDateUTC'?: Date;
    'deductionCategory'?: DeductionType.DeductionCategoryEnum;
    /**
    * Is the current record
    */
    'currentRecord'?: boolean;
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
export declare namespace DeductionType {
    enum DeductionCategoryEnum {
        NONE,
        UNIONFEES,
        WORKPLACEGIVING
    }
}
