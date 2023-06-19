/**
 * CodeReady Dependency Analytics API
 * Vulnerability analysis with Red Hat CodeReady Dependency Analytics
 *
 * OpenAPI spec version: 3.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class VulnerabilitiesSummary {
    'direct'?: number;
    'total'?: number;
    'critical'?: number;
    'high'?: number;
    'medium'?: number;
    'low'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "direct",
            "baseName": "direct",
            "type": "number",
            "format": ""
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": ""
        },
        {
            "name": "critical",
            "baseName": "critical",
            "type": "number",
            "format": ""
        },
        {
            "name": "high",
            "baseName": "high",
            "type": "number",
            "format": ""
        },
        {
            "name": "medium",
            "baseName": "medium",
            "type": "number",
            "format": ""
        },
        {
            "name": "low",
            "baseName": "low",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return VulnerabilitiesSummary.attributeTypeMap;
    }

    public constructor() {
    }
}
