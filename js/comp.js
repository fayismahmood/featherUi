"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const textBox_1 = require("./comp/textBox");
const container_1 = require("./comp/container");
const slider_1 = require("./comp/slider");
window.customElements.define("txt-box", textBox_1.textBox);
window.customElements.define("cont-in", container_1.container);
window.customElements.define("slid-in", slider_1.slider);
