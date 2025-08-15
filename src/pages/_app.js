"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
const jsx_runtime_1 = require("react/jsx-runtime");
require("@/styles/globals.css");
const head_1 = __importDefault(require("next/head"));
function App({ Component, pageProps }) {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(head_1.default, { children: [(0, jsx_runtime_1.jsx)("link", { rel: "icon", href: "/profile.jpg" }), (0, jsx_runtime_1.jsx)("title", { children: "Jeonghyun Kim" }), (0, jsx_runtime_1.jsx)("meta", { name: "description", content: "Jeonghyun Kim's personal website" })] }), (0, jsx_runtime_1.jsx)(Component, { ...pageProps })] }));
}
//# sourceMappingURL=_app.js.map