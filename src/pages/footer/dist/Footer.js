"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var footer_module_css_1 = require("./footer.module.css");
var fa_1 = require("react-icons/fa");
var fa_2 = require("react-icons/fa");
var Footer = function () {
    var date = new Date();
    return (React.createElement("footer", { className: footer_module_css_1["default"].footer },
        React.createElement("section", { className: footer_module_css_1["default"].footer_text },
            React.createElement("span", null, " Dev  "),
            React.createElement(fa_2.FaCode, null),
            " ",
            React.createElement("span", null, date.getFullYear()),
            React.createElement("span", null, "| Todos os direitos resenvados")),
        React.createElement("section", { className: footer_module_css_1["default"].iconTop, id: "#top" },
            React.createElement(link_1["default"], { href: "/", className: footer_module_css_1["default"].ir_top },
                React.createElement(fa_1.FaArrowUp, { size: 20 })))));
};
exports["default"] = Footer;
