"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProfileImage;
const jsx_runtime_1 = require("react/jsx-runtime");
const image_1 = __importDefault(require("next/image"));
const ContactInfo_1 = __importDefault(require("./ContactInfo"));
const profile_1 = require("../data/profile");
function ProfileImage() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full lg:w-1/3 flex flex-col items-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "relative w-64 h-64 rounded-full overflow-hidden shadow-lg", children: (0, jsx_runtime_1.jsx)(image_1.default, { src: "/profile.jpg", alt: "Profile", fill: true, sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw", className: "object-cover", priority: true }) }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-6", children: [(0, jsx_runtime_1.jsxs)("h3", { className: "text-2xl font-bold text-gray-900", children: [profile_1.profile.name, (0, jsx_runtime_1.jsx)("span", { className: "ml-2 text-base text-gray-500 font-normal align-middle", children: profile_1.profile.englishName })] }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-700 font-semibold text-lg mt-1", children: profile_1.profile.degree }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-700 font-semibold text-lg mt-1", children: profile_1.profile.title }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-500 text-sm mt-3", children: profile_1.profile.address }), (0, jsx_runtime_1.jsx)("div", { className: "mt-6", children: (0, jsx_runtime_1.jsx)(ContactInfo_1.default, {}) })] })] }));
}
//# sourceMappingURL=ProfileImage.js.map