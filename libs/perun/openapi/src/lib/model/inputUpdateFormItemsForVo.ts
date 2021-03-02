/**
 * Perun RPC API
 * Perun Remote Procedure Calls Application Programming Interface
 *
 * The version of the OpenAPI document: 3.19.0
 * Contact: perun@cesnet.cz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ApplicationFormItem } from './applicationFormItem';


/**
 * input to updateFormItemsForVo
 */
export interface InputUpdateFormItemsForVo { 
    /**
     * vo id
     */
    vo?: number;
    items?: Array<ApplicationFormItem>;
}

