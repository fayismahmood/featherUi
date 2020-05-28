"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./elems.css");
function Elm(el) {
    return document.createElement(el);
}
function FormElm(el) {
    return document.createElement(el);
}
/////div
var div = Elm('div');
////////textInput
function txt_input() {
    var input = FormElm('input');
    input.setAttribute("type", "text");
    return input;
}
exports.txt_input = txt_input;
function num_input() {
    var input = FormElm('input');
    input.setAttribute("type", "number");
    return input;
}
/////////////////cover
function cover() {
    var div = Elm('div');
    div.classList.add("cover");
    return div;
}
exports.cover = cover;
function label(lab) {
    var label = Elm('label');
    label.innerHTML = lab;
    return label;
}
exports.label = label;
//////////////container
function container() {
    var div = Elm('div');
    div.classList.add("container");
    return div;
}
exports.container = container;
///////////head
function head(heading) {
    var head = Elm('div');
    head.classList.add('head');
    var head_text = head.appendChild(Elm('div'));
    head_text.innerHTML = heading;
    return head;
}
exports.head = head;
///////////////content
function cont() {
    var div = Elm("div");
    div.classList.add("cont");
    return div;
}
exports.cont = cont;
