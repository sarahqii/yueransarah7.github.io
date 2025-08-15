"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ExperienceList;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
function ExperienceList({ items }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: "space-y-10", children: items.map((item, i) => ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col md:flex-row md:justify-between md:items-start", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex-1", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-lg font-bold text-gray-900", children: item.title }), (0, jsx_runtime_1.jsx)("div", { className: "text-gray-700", children: item.position }), (0, jsx_runtime_1.jsx)("ul", { className: "list-disc ml-5 text-gray-700 mt-1 space-y-1", children: item.bullets.map((b, j) => ((0, jsx_runtime_1.jsx)("li", { className: "mb-1", children: b }, j))) }), item.advisor && (0, jsx_runtime_1.jsx)("div", { className: "text-gray-600 mt-1", children: item.advisor })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-2 md:mt-0 md:text-right min-w-[180px]", children: [(0, jsx_runtime_1.jsx)("div", { className: "italic text-gray-600", children: item.location }), (0, jsx_runtime_1.jsx)("div", { className: "text-gray-500", children: item.period })] })] }, i))) }));
}
//# sourceMappingURL=ExperienceList.js.map