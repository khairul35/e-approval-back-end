export declare class EmployeeOpeningBalances {
    /**
    * The total accumulated statutory adoption pay amount received by the employee for current fiscal year to date
    */
    'statutoryAdoptionPay'?: number;
    /**
    * The total accumulated statutory maternity pay amount received by the employee for current fiscal year to date
    */
    'statutoryMaternityPay'?: number;
    /**
    * The total accumulated statutory paternity pay amount received by the employee for current fiscal year to date
    */
    'statutoryPaternityPay'?: number;
    /**
    * The total accumulated statutory shared parental pay amount received by the employee for current fiscal year to date
    */
    'statutorySharedParentalPay'?: number;
    /**
    * The total accumulated statutory sick pay amount received by the employee for current fiscal year to date
    */
    'statutorySickPay'?: number;
    /**
    * The unique employee number issued by the employee\'s former employer
    */
    'priorEmployeeNumber'?: number;
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
