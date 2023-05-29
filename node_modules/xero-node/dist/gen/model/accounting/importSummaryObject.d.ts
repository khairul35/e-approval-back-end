import { ImportSummary } from '././importSummary';
export declare class ImportSummaryObject {
    'importSummary'?: ImportSummary;
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
