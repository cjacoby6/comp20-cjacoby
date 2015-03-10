function parse() {
	xml = new XMLHttpRequest();

	xml.onreadystatechange = recieveData;

	xml.open("get", "http://messagehub.herokuapp.com/messages.json", true);

	xml.send();
}


function recieveData() {
	data = JSON.parse(xml.responseText);
	var result = "";
	for (i = 0; i < data.length; i++) {
		result += "<p>" + data[i].content + " " + data[i].username + "</p>";
	}
	document.getElementById("messages").innerHTML = result;
}
