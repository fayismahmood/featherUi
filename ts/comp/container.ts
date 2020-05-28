import * as elems from "./elems/elems"

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
		cont.innerHTML=html



		this.innerHTML = "";
		this.appendChild(container);
		
	}
}


export{container}