"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const IconButton = ({ icon, tooltipText, onClick, href, hoverColor = 'hover:text-blue-600', showCopiedTooltip = false, }) => {
    const [showTooltip, setShowTooltip] = (0, react_1.useState)(false);
    const handleClick = async () => {
        if (onClick) {
            await onClick();
            if (showCopiedTooltip) {
                setShowTooltip(true);
                setTimeout(() => setShowTooltip(false), 2000);
            }
        }
    };
    const buttonContent = ((0, jsx_runtime_1.jsx)("button", { onClick: handleClick, className: `text-gray-600 ${hoverColor} transition-colors`, "aria-label": tooltipText, children: icon }));
    const linkContent = href ? ((0, jsx_runtime_1.jsx)("a", { href: href, target: "_blank", rel: "noopener noreferrer", className: `text-gray-600 ${hoverColor} transition-colors`, "aria-label": tooltipText, children: icon })) : null;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "relative group", children: [href ? linkContent : buttonContent, showTooltip && showCopiedTooltip && ((0, jsx_runtime_1.jsx)("div", { className: "z-10 absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap", children: "Copied!" })), (0, jsx_runtime_1.jsx)("div", { className: "absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap", children: tooltipText })] }));
};
exports.default = IconButton;
//# sourceMappingURL=IconButton.js.map