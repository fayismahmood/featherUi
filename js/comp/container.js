"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const elems = __importStar(require("./elems/elems"));
class container extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        var label = this.getAttribute("label");
        var html = this.innerHTML;
        var container = elems.container();
        var head = elems.head(label);
        var cont = elems.cont();
        container.appendChild(head);
        container.appendChild(cont);
        cont.innerHTML = html;
        this.innerHTML = "";
        this.appendChild(container);
    }
}
exports.container = container;
