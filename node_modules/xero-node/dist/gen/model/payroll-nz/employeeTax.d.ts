import { TaxCode } from '././taxCode';
export declare class EmployeeTax {
    /**
    * The IRD Number.
    */
    'irdNumber'?: string;
    'taxCode'?: TaxCode;
    /**
    * Special tax rate percentage.
    */
    'specialTaxRatePercentage'?: number;
    /**
    * Does the employee has a special student loan rate?
    */
    'hasSpecialStudentLoanRate'?: boolean;
    /**
    * The employee student loan rate percentage.
    */
    'specialStudentLoanRatePercentage'?: number;
    /**
    * The employee eligibility for KiwiSaver.
    */
    'isEligibleForKiwiSaver'?: boolean;
    /**
    * Employer superannuation contribution tax rate.
    */
    'esctRatePercentage'?: number;
    /**
    * Contribution Option which can be \'MakeContributions\' \'OptOut\', \'OnAContributionsHoliday\', \'OnASavingsSuspension\', \'NotCurrentlyAKiwiSaverMember\' for employees without a KiwiSaver membership
    */
    'kiwiSaverContributions'?: EmployeeTax.KiwiSaverContributionsEnum;
    /**
    * Employee Contribution percentage.
    */
    'kiwiSaverEmployeeContributionRatePercentage'?: number;
    /**
    * Employer Contribution percentage.
    */
    'kiwiSaverEmployerContributionRatePercentage'?: number;
    /**
    * Employer Contribution through Salary Sacrifice percentage.
    */
    'kiwiSaverEmployerSalarySacrificeContributionRatePercentage'?: number;
    /**
    * Opt Out Date.
    */
    'kiwiSaverOptOutDate'?: string;
    /**
    * Contribution holiday expiry date or end date.
    */
    'kiwiSaverContributionHolidayEndDate'?: string;
    /**
    * Does the employee have a remaining student loan balance? Set a remaining balance if you have received a letter from IR.
    */
    'hasStudentLoanBalance'?: boolean;
    /**
    * The employee\'s student loan balance shown on the letter from IR.
    */
    'studentLoanBalance'?: number;
    /**
    * The date of the letter from IR.
    */
    'studentLoanAsAt'?: string;
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
export declare namespace EmployeeTax {
    enum KiwiSaverContributionsEnum {
        MakeContributions,
        OptOut,
        OnAContributionsHoliday,
        OnASavingsSuspension,
        NotCurrentlyAKiwiSaverMember
    }
}
