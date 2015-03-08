messages = new XMLHttpRequest();

messages.open("get", "data.json", true);

messages.onreadystatechange = recieveData;

messages.send();

function recieveData() {
	console.log("In my function " + xhr.readyState);
	if (xhr.readyState == 4 && xhr.status == 200) {
		alert("Got data back!");
		data = JSON.parse(messages.responseText);
		var result = "";
		for (i = 0; i < data.length; i++) {
			result += "<p>" + data[i]['username'] + " - " + data[i]["content"] + "</p>";
		}
		document.getElementById("messages").innerHTML = xhr.responseText;
	}
}