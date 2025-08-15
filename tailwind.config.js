"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist: [
        'bg-blue-100',
        'text-blue-800',
        'bg-green-100',
        'text-green-800',
        'bg-purple-100',
        'text-purple-800',
        'bg-yellow-100',
        'text-yellow-800',
        'bg-blue-700',
        'text-blue-700',
        'bg-pink-100',
        'text-pink-800',
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [],
};
//# sourceMappingURL=tailwind.config.js.map