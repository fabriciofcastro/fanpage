'use client';
"use strict";
exports.__esModule = true;
var io_1 = require("react-icons/io");
var md_1 = require("react-icons/md");
var header_module_css_1 = require("@/pages/header/header.module.css");
var image_1 = require("next/image");
var logo_svg_1 = require("@/assets/logo.svg");
var link_1 = require("next/link");
var react_1 = require("react");
var react_2 = require("@phosphor-icons/react");
var next_themes_1 = require("next-themes");
var Header = function () {
    var _a = react_1.useState(function () { return false; }), isLightDark = _a[0], setIsLightDark = _a[1];
    var _b = react_1.useState(function () { return false; }), isMenu = _b[0], setIsMenu = _b[1];
    var setTheme = next_themes_1.useTheme().setTheme;
    function menuResponviso() {
        setIsMenu(function (menu) { return !menu; });
    }
    function light() {
        setTheme("dark");
        setIsLightDark(function (isLightDark) { return !isLightDark; });
    }
    function dark() {
        setTheme("light");
        setIsLightDark(function (isLightDark) { return !isLightDark; });
    }
    return (React.createElement("header", { className: "" + header_module_css_1["default"].header },
        React.createElement("div", { className: header_module_css_1["default"].logo },
            React.createElement(link_1["default"], { href: "/" },
                React.createElement(image_1["default"], { className: header_module_css_1["default"].logo_image, src: logo_svg_1["default"], alt: 'LOGO POLIGNO' })),
            React.createElement(link_1["default"], { href: "/", className: header_module_css_1["default"].texto_logo }, "Fabr\u00EDcio Castro")),
        React.createElement(io_1.IoIosMenu, { className: " " + header_module_css_1["default"].menu_responsive + " " + (isMenu ? "" : header_module_css_1["default"]['display']) + " ", onClick: menuResponviso }),
        React.createElement("div", { className: header_module_css_1["default"].icontheme },
            React.createElement(react_2.SunDim, { className: header_module_css_1["default"].iconlight + " " + (isLightDark ? header_module_css_1["default"]['visibility'] : header_module_css_1["default"]['hidden']), onClick: dark }),
            React.createElement(react_2.Moon, { className: header_module_css_1["default"].icondark + "  " + (isLightDark ? header_module_css_1["default"]['hidden'] : header_module_css_1["default"]['visibility']), onClick: light })),
        React.createElement("nav", { className: header_module_css_1["default"].tag_nav + " " + (isMenu ? header_module_css_1["default"]['display'] : "") + " " },
            React.createElement(md_1.MdClose, { className: header_module_css_1["default"].menu_close + " " + (isMenu ? header_module_css_1["default"]['display'] : "") + " ", onClick: menuResponviso }),
            React.createElement("ul", { className: header_module_css_1["default"].nav_ul },
                React.createElement("li", null,
                    React.createElement(link_1["default"], { className: header_module_css_1["default"].Link, href: '/' }, "HOME")),
                React.createElement("li", null,
                    React.createElement(link_1["default"], { className: header_module_css_1["default"].Link, href: '/about' }, "SOBRE")),
                React.createElement("li", null,
                    React.createElement(link_1["default"], { className: header_module_css_1["default"].Link, href: '/#skills' }, "SKILLS")),
                React.createElement("li", null,
                    React.createElement(link_1["default"], { className: header_module_css_1["default"].Link, href: '/#portfolio' }, "PORTIFOLIO")),
                React.createElement("li", null,
                    React.createElement(link_1["default"], { className: header_module_css_1["default"].Link, href: '/contact' }, "CONTATO")),
                React.createElement("li", null,
                    React.createElement(link_1["default"], { className: header_module_css_1["default"].Link, href: '/blog' }, "BLOG"))))));
};
exports["default"] = Header;
