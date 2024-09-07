export type Welcome = {
    name: string;
    description: string;
    displayField: string;
    fields: Field[];
    sys: WelcomeSys;
}

export type Field = {
    id: string;
    name: string;
    type: string;
    localized: boolean;
    required: boolean;
    validations: Validation[];
    disabled: boolean;
    omitted: boolean;
    items?: Items;
}

export type Items = {
    type: string;
    validations: any[];
    linkType: string;
}

export type Validation = {
    unique: boolean;
}

export type WelcomeSys = {
    space: CreatedBy;
    id: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;
    environment: CreatedBy;
    publishedVersion: number;
    publishedAt: Date;
    firstPublishedAt: Date;
    createdBy: CreatedBy;
    updatedBy: CreatedBy;
    publishedCounter: number;
    version: number;
    publishedBy: CreatedBy;
    urn: string;
}

export type CreatedBy = {
    sys: CreatedBySys;
}

export type CreatedBySys = {
    type: string;
    linkType: string;
    id: string;
}
