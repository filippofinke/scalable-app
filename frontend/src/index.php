<!-- @author Filippo Finke -->
<!DOCTYPE html>
<html>
<head>
	<title>Simple app</title>
</head>
<body>
	<h1>Simple app - Test </h1>
	<hr>
	<h2>Frontend ID: <b><?php echo gethostname(); ?></b></h2>
	<h2>Backend ID: <b id="container">loading...</b></h2>
	<h3 id="message">Loading...</h3>
	<script type="text/javascript">
		window.onload = function() {
			console.log("Window loaded!");
			var xmlHttp = new XMLHttpRequest();

		    xmlHttp.onreadystatechange = function() {
		        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
								var object = JSON.parse(xmlHttp.responseText);
		            document.getElementById("container").innerHTML = object.hostname;
								document.getElementById("message").innerHTML = object.message;
		    }
		    xmlHttp.open("GET", "http://127.0.0.1:8080", true);
		    xmlHttp.send(null);
		}
	</script>
</body>
</html>
