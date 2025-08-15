"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SkillsSection;
const jsx_runtime_1 = require("react/jsx-runtime");
function SkillsSection({ skills }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "mt-8", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-semibold text-gray-900 mb-4", children: "Skills" }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: skills.map((skill, index) => ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h4", { className: "font-medium text-gray-900 mb-2", children: skill.category }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-wrap gap-2", children: skill.items.map((item, itemIndex) => ((0, jsx_runtime_1.jsx)("span", { className: `px-3 py-1 ${skill.color} rounded-full text-sm`, children: item }, itemIndex))) })] }, index))) })] }));
}
//# sourceMappingURL=SkillsSection.js.map