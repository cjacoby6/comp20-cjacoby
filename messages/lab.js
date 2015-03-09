function parse() {
	xml = new XMLHttpRequest();

	xml.onreadystatechange = recieveData;

	xml.open("get", "data.json", true);

	xml.send();
}


function recieveData() {
	console.log("In my function " + xml.readyState);
	data = JSON.parse(xml.responseText);
	var result = "";
	console.log(data);
	for (i = 0; i < data.length; i++) {
		console.log("part" + i);
		result += "<p>" + data[i].content + " " + data[i].username + "</p>";
	}
	document.getElementById("messages").innerHTML = result;
}
