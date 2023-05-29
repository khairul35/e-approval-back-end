export declare class ProjectCreateOrUpdate {
    /**
    * Identifier of the contact this project was created for.
    */
    'contactId'?: string;
    /**
    * Name of the project.
    */
    'name': string;
    'estimateAmount'?: number;
    /**
    * Deadline for the project. UTC Date Time in ISO-8601 format.
    */
    'deadlineUtc'?: Date;
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
