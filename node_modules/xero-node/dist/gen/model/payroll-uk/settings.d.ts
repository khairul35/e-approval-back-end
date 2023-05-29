import { Accounts } from '././accounts';
import { Pagination } from '././pagination';
import { Problem } from '././problem';
export declare class Settings {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'settings'?: Accounts;
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
