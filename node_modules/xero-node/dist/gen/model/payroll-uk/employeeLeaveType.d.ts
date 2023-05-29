export declare class EmployeeLeaveType {
    /**
    * The Xero identifier for leave type
    */
    'leaveTypeID': string;
    /**
    * The schedule of accrual
    */
    'scheduleOfAccrual': EmployeeLeaveType.ScheduleOfAccrualEnum;
    /**
    * The number of hours accrued for the leave annually. This is 0 when the scheduleOfAccrual chosen is \"OnHourWorked\"
    */
    'hoursAccruedAnnually'?: number;
    /**
    * The maximum number of hours that can be accrued for the leave
    */
    'maximumToAccrue'?: number;
    /**
    * The initial number of hours assigned when the leave was added to the employee
    */
    'openingBalance'?: number;
    /**
    * The number of hours added to the leave balance for every hour worked by the employee. This is normally 0, unless the scheduleOfAccrual chosen is \"OnHourWorked\"
    */
    'rateAccruedHourly'?: number;
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
export declare namespace EmployeeLeaveType {
    enum ScheduleOfAccrualEnum {
        BeginningOfCalendarYear,
        OnAnniversaryDate,
        EachPayPeriod,
        OnHourWorked
    }
}
