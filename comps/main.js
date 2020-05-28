function sl(sl){
	return document.querySelector(sl);
}

function toPer(total,wa){
	var oneP = total / 100;
	return wa/oneP
}




window.onload=function(){
//////////range
	var range=sl(".rangeContainer>.range");
	var trig=range.querySelector(".trigger");
	var path=range.querySelector(".edPath");

	var rangeWidth = window.getComputedStyle(range).width

	var mouseX,mouseY,elLeft,elTop
	var trigged = false;

	trig.onmousedown=function(e){
		mouseX = e.pageX;
		mouseY = e.pageY;
		elLeft = range.getBoundingClientRect().left;
		elTop = range.getBoundingClientRect().top;
		trigged=true
		console.log(mouseX,mouseY)
	}


	range.onmousedown=function(e){
		var mouseX = e.pageX;
		var mouseY = e.pageY;
		var elLeft = range.getBoundingClientRect().left;
		var elTop = range.getBoundingClientRect().top;

		_width = Number(rangeWidth.replace("px", ""))
		var mes = toPer(_width, e.clientX - elLeft)
		if (mes >= 0 && mes <= 100) {
			trig.style.left = "calc(" + mes + "% - 5px)";
			path.style.width = "calc(" + mes + "% - 5px)";
		}
	}


	document.onmouseup=function(){
		trigged = false;
	}

	document.onmousemove = function(e) {
		if (trigged) { 

				_width = Number(rangeWidth.replace("px",""))
				var mes = toPer(_width, e.clientX - elLeft)
					if(mes>=0 && mes<=100){
						trig.style.left = "calc(" + mes + "% - 5px)";
						path.style.width = "calc(" + mes + "% - 5px)";
					}
				
		}
	}



}