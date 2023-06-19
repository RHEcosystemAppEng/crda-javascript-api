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

import { DependencyReportHighestVulnerability } from '../backend/DependencyReportHighestVulnerability';
import { DependencyReportRecommendation } from '../backend/DependencyReportRecommendation';
import { Issue } from '../backend/Issue';
import { PackageRef } from '../backend/PackageRef';
import { Remediation } from '../backend/Remediation';
import { TransitiveDependencyReport } from '../backend/TransitiveDependencyReport';

export class DependencyReport {
    'ref'?: PackageRef;
    'issues'?: Array<Issue>;
    'transitive'?: Array<TransitiveDependencyReport>;
    'recommendation'?: DependencyReportRecommendation;
    /**
    * Trusted Content remediation related to identified security vulnerabilities
    */
    'remediations'?: { [key: string]: Remediation; };
    'highestVulnerability'?: DependencyReportHighestVulnerability;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "ref",
            "baseName": "ref",
            "type": "PackageRef",
            "format": ""
        },
        {
            "name": "issues",
            "baseName": "issues",
            "type": "Array<Issue>",
            "format": ""
        },
        {
            "name": "transitive",
            "baseName": "transitive",
            "type": "Array<TransitiveDependencyReport>",
            "format": ""
        },
        {
            "name": "recommendation",
            "baseName": "recommendation",
            "type": "DependencyReportRecommendation",
            "format": ""
        },
        {
            "name": "remediations",
            "baseName": "remediations",
            "type": "{ [key: string]: Remediation; }",
            "format": ""
        },
        {
            "name": "highestVulnerability",
            "baseName": "highestVulnerability",
            "type": "DependencyReportHighestVulnerability",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DependencyReport.attributeTypeMap;
    }

    public constructor() {
    }
}
