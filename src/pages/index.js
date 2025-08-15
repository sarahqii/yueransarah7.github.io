"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const Header_1 = __importDefault(require("../components/Header"));
const ProfileImage_1 = __importDefault(require("../components/ProfileImage"));
const SkillsSection_1 = __importDefault(require("../components/SkillsSection"));
const SectionTitle_1 = __importDefault(require("../components/SectionTitle"));
const NewsList_1 = __importDefault(require("../components/NewsList"));
const EducationList_1 = __importDefault(require("../components/EducationList"));
const ProjectList_1 = __importDefault(require("../components/ProjectList"));
const PublicationList_1 = __importDefault(require("../components/PublicationList"));
const ExperienceList_1 = __importDefault(require("../components/ExperienceList"));
const AwardList_1 = __importDefault(require("../components/AwardList"));
const About_1 = __importDefault(require("../components/About"));
const news_1 = require("../data/news");
const education_1 = require("../data/education");
const projects_1 = require("../data/projects");
const publications_1 = require("../data/publications");
const experience_1 = require("../data/experience");
const awards_1 = require("../data/awards");
const skills_1 = require("../data/skills");
const profile_1 = require("../data/profile");
const AboutSection = () => ((0, jsx_runtime_1.jsx)("section", { id: "about", className: "pt-20 md:pt-24 pb-12 md:pb-16 bg-white scroll-mt-16", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [(0, jsx_runtime_1.jsx)(SectionTitle_1.default, { title: "About Me" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col lg:flex-row gap-8 md:gap-12 items-start", children: [(0, jsx_runtime_1.jsx)(ProfileImage_1.default, {}), (0, jsx_runtime_1.jsx)("div", { className: "w-full lg:w-2/3", children: (0, jsx_runtime_1.jsxs)("div", { className: "prose max-w-none", children: [(0, jsx_runtime_1.jsx)(About_1.default, {}), (0, jsx_runtime_1.jsx)(SkillsSection_1.default, { skills: skills_1.skills })] }) })] })] }) }));
const NewsSection = () => ((0, jsx_runtime_1.jsx)("section", { id: "news", className: "py-8 md:py-12 bg-white scroll-mt-16", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [(0, jsx_runtime_1.jsx)(SectionTitle_1.default, { title: "Recent News" }), (0, jsx_runtime_1.jsx)(NewsList_1.default, { items: news_1.news })] }) }));
const ResearchInterestsSection = () => ((0, jsx_runtime_1.jsx)("section", { id: "research", className: "py-8 md:py-12 bg-white scroll-mt-16", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [(0, jsx_runtime_1.jsx)(SectionTitle_1.default, { title: "Research Interests" }), (0, jsx_runtime_1.jsx)("div", { className: "mb-4 text-gray-700 text-base md:text-lg", children: profile_1.profile.researchInterests.description }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-wrap gap-2 md:gap-3 mt-2", children: profile_1.profile.researchInterests.tags.map((tag, idx) => ((0, jsx_runtime_1.jsx)("span", { className: `${tag.color} px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-medium`, children: tag.label }, idx))) })] }) }));
const EducationSection = () => ((0, jsx_runtime_1.jsx)("section", { id: "education", className: "py-8 md:py-12 bg-white scroll-mt-16", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [(0, jsx_runtime_1.jsx)(SectionTitle_1.default, { title: "Education" }), (0, jsx_runtime_1.jsx)(EducationList_1.default, { items: education_1.education })] }) }));
const TabbedSection = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { id: 'projects', label: 'Projects' },
        { id: 'publications', label: 'Publications' },
        { id: 'experience', label: 'Experience' },
        { id: 'awards', label: 'Honors & Awards' },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "hidden md:block", children: (0, jsx_runtime_1.jsx)("section", { id: "projects", className: "py-8 md:py-12 bg-white scroll-mt-16", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [(0, jsx_runtime_1.jsx)("div", { className: "border-b border-gray-200", children: (0, jsx_runtime_1.jsx)("nav", { className: "-mb-px flex space-x-8", children: tabs.map((tab) => ((0, jsx_runtime_1.jsx)("button", { onClick: () => setActiveTab(tab.id), className: `
                      whitespace-nowrap py-4 px-1 border-b-2 text-lg transition-all
                      ${activeTab === tab.id
                                            ? 'border-blue-500 text-blue-600 font-bold'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                    `, children: tab.label }, tab.id))) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-8", children: [activeTab === 'projects' && (0, jsx_runtime_1.jsx)(ProjectList_1.default, { items: projects_1.projects }), activeTab === 'publications' && (0, jsx_runtime_1.jsx)(PublicationList_1.default, { items: publications_1.publications }), activeTab === 'experience' && (0, jsx_runtime_1.jsx)(ExperienceList_1.default, { items: experience_1.experience }), activeTab === 'awards' && (0, jsx_runtime_1.jsx)(AwardList_1.default, { items: awards_1.awards })] })] }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "md:hidden", children: [(0, jsx_runtime_1.jsx)("section", { id: "projects", className: "py-8 bg-white scroll-mt-16", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [(0, jsx_runtime_1.jsx)(SectionTitle_1.default, { title: "Projects" }), (0, jsx_runtime_1.jsx)(ProjectList_1.default, { items: projects_1.projects })] }) }), (0, jsx_runtime_1.jsx)("section", { id: "publications", className: "py-8 bg-white scroll-mt-16", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [(0, jsx_runtime_1.jsx)(SectionTitle_1.default, { title: "Publications" }), (0, jsx_runtime_1.jsx)(PublicationList_1.default, { items: publications_1.publications })] }) }), (0, jsx_runtime_1.jsx)("section", { id: "experience", className: "py-8 bg-white scroll-mt-16", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [(0, jsx_runtime_1.jsx)(SectionTitle_1.default, { title: "Experience" }), (0, jsx_runtime_1.jsx)(ExperienceList_1.default, { items: experience_1.experience })] }) }), (0, jsx_runtime_1.jsx)("section", { id: "awards", className: "py-8 bg-white scroll-mt-16", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [(0, jsx_runtime_1.jsx)(SectionTitle_1.default, { title: "Honors & Awards" }), (0, jsx_runtime_1.jsx)(AwardList_1.default, { items: awards_1.awards })] }) })] })] }));
};
const Footer = () => ((0, jsx_runtime_1.jsx)("footer", { className: "mt-12 md:mt-16 py-4 md:py-6 bg-white border-t border-gray-200 text-center text-gray-500 text-xs md:text-sm", children: "Copyright \u00A9 2025 Jeonghyun Kim. All rights reserved." }));
const PersonalPage = () => {
    const [activeTab, setActiveTab] = (0, react_1.useState)('projects');
    return ((0, jsx_runtime_1.jsxs)("div", { className: "min-h-screen bg-white scroll-smooth", children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsx)(AboutSection, {}), (0, jsx_runtime_1.jsx)(NewsSection, {}), (0, jsx_runtime_1.jsx)(ResearchInterestsSection, {}), (0, jsx_runtime_1.jsx)(EducationSection, {}), (0, jsx_runtime_1.jsx)(TabbedSection, { activeTab: activeTab, setActiveTab: setActiveTab }), (0, jsx_runtime_1.jsx)(Footer, {})] }));
};
exports.default = PersonalPage;
//# sourceMappingURL=index.js.map