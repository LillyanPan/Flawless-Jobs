var glassdoor = function() {
	var xmlhttp = new XMLHttpRequest();

	var url = "http://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=61352&t.k=h9W7kiZeQq7&action=employers&e=Google&userip=157.130.6.242&useragent=Mozilla/%2F5.0"
	xmlhttp.open("GET", url, true);

//	xmlhttp.setRequestHeader('Access-Control-Allow-Origin', '*')

	console.log('glassdoor called')

	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.status == 200) {
	    	//console.log(xmlhttp.responseText);
			/* GET Successful, parse data into JSON object */
			var response = JSON.parse(xmlhttp.responseText || "null")
			if (response != null) {
			    if (response["success"] == true) {
			    	// gets first job result for google
					var job  = response["response"].employers[0].featuredReview["jobTitle"];
					console.log(job);
			    }
			    if (response["success"] == false) {
			    	/* GET Successful, but access denied error */
				var message = "Requests throttled by Glassdoor. Try again in a few minutes";
			    console.log(message)
			    }
			}
	    } else {
			/* GET Unsuccessful */
			var message = "Could not contact Glassdoor servers"
			console.log(message)
	    }
	};
	xmlhttp.send();
}