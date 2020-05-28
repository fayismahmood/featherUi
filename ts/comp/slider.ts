import * as elems from "./elems/elems"
import {toPer,fromPer,Elm,FormElm} from "./funcs";




class slider extends HTMLElement {
	
	constructor() {
		super();
	}

	public mes:any;
	public trig: any;
	public path:any;

	get value(){
		var tot = Number(this.getAttribute("max")) - Number(this.getAttribute("min"));
		return Number(this.getAttribute("min"))+Math.round(fromPer(tot, Math.round(this.mes)));;
	}
	set value(value){
		var min = Number(this.getAttribute("min"));
		var max = Number(this.getAttribute("max"));
		if((value>=min)&&(value<=max)){
			var InValue = toPer(max - min, value - min)
			this.trig.style.left = "calc(" + InValue + "% - 5px)";
			this.path.style.width = "calc(" + InValue + "% - 5px)";
		}else{
			console.error("enter a possible value")
		}
		
		
	}

	
	connectedCallback() {
		var label = this.getAttribute("label");
		var val = this.getAttribute("val");
		var min = this.getAttribute("min");
		var max = this.getAttribute("max");
		var instyle:any = this.getAttribute("instyle"); 
		//this.value = val;

		var cover=Elm("div")
		cover.classList.add("textBox");
		cover.setAttribute("style", instyle);

		var labelBox=Elm("label")

		var rangeContainer = Elm("div");
		rangeContainer.classList.add("rangeContainer");


		var range = Elm("div");
		range.classList.add("range")

		var trig = Elm("div");
		trig.classList.add("trigger");
		this.trig=trig

		var path = Elm("div");
		path.classList.add("edPath");
		this.path = path;
	
		cover.appendChild(labelBox);
		labelBox.textContent = label;
		cover.appendChild(rangeContainer);

		rangeContainer.appendChild(range);
		range.appendChild(trig);
		range.appendChild(path)

		//initialValueSetting
		var InValue=toPer(Number(max)-Number(min),Number(val)-Number(min))
		trig.style.left = InValue + "px";
		path.style.width = InValue + "px";



	

		var style = `
						.textBox {
						  margin: 10px;
						  position: relative;
						  border-radius: 5px;
						  width: max-content;
						  background: white;
						  padding: 10px;
						  box-shadow: #271c3e 0 8px 20px -8px;
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
						.rangeContainer {
						  padding: 10px 0;
						}
						.rangeContainer .range {
						  display: flex;
						  position: relative;
						  width: 100%;
						  height: 5px;
						  background: #e7e6ec;
						  box-shadow: white 0 0 5px 5px;
						}
						.rangeContainer .range .trigger {
						  position: absolute;
						  height: 10px;
						  width: 10px;
						  border-radius: 50%;
						  background: #271c3e;
						  top: -2.5px;
						  z-index: 5;
						}
						.rangeContainer .range .trigger:hover {
						  border: #bb87ae 3px solid;
						  top: -4px;
						  box-sizing: content-box;
						  transition: 0.1s;
						}
						.rangeContainer .range .edPath {
						  position: absolute;
						  height: 5px;
						  background: #271c3e;
						  z-index: 0;
						}
						`
		
		var stylEl= cover.appendChild(Elm("style"));
		stylEl.innerHTML=style

		var shadow=this.attachShadow({ mode: "closed" });
		shadow.appendChild(cover);







		var rangeWidth = window.getComputedStyle(range).width
		var mouseX, mouseY;
		var elLeft: any;
		var elTop;
		var trigged = false;

		trig.onmousedown = (e)=>{
			mouseX = e.pageX;
			mouseY = e.pageY;
			elLeft = range.getBoundingClientRect().left;
			elTop = range.getBoundingClientRect().top;
			trigged = true
			//console.log(mouseX, mouseY)
		}


		range.onmousedown = (e)=> {
			var mouseX = e.pageX;
			var mouseY = e.pageY;
			var elLeft = range.getBoundingClientRect().left;
			var elTop = range.getBoundingClientRect().top;

			var _width = Number(rangeWidth.replace("px", ""))
			var mes = toPer(_width, e.clientX - elLeft);
			
			if (mes >= 0 && mes < 101) {
				this.mes = mes
				trig.style.left = "calc(" + Math.round(mes) + "% - 5px)";
				path.style.width = "calc(" + Math.round(mes) + "% - 5px)";				
			}
		}


		document.onmouseup = function() {
			trigged = false;
		}

		document.onmousemove = (e)=> {
			if (trigged) {
				

				var _width = Number(rangeWidth.replace("px", ""))
				var mes = toPer(_width, e.clientX - elLeft)
				//console.log(mes, _width)
				if (mes >= 0 && mes <= 101) {
					this.mes = mes
					trig.style.left = "calc(" + Math.round(mes) + "% - 5px)";
					path.style.width = "calc(" + Math.round(mes) + "% - 5px)";
				}

			}
		}
		
	}
}


export{slider}