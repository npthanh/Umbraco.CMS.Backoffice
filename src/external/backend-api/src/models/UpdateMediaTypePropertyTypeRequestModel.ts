/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PropertyTypeAppearanceModel } from './PropertyTypeAppearanceModel';
import type { PropertyTypeValidationModel } from './PropertyTypeValidationModel';
import type { ReferenceByIdModel } from './ReferenceByIdModel';

export type UpdateMediaTypePropertyTypeRequestModel = {
    id: string;
    container: ReferenceByIdModel;
    sortOrder: number;
    alias: string;
    name: string;
    description?: string | null;
    dataType: ReferenceByIdModel;
    variesByCulture: boolean;
    variesBySegment: boolean;
    validation: PropertyTypeValidationModel;
    appearance: PropertyTypeAppearanceModel;
};

