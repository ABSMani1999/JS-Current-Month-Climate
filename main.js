	
//2.Get current month and find(winter, fall, summer)
	var i=new Date();
	var month=i.getMonth();
	if(month<3 && 0<=month){
		document.write('Winter');
	}
	else if(month<7 && 3<month){
		document.write('Fall');
	}
	else{
		document.write('summer');
	}
	document.write("<br>");