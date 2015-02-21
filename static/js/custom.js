function checkSubmit(e) {
	if(e && e.keyCode == 13) {
		return true;
	}
	return false;
}
function autoscroll(div) {
	var objDiv = document.getElementById(div);
	objDiv.scrollTop = objDiv.scrollHeight;
}
function ajaxCall(url, div, text) {
	var xmlhttp;
	if (window.XMLHttpRequest) xmlhttp=new XMLHttpRequest();
	else xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			document.getElementById(div).innerHTML+=("lol3:<br/>"+xmlhttp.responseText+"</br>");
			autoscroll(div);
		}
	}
	xmlhttp.open("POST",url,true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("data="+text);
}
function botme() {
	var text=document.getElementById('divData').value;
	document.getElementById('divData').value="";
	document.getElementById('divChat').innerHTML+=("You:<br/>"+text+"<br/>");
	ajaxCall("request","divChat",text);
}
