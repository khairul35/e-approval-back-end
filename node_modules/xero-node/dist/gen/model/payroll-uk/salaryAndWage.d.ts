export declare class SalaryAndWage {
    /**
    * Xero unique identifier for a salary and wages record
    */
    'salaryAndWagesID'?: string;
    /**
    * Xero unique identifier for an earnings rate
    */
    'earningsRateID': string;
    /**
    * The Number of Units per week for the corresponding salary and wages
    */
    'numberOfUnitsPerWeek': number;
    /**
    * The rate of each unit for the corresponding salary and wages
    */
    'ratePerUnit'?: number;
    /**
    * The Number of Units per day for the corresponding salary and wages
    */
    'numberOfUnitsPerDay'?: number;
    /**
    * The effective date of the corresponding salary and wages
    */
    'effectiveFrom': string;
    /**
    * The annual salary
    */
    'annualSalary': number;
    /**
    * The current status of the corresponding salary and wages
    */
    'status': SalaryAndWage.StatusEnum;
    /**
    * The type of the payment of the corresponding salary and wages
    */
    'paymentType': SalaryAndWage.PaymentTypeEnum;
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
export declare namespace SalaryAndWage {
    enum StatusEnum {
        Active,
        Pending,
        History
    }
    enum PaymentTypeEnum {
        Salary,
        Hourly
    }
}
