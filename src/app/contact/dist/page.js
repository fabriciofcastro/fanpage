"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var contact_module_css_1 = require("./contact.module.css");
exports.metadata = {
    title: "Contato",
    description: "Deixe seu contato com uma breve descrição do assunto"
};
var Contact = function () {
    return (React.createElement("section", { className: contact_module_css_1["default"].contact },
        React.createElement("h2", null, "Contato"),
        React.createElement("form", { method: "POST", action: "https://formsubmit.co/fabriciofeitosacastro@gmail.com", className: contact_module_css_1["default"].form },
            React.createElement("input", { type: "hidden", name: "_next", value: "https://www.fabriciofcastro.com.br/contact/sucesso" }),
            React.createElement("input", { type: "hidden", name: "_autoresponse", value: "Recebi sua menssagem em breve retornarei" }),
            React.createElement("div", { className: contact_module_css_1["default"].input_box },
                React.createElement("label", { htmlFor: "nome" }, "Nome completo"),
                React.createElement("input", { type: "text", name: "nome", placeholder: 'Nome completo', id: "nome", required: true }),
                React.createElement("label", { htmlFor: "email" }, " E-mail "),
                React.createElement("input", { type: "email", name: "email", placeholder: 'Endere\u00E7o de e-mail', id: "email", required: true })),
            React.createElement("div", { className: contact_module_css_1["default"].input_box },
                React.createElement("label", { htmlFor: "telefone" }, " Telefone "),
                React.createElement("input", { type: "tel", name: "telefone", placeholder: 'Numero de contato', id: "telefone", required: true }),
                React.createElement("label", { htmlFor: "assunto" }, " Assunto da mensagem "),
                React.createElement("input", { type: "text", name: "assunto", placeholder: 'Assunto', id: "assunto", required: true })),
            React.createElement("label", { htmlFor: "mensagem" }, " Deixe sua mensagem "),
            React.createElement("textarea", { name: "", id: "mensagem", cols: 20, rows: 10, placeholder: 'Descreva sua mensagem' }),
            React.createElement("input", { type: "submit", value: "Enviar mensagem", className: contact_module_css_1["default"].btn }))));
};
exports["default"] = Contact;
