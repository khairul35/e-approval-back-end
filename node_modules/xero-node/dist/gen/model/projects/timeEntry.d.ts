export declare class TimeEntry {
    /**
    * Identifier of the time entry.
    */
    'timeEntryId'?: string;
    /**
    * The xero user identifier of the person who logged time.
    */
    'userId'?: string;
    /**
    * Identifier of the project, that the task (which the time entry is logged against) belongs to.
    */
    'projectId'?: string;
    /**
    * Identifier of the task that time entry is logged against.
    */
    'taskId'?: string;
    /**
    * The date time that time entry is logged on. UTC Date Time in ISO-8601 format.
    */
    'dateUtc'?: Date;
    /**
    * The date time that time entry is created. UTC Date Time in ISO-8601 format. By default it is set to server time.
    */
    'dateEnteredUtc'?: Date;
    /**
    * The duration of logged minutes.
    */
    'duration'?: number;
    /**
    * A description of the time entry.
    */
    'description'?: string;
    /**
    * Status of the time entry. By default a time entry is created with status of `ACTIVE`. A `LOCKED` state indicates that the time entry is currently changing state (for example being invoiced). Updates are not allowed when in this state. It will have a status of INVOICED once it is invoiced.
    */
    'status'?: TimeEntry.StatusEnum;
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
export declare namespace TimeEntry {
    enum StatusEnum {
        ACTIVE,
        LOCKED,
        INVOICED
    }
}
