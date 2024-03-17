'use client';
"use strict";
exports.__esModule = true;
var minhasTechs_module_css_1 = require("@/pages/minhasTechs/minhasTechs.module.css");
var image_1 = require("next/image");
var logo_svg_1 = require("@/assets/logo.svg");
var techs_1 = require("../../components/items/techs");
var MyTechs = function () {
    return (React.createElement("div", { className: minhasTechs_module_css_1["default"].container, id: "skills" },
        React.createElement("section", { className: minhasTechs_module_css_1["default"].header_skills },
            React.createElement("div", { className: minhasTechs_module_css_1["default"].skills_logo },
                React.createElement(image_1["default"], { src: logo_svg_1["default"], alt: 'Logo poligno' }),
                React.createElement("h1", { className: minhasTechs_module_css_1["default"].hardSkill },
                    React.createElement("span", { className: minhasTechs_module_css_1["default"].hard }, "Hard"),
                    "Skill")),
            React.createElement("p", null, "Aqui est\u00E1 algumas das minhas compet\u00EAncias")),
        React.createElement("section", { className: minhasTechs_module_css_1["default"].techs }, techs_1["default"].map(function (tech, index) {
            return (React.createElement("div", { className: minhasTechs_module_css_1["default"].contentTechs, key: index },
                React.createElement("span", { className: minhasTechs_module_css_1["default"].title_stacks }, tech.tech),
                React.createElement(image_1["default"], { src: tech.image, alt: 'Imagens que ilustra n\u00EDvel de compet\u00EAncia de hard skill' })));
        }))));
};
exports["default"] = MyTechs;
