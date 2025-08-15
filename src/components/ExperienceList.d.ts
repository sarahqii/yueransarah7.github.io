import React from 'react';
export interface ExperienceItem {
    title: string;
    position: string;
    location: string;
    period: string;
    bullets: React.ReactNode[];
    advisor?: React.ReactNode;
}
export default function ExperienceList({ items }: {
    items: ExperienceItem[];
}): any;
//# sourceMappingURL=ExperienceList.d.ts.map