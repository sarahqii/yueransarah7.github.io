"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const profile_1 = require("@/data/profile");
const About = () => {
    const renderTextWithLinks = (text) => {
        // Split text into parts that match our link pattern
        const parts = text.split(/(Interactive Computing Lab)/g);
        return parts.map((part, index) => {
            if (part === 'Interactive Computing Lab') {
                return ((0, jsx_runtime_1.jsx)("a", { href: "https://ic.kaist.ac.kr/", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:text-blue-800 hover:underline", children: part }, index));
            }
            return part;
        });
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "space-y-3", children: profile_1.profile.about.map((paragraph, index) => ((0, jsx_runtime_1.jsx)("p", { className: "text-gray-700", children: renderTextWithLinks(paragraph) }, index))) }));
};
exports.default = About;
//# sourceMappingURL=About.js.map