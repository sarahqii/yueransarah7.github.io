import React from 'react';
export interface EducationItem {
    school: string;
    degree: string;
    location: string;
    period: string;
    extra?: React.ReactNode;
}
export default function EducationList({ items }: {
    items: EducationItem[];
}): any;
//# sourceMappingURL=EducationList.d.ts.map