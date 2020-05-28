function Elm(el: any) {
	return <HTMLElement>document.createElement(el);
}

function FormElm(el: any) {
	return <HTMLFormElement>document.createElement(el);
}

function toPer(total:number, wa:number) {
	var oneP = total / 100;
	return wa / oneP
}
function fromPer(total: number, wa: number) {
	var oneP = total / 100;
	return wa * oneP
}

export{Elm,FormElm,toPer,fromPer}