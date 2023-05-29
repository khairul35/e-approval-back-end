import { Address } from '././address';
export declare class Employee {
    /**
    * Xero unique identifier for the employee
    */
    'employeeID'?: string;
    /**
    * Title of the employee
    */
    'title'?: string;
    /**
    * First name of employee
    */
    'firstName'?: string;
    /**
    * Last name of employee
    */
    'lastName'?: string;
    /**
    * Date of birth of the employee (YYYY-MM-DD)
    */
    'dateOfBirth'?: string;
    'address'?: Address;
    /**
    * The email address for the employee
    */
    'email'?: string;
    /**
    * The employee’s gender
    */
    'gender'?: Employee.GenderEnum;
    /**
    * Employee phone number
    */
    'phoneNumber'?: string;
    /**
    * Employment start date of the employee at the time it was requested
    */
    'startDate'?: string;
    /**
    * Employment end date of the employee at the time it was requested
    */
    'endDate'?: string;
    /**
    * Xero unique identifier for the payroll calendar of the employee
    */
    'payrollCalendarID'?: string;
    /**
    * UTC timestamp of last update to the employee
    */
    'updatedDateUTC'?: Date;
    /**
    * UTC timestamp when the employee was created in Xero
    */
    'createdDateUTC'?: Date;
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
export declare namespace Employee {
    enum GenderEnum {
        M,
        F
    }
}
