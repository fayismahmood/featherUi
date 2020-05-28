import "./elems.css";

function Elm(el:any) {
	return <HTMLElement>document.createElement(el);
}

function FormElm(el: any) {
	return <HTMLFormElement>document.createElement(el);
}

/////div
var div = Elm('div')
////////textInput
function txt_input(){
	var input = FormElm('input')
	input.setAttribute("type", "text");
	return input;
}
function num_input() {
	var input = FormElm('input')
	input.setAttribute("type", "number");
	return input;
}
/////////////////cover
function cover() {
	var div = Elm('div')
	div.classList.add("cover");
	return div;
}
function label(lab:any) {
	var label = Elm('label')
	label.innerHTML=lab
	return label;
}
//////////////container
function container(){
	var div = Elm('div');
	div.classList.add("container")
	return div
}

///////////head
function head(heading:any){

	var head = Elm('div');
	head.classList.add('head')
	var head_text = <HTMLElement>head.appendChild(Elm('div'));
	head_text.innerHTML=heading
	return head;
}
///////////////content
function cont(){
	var div = Elm("div");
	div.classList.add("cont")
	return div
}



export{txt_input,container,head,cont,cover,label}