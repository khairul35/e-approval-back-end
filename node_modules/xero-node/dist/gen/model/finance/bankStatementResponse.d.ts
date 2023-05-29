import { CurrentStatementResponse } from '././currentStatementResponse';
import { StatementLinesResponse } from '././statementLinesResponse';
export declare class BankStatementResponse {
    'statementLines'?: StatementLinesResponse;
    'currentStatement'?: CurrentStatementResponse;
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
