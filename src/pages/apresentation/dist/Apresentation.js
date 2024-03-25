"use strict";
exports.__esModule = true;
var apresentation_module_css_1 = require("@/pages/apresentation/apresentation.module.css");
var fabricio_png_1 = require("@/assets/fabricio.png");
var image_1 = require("next/image");
var md_1 = require("react-icons/md");
var fa6_1 = require("react-icons/fa6");
var link_1 = require("next/link");
var Apresentation = function () {
    return (React.createElement("div", { className: apresentation_module_css_1["default"].container, id: "top" },
        React.createElement("section", { className: apresentation_module_css_1["default"].saltation_text },
            React.createElement("div", { className: apresentation_module_css_1["default"].text },
                React.createElement("h5", null, "Ol\u00E1!"),
                React.createElement("h1", { "data-text": "EU SOU" }, "EU SOU "),
                React.createElement("h1", { "data-text": "DESENVOLVEDOR" }, "DESENVOLVEDOR"),
                React.createElement("h1", { "data-text": "FRONT-END" }, " FRONT-END"),
                React.createElement("p", null, "Seja bem-vindo ao meu website")),
            React.createElement("section", { className: apresentation_module_css_1["default"].down_btn },
                React.createElement(link_1["default"], { href: "/cv_fabricio.pdf", target: "_blank", passHref: true, className: apresentation_module_css_1["default"].down_cv },
                    "Download CV",
                    React.createElement(md_1.MdDownload, null)),
                React.createElement(link_1["default"], { href: "/about", className: apresentation_module_css_1["default"].button, type: 'button' }, "Saiba mais")),
            React.createElement("section", { className: apresentation_module_css_1["default"].social },
                React.createElement(link_1["default"], { className: apresentation_module_css_1["default"].social_icon, href: 'https://www.linkedin.com/in/fabriciofcastro/', target: '_blank' },
                    " ",
                    React.createElement(fa6_1.FaLinkedin, null)),
                React.createElement(link_1["default"], { className: apresentation_module_css_1["default"].social_icon, href: 'https://github.com/fabriciofcastro', target: '_blank' },
                    " ",
                    React.createElement(fa6_1.FaGithub, null)))),
        React.createElement("section", { className: apresentation_module_css_1["default"].foto },
            React.createElement(image_1["default"], { src: fabricio_png_1["default"], alt: 'Imagem do desenvolvedor', className: apresentation_module_css_1["default"].image_dev }))));
};
exports["default"] = Apresentation;
