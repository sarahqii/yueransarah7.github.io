"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AwardList;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
function AwardList({ items }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: "space-y-10", children: items.map((item, i) => ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col md:flex-row md:justify-between md:items-start", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex-1", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-lg font-bold text-gray-900", children: item.title }), (0, jsx_runtime_1.jsx)("div", { className: "text-gray-700", children: item.description })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-2 md:mt-0 md:text-right min-w-[180px]", children: [(0, jsx_runtime_1.jsx)("div", { className: "italic text-gray-600", children: item.issuer }), (0, jsx_runtime_1.jsx)("div", { className: "text-gray-500", children: item.date })] })] }, i))) }));
}
//# sourceMappingURL=AwardList.js.map