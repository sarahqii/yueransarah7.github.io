interface Skill {
    category: string;
    items: string[];
    color: string;
}
interface SkillsSectionProps {
    skills: Skill[];
}
export default function SkillsSection({ skills }: SkillsSectionProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=SkillsSection.d.ts.map