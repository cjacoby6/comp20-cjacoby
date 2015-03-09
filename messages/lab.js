function parse() {
	xml = new XMLHttpRequest();

	xml.onreadystatechange = recieveData;

	xml.open("get", "data.json", true);

	xml.send();
}


function recieveData() {
	console.log("In my function " + xml.readyState);
	if (xml.readyState == 4 && xml.status == 200) {
		alert("Got data back!");
		data = JSON.parse(xml.responseText);
		var result = "";
		for (i = 0; i < data.length; i++) {
			result += "<p>" + data[i]['username'] + " - " + data[i]["content"] + "</p>";
		}
		document.getElementById("messages").innerHTML = xml.responseText;
	}
}
