import * as elems from "./elems/elems"

function Elm(el: any) {
	return <HTMLElement>document.createElement(el);
}

function FormElm(el: any) {
	return <HTMLFormElement>document.createElement(el);
}




class textBox extends HTMLElement {
	
	constructor() {
		super();
	}
	public input: any;
	public mes: any;
	get value(){
		return this.input.value+this.mes.textContent;
	}

	connectedCallback() {
		var label = this.getAttribute("label");
		var val = this.getAttribute("val");
		var instyle: any=this.getAttribute("instyle"); 


		

		var cover=Elm("div")
		cover.classList.add("textBox");
		cover.setAttribute("style", instyle);

		var labelBox=Elm("label")

		var textCont = Elm("div");
		textCont.classList.add("textContainer");

		var textInput = FormElm("input");
		textInput.setAttribute("type", "number");
		var mes = Elm("div");
		mes.textContent="px"
		this.mes = mes;

		cover.appendChild(labelBox);
		labelBox.textContent = label;
		cover.appendChild(textCont);
		textCont.appendChild(textInput);
		textInput.value = val;
		textCont.appendChild(mes);
		this.input = textInput;

		var style = `.textBox {
						  margin: 10px;
						  position: relative;
						  border-radius: 5px;
						  width: max-content;
						  background: white;
						  padding: 10px;
						  box-shadow: #271c3e 0 8px 20px -8px;
						}
						.textBox .textContainer {
						  display: flex;
						  flex-direction: row;
						  justify-content: space-between;
						}
						.textBox .textContainer input {
						  border: none;
						  background: none;
						  width: 80%;
						}
						.textBox .textContainer div {
						  display: table;
						  padding: 3px;
						  margin: 0;
						  text-transform: uppercase;
						  font-size: 10px;
						  height: 100%;
						  border: solid 1px #271c3e;
						  color: #271c3e;
						  background: none;
						  border-radius: 5px;
						  width: max-content;
						}
						.textBox .textContainer div:hover {
						  background-color: #271c3e;
						  color: white;
						  transition: 0.3s;
						}
						.textBox label {
						  color: white;
						  background: #271c3e;
						  height: max-content;
						  font-size: 10px;
						  text-transform: uppercase;
						  position: absolute;
						  top: -5px;
						}
						.textBox:hover {
						  background: #e7e6ec;
						  box-shadow: #271c3e 0 8px 10px -8px inset, white 0 -8px 10px 0px inset;
						  transition: 0.3s;
						}
						`
		
		var stylEl= cover.appendChild(Elm("style"));
		stylEl.innerHTML=style

		var shadow=this.attachShadow({ mode: "closed" });
		shadow.appendChild(cover);
		
	}
}


export{textBox}