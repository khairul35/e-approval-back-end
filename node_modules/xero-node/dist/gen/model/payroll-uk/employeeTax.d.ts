export declare class EmployeeTax {
    /**
    * The Starter type.
    */
    'starterType'?: string;
    /**
    * Starter declaration.
    */
    'starterDeclaration'?: string;
    /**
    * The Tax code.
    */
    'taxCode'?: string;
    /**
    * Describes whether the tax settings is W1M1
    */
    'w1M1'?: boolean;
    /**
    * The previous taxable pay
    */
    'previousTaxablePay'?: number;
    /**
    * The tax amount previously paid
    */
    'previousTaxPaid'?: number;
    /**
    * The employee\'s student loan deduction type
    */
    'studentLoanDeduction'?: string;
    /**
    * Describes whether the employee has post graduate loans
    */
    'hasPostGraduateLoans'?: boolean;
    /**
    * Describes whether the employee is director
    */
    'isDirector'?: boolean;
    /**
    * The directorship start date
    */
    'directorshipStartDate'?: string;
    /**
    * NICs calculation method
    */
    'nicCalculationMethod'?: string;
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
