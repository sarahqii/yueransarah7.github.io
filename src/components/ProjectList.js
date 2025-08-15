"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProjectList;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const projects_1 = require("../data/projects");
function ProjectList({ items }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: "space-y-8", children: items.map((item, i) => ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white border border-gray-200 rounded-2xl shadow p-6 flex flex-col md:flex-row gap-6", children: [item.image && ((0, jsx_runtime_1.jsx)("div", { className: "md:w-1/3 flex-shrink-0 flex items-center justify-center", children: (0, jsx_runtime_1.jsx)("img", { src: item.image, alt: item.title, className: "rounded-lg object-fill w-full" }) })), (0, jsx_runtime_1.jsxs)("div", { className: "flex-1", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-xl font-bold", children: item.title }), (0, jsx_runtime_1.jsx)("div", { className: "text-gray-500 text-right mb-2", children: item.period }), (0, jsx_runtime_1.jsx)("div", { className: "text-gray-700 mb-2", children: item.description }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2 mt-4", children: [(0, jsx_runtime_1.jsx)("span", { className: "font-semibold text-gray-500", children: "Contribution:" }), (0, jsx_runtime_1.jsx)("span", { className: "text-gray-700", children: item.role })] }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-wrap gap-2 mt-4", children: item.skills.map(skill => ((0, jsx_runtime_1.jsx)("span", { className: "bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium", children: skill }, skill))) }), item.extra && (0, jsx_runtime_1.jsx)("div", { className: "mt-2", children: item.extra })] })] }, i))) }));
}
//# sourceMappingURL=ProjectList.js.map