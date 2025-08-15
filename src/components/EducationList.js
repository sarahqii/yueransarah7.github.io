"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EducationList;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
function EducationList({ items }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: "space-y-8", children: items.map((item, i) => ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col md:flex-row md:justify-between md:items-baseline", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { className: "text-lg font-bold text-gray-900", children: item.school }), (0, jsx_runtime_1.jsx)("div", { className: "text-gray-700", children: item.degree }), item.extra && (0, jsx_runtime_1.jsx)("div", { children: item.extra })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-2 md:mt-0 md:text-right min-w-[180px]", children: [(0, jsx_runtime_1.jsx)("div", { className: "italic text-gray-600", children: item.location }), (0, jsx_runtime_1.jsx)("div", { className: "text-gray-500", children: item.period })] })] }, i))) }));
}
//# sourceMappingURL=EducationList.js.map