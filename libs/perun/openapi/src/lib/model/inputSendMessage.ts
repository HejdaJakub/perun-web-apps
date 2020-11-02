/**
 * Perun RPC API
 * Perun Remote Procedure Calls Application Programming Interface
 *
 * The version of the OpenAPI document: 3.13.0
 * Contact: perun@cesnet.cz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { MailType } from './mailType';


/**
 * input to sendMessage
 */
export interface InputSendMessage { 
    mailType: MailType;
    /**
     * application id
     */
    applicationId: number;
    /**
     * you can specify reason for case: mailType == APP_REJECTED_USER
     */
    reason?: string;
}

