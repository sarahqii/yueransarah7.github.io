"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const image_1 = __importDefault(require("next/image"));
const scrollToSection = (sectionId) => {
    const start = window.pageYOffset;
    const duration = 500;
    let startTime = null;
    const headerHeight = 64; // Height of the header (h-16 = 64px)
    const easeOutCubic = (t) => {
        return 1 - Math.pow(1 - t, 3);
    };
    const animation = (currentTime) => {
        if (startTime === null)
            startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const target = sectionId === 'about' ? 0 :
            (document.getElementById(sectionId)?.offsetTop ?? 0) - headerHeight - 32;
        const distance = target - start;
        window.scrollTo(0, start + (distance * easeOutCubic(progress)));
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    };
    requestAnimationFrame(animation);
};
const Header = () => {
    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        scrollToSection(sectionId);
    };
    return ((0, jsx_runtime_1.jsx)("header", { className: "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm", children: (0, jsx_runtime_1.jsx)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between items-center h-16", children: [(0, jsx_runtime_1.jsx)("a", { href: "#about", onClick: (e) => handleNavClick(e, 'about'), className: "cursor-pointer", children: (0, jsx_runtime_1.jsx)(image_1.default, { src: "/main_logo.png", alt: "Logo", width: 180, height: 120, className: "h-auto" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-4", children: [(0, jsx_runtime_1.jsxs)("nav", { className: "hidden md:flex items-center space-x-4", children: [(0, jsx_runtime_1.jsx)("a", { href: "#news", onClick: (e) => handleNavClick(e, 'news'), className: "text-gray-600 hover:text-blue-600 transition-colors font-medium", children: "News" }), (0, jsx_runtime_1.jsx)("a", { href: "#projects", onClick: (e) => handleNavClick(e, 'projects'), className: "text-gray-600 hover:text-blue-600 transition-colors font-medium", children: "Projects" })] }), (0, jsx_runtime_1.jsx)("a", { href: "/Jeonghyun_CV.pdf", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors", children: "View CV" })] })] }) }) }));
};
exports.default = Header;
//# sourceMappingURL=Header.js.map