export declare class ProjectUser {
    /**
    * Identifier of the user of the project.
    */
    'userId'?: string;
    /**
    * Full name of the user.
    */
    'name'?: string;
    /**
    * Email address of the user.
    */
    'email'?: string;
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
