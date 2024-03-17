"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./globals.css");
var Header_1 = require("@/pages/header/Header");
var Footer_1 = require("@/pages/footer/Footer");
var theme_provider_1 = require("@/providers/theme-provider");
var poppins = google_1.Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600']
});
exports.metadata = {
    title: {
        "default": "Website Fabrício Castro",
        template: '%s | Fabrício Castro'
    },
    description: "Bem-vindo ao meu Site. Meu nome é Fabrício Castro"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "pt-br" },
        React.createElement("body", { className: poppins.className },
            React.createElement(theme_provider_1.ThemeProvider, { attribute: "class", defaultTheme: "system" },
                React.createElement(Header_1["default"], null),
                children,
                React.createElement(Footer_1["default"], null)))));
}
exports["default"] = RootLayout;
