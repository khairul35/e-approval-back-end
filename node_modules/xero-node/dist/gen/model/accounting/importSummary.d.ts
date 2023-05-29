import { ImportSummaryAccounts } from '././importSummaryAccounts';
import { ImportSummaryOrganisation } from '././importSummaryOrganisation';
/**
* A summary of the import from setup endpoint
*/
export declare class ImportSummary {
    'accounts'?: ImportSummaryAccounts;
    'organisation'?: ImportSummaryOrganisation;
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
