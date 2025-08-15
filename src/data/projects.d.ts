import React from 'react';
export interface ProjectItem {
    title: React.ReactNode;
    description: React.ReactNode;
    period: string;
    role: string;
    skills: string[];
    image?: string;
    link?: string;
    extra?: React.ReactNode;
}
export declare const projects: ProjectItem[];
//# sourceMappingURL=projects.d.ts.map