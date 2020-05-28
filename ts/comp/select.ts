import * as elems from "./elems/elems"
import {Elm, FormElm } from "./funcs";



class select extends HTMLElement {
	
	constructor() {
		super();
	}
	public input: any;
	public mes: any;
	public cover: any;
	public opt_area: any;

	get value(){
		return this.input.value+this.mes.textContent;
	}

	public _click=(e:any)=>{
		this.cover.appendChild(this.opt_area)
	}

	public _docClick=(e:Event)=>{

		if (e.target!==this){
			this.opt_area.remove()
		} 
	}


	connectedCallback() {
		var label = this.getAttribute("label");
		var val = this.getAttribute("val");
		var html = this.innerHTML;

		

		var cover = Elm("div");
		this.cover = cover;
		cover.classList.add("selectBox");

		var labelBox=Elm("label")

		var selectCont = Elm("div");
		selectCont.classList.add("selectContainer");

		var selectInput = FormElm("input");
		selectInput.setAttribute("type", "text");

		var opt_area = Elm("div");
		opt_area.classList.add("opt_area")
		opt_area.innerHTML = html;
		this.opt_area = opt_area;

		cover.appendChild(labelBox);
		labelBox.textContent = label;
		cover.appendChild(selectCont);
		selectCont.appendChild(selectInput);
		selectInput.value = val;
		this.input = selectInput;

		var style = `
						*{
							box-sizing: border-box;
             			}
            			:host{
							display:block;
						}
						.opt_area{
							position:absolute;
							background: white;
							width: 100%;
							left: 0;
							padding: 10px;
							box-shadow: 0 5px 5px -5px #271c3e;

						}
						.selectBox {
						  position: relative;
						  border-radius: 5px;
						  width: 100%;
						  background: white;
						  padding: 10px;
						  box-shadow: #271c3e 0 8px 20px -8px;
						}
						.selectBox .selectContainer {
						  display: flex;
						  flex-direction: row;
						  justify-content: space-between;
						}
						.selectBox .selectContainer input {
						  border: solid .5px #271c3e;
						  background: white;
						  color: #271c3e;
						  box-sizing: border-box;
						  padding: 5px;
						  width: 100%;
						}
						.selectBox .selectContainer div {
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
						.selectBox .selectContainer div:hover {
						  background-color: #271c3e;
						  color: white;
						  transition: 0.3s;
						}
						.selectBox label {
						  color: white;
						  background: #271c3e;
						  height: max-content;
						  font-size: 10px;
						  text-transform: uppercase;
						  position: absolute;
						  top: -5px;
						}
						.selectBox:hover {
						  background: #e7e6ec;
						  box-shadow: #271c3e 0 8px 10px -8px inset, white 0 -8px 10px 0px inset;
						  transition: 0.3s;
						}
						`
		
		var stylEl= cover.appendChild(Elm("style"));
		stylEl.innerHTML=style


		selectInput.onclick = this._click;
		document.onclick = this._docClick;

		var shadow=this.attachShadow({ mode: "open" });
		shadow.appendChild(cover);
		
	}
}


export{select}