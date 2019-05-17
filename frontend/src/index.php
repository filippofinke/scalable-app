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
	<script type="text/javascript">
		window.onload = function() {
			console.log("Window loaded!");
			var xmlHttp = new XMLHttpRequest();

		    xmlHttp.onreadystatechange = function() {
		        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
		            document.getElementById("container").innerHTML = xmlHttp.responseText;
		    }
		    xmlHttp.open("GET", "http://127.0.0.1:8080", true);
		    xmlHttp.send(null);
		}
	</script>
</body>
</html>
