import React from 'react';
export interface Author {
    name: string;
    isBold?: boolean;
    isUnderline?: boolean;
    isEqualContributor?: boolean;
    homepage?: string;
}
export interface PublicationItem {
    title: string;
    authors: Author[];
    venue: string;
    year: string;
    status: string;
    award?: React.ReactNode;
    links?: {
        label: string;
        url: string;
    }[];
    equalContributionNote?: string;
}
export declare const publications: PublicationItem[];
//# sourceMappingURL=publications.d.ts.map