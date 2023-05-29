export declare class ProblemDetails {
    'detail'?: string;
    'extensions'?: object;
    'instance'?: string;
    'status'?: number;
    'title'?: string;
    'type'?: string;
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
