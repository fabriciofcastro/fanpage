"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var image_1 = require("next/image");
var about_module_css_1 = require("./about.module.css");
var fabricio2_png_1 = require("@/assets/fabricio2.png");
var ssr_1 = require("@phosphor-icons/react/dist/ssr");
exports.metadata = {
    description: "descrição about",
    title: "Sobre"
};
var Page = function () {
    return (React.createElement("section", { className: about_module_css_1["default"].about },
        React.createElement("section", { className: about_module_css_1["default"].about_img },
            React.createElement("div", { className: about_module_css_1["default"].container_image },
                React.createElement(image_1["default"], { src: fabricio2_png_1["default"], alt: "Imagem do Fabr\u00EDcio desenvolvedor", className: about_module_css_1["default"].image_dev })),
            React.createElement("div", { className: about_module_css_1["default"].icon_social },
                React.createElement(ssr_1.GithubLogo, null),
                React.createElement(ssr_1.LinkedinLogo, null),
                React.createElement(ssr_1.MicrosoftOutlookLogo, null),
                React.createElement(ssr_1.WhatsappLogo, null))),
        React.createElement("section", { className: about_module_css_1["default"].about_content },
            React.createElement("h2", { className: about_module_css_1["default"].heading },
                " SOBRE ",
                React.createElement("span", null, "MIN"),
                "  "),
            React.createElement("h3", null, "Front-end developer "),
            React.createElement("p", null, "Sou um entusiasta apaixonado pelo mundo do desenvolvimento front-end. Desde que entrei em contato com a magia da cria\u00E7\u00E3o de interfaces digitais, tenho buscado incansavelmente aprimorar minhas habilidades e conhecimentos nesta \u00E1rea  emocionante al\u00E9m proporcionar conhecimentos paralelos."),
            React.createElement("p", null, "Minha jornada come\u00E7ou com um fasc\u00EDnio pelo design e pela interatividade dos sites que eu visitava, o que me levou a explorar o universo do desenvolvimento web. Desde ent\u00E3o, mergulhei de cabe\u00E7a em aprender as linguagens fundamentais, como HTML, CSS e JavaScript, Reactjs, Nextjs absorvendo tudo o que podia por meio de cursos online, projetos pessoais e experi\u00EAncias pr\u00E1ticas."),
            React.createElement("p", null, "Al\u00E9m das habilidades t\u00E9cnicas, tamb\u00E9m valorizo muito a colabora\u00E7\u00E3o e a comunica\u00E7\u00E3o eficaz. Acredito que o trabalho em equipe \u00E9 essencial para o sucesso de qualquer projeto, e estou sempre disposto a contribuir com ideias e solu\u00E7\u00F5es criativas para alcan\u00E7ar os objetivos da equipe."),
            React.createElement("p", null, "Estou animado com a oportunidade de aplicar minhas habilidades e conhecimentos em um ambiente profissional, onde posso contribuir para projetos desafiadores e fazer parte de uma equipe que compartilha minha paix\u00E3o pela cria\u00E7\u00E3o de experi\u00EAncias digitais excepcionais."),
            React.createElement("p", null, "Se voc\u00EA est\u00E1 em busca de um desenvolvedor front-end dedicado, motivado e pronto para enfrentar novos desafios, adoraria ter a oportunidade de conversar mais sobre como posso contribuir para o sucesso da sua equipe."))));
};
exports["default"] = Page;
