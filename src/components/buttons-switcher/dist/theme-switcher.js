'use client';
"use strict";
exports.__esModule = true;
var next_themes_1 = require("next-themes");
var react_1 = require("react");
var ThemeSwitcher = function () {
    var setTheme = next_themes_1.useTheme().setTheme;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("button", { onClick: function () { return setTheme("light"); } }, "Light"),
        react_1["default"].createElement("button", { onClick: function () { return setTheme("dark"); } }, "Dark")));
};
exports["default"] = ThemeSwitcher;
