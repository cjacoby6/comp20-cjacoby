function parse() {
	messages = new XMLHttpRequest();

	messages.open("get", "data.json", true);

	messages.onreadystatechange = recieveData;

	messages.send();

	function recieveData() {
		console.log("In my function " + messages.readyState);
		if (messages.readyState == 4 && messages.status == 200) {
			alert("Got data back!");
			data = JSON.parse(messages.responseText);
			var result = "";
			for (i = 0; i < data.length; i++) {
				result += "<p>" + data[i]['username'] + " - " + data[i]["content"] + "</p>";
			}
			document.getElementById("messages").innerHTML = messages.responseText;
		}
	}
}