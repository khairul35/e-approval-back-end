import { AssetStatus } from '././assetStatus';
import { BookDepreciationDetail } from '././bookDepreciationDetail';
import { BookDepreciationSetting } from '././bookDepreciationSetting';
export declare class Asset {
    /**
    * The Xero-generated Id for the asset
    */
    'assetId'?: string;
    /**
    * The name of the asset
    */
    'assetName': string;
    /**
    * The Xero-generated Id for the asset type
    */
    'assetTypeId'?: string;
    /**
    * Must be unique.
    */
    'assetNumber'?: string;
    /**
    * The date the asset was purchased YYYY-MM-DD
    */
    'purchaseDate'?: string;
    /**
    * The purchase price of the asset
    */
    'purchasePrice'?: number;
    /**
    * The date the asset was disposed
    */
    'disposalDate'?: string;
    /**
    * The price the asset was disposed at
    */
    'disposalPrice'?: number;
    'assetStatus'?: AssetStatus;
    /**
    * The date the asset’s warranty expires (if needed) YYYY-MM-DD
    */
    'warrantyExpiryDate'?: string;
    /**
    * The asset\'s serial number
    */
    'serialNumber'?: string;
    'bookDepreciationSetting'?: BookDepreciationSetting;
    'bookDepreciationDetail'?: BookDepreciationDetail;
    /**
    * Boolean to indicate whether depreciation can be rolled back for this asset individually. This is true if it doesn\'t have \'legacy\' journal entries and if there is no lock period that would prevent this asset from rolling back.
    */
    'canRollback'?: boolean;
    /**
    * The accounting value of the asset
    */
    'accountingBookValue'?: number;
    /**
    * Boolean to indicate whether delete is enabled
    */
    'isDeleteEnabledForDate'?: boolean;
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
