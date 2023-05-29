export declare class BookDepreciationSetting {
    /**
    * The method of depreciation applied to this asset. See Depreciation Methods
    */
    'depreciationMethod'?: BookDepreciationSetting.DepreciationMethodEnum;
    /**
    * The method of averaging applied to this asset. See Averaging Methods
    */
    'averagingMethod'?: BookDepreciationSetting.AveragingMethodEnum;
    /**
    * The rate of depreciation (e.g. 0.05)
    */
    'depreciationRate'?: number;
    /**
    * Effective life of the asset in years (e.g. 5)
    */
    'effectiveLifeYears'?: number;
    /**
    * See Depreciation Calculation Methods
    */
    'depreciationCalculationMethod'?: BookDepreciationSetting.DepreciationCalculationMethodEnum;
    /**
    * Unique Xero identifier for the depreciable object
    */
    'depreciableObjectId'?: string;
    /**
    * The type of asset object
    */
    'depreciableObjectType'?: string;
    /**
    * Unique Xero identifier for the effective date change
    */
    'bookEffectiveDateOfChangeId'?: string;
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
export declare namespace BookDepreciationSetting {
    enum DepreciationMethodEnum {
        NoDepreciation,
        StraightLine,
        DiminishingValue100,
        DiminishingValue150,
        DiminishingValue200,
        FullDepreciation
    }
    enum AveragingMethodEnum {
        FullMonth,
        ActualDays
    }
    enum DepreciationCalculationMethodEnum {
        Rate,
        Life,
        None
    }
}
