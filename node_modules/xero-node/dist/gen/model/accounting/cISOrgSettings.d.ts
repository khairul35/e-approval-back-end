import { CISOrgSetting } from '././cISOrgSetting';
export declare class CISOrgSettings {
    'cISSettings'?: Array<CISOrgSetting>;
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
