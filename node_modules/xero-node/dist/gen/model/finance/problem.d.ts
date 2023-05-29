import { ProblemType } from '././problemType';
export declare class Problem {
    'type'?: ProblemType;
    'title'?: string;
    'status'?: number;
    'detail'?: string;
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
