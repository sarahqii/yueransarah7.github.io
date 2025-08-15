"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NewsList;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
function NewsList({ items }) {
    return ((0, jsx_runtime_1.jsx)("ul", { className: "space-y-4", children: items.map((item, i) => ((0, jsx_runtime_1.jsxs)("li", { className: "flex items-start", children: [(0, jsx_runtime_1.jsxs)("span", { className: "text-gray-400 font-semibold whitespace-nowrap mr-2", children: [item.date, ":"] }), (0, jsx_runtime_1.jsx)("div", { className: "text-gray-700 flex-1", children: item.content })] }, i))) }));
}
//# sourceMappingURL=NewsList.js.map