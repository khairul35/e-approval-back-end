export declare class Action {
    /**
    * Name of the actions for this organisation
    */
    'name'?: string;
    /**
    * Status of the action for this organisation
    */
    'status'?: Action.StatusEnum;
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
export declare namespace Action {
    enum StatusEnum {
        ALLOWED,
        NOTALLOWED
    }
}
