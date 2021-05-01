<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<%@ include file="templates/libraries.jsp"%>
<head>
	<title>About</title>
</head>
<body class="bg-light" style="padding-top: 70px;">

	<%@ include file="templates/header.jsp"%>

	<section>
		<div class="d-flex justify-content-center">
			<div class="card w-75 p-0" style="height: 300px; margin-top: 80px;">
				<div class="card-header mx-0 text-center">
					<h1>About Designer</h1>
				</div>
				<div class="card-body mx-0 text-center mt-3 py-3">
					<p class="lead">Hi, my name is Mehmet. I am a CS student from
						Turkey.Here is some links to contact me.</p>
					<a href="" type="button" class="btn btn-lg btn-primary active">Twitter</a>
					<a href="" type="button" class="btn btn-lg btn-primary active">LinkedIn</a>
				</div>
				<div class="card-footer text-center">
					<p class="text-muted">Mehmet Geylani</p>
				</div>
			</div>
		</div>
	</section>


	<%@ include file="templates/footer.jsp"%>
	<%@ include file="templates/scripts.jsp"%>
</body>
</html>