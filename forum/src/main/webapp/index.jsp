<%@ page language="java" contentType="text/html; charset=ISO-8859-1"%>
<!DOCTYPE html>
<html>
<%@ include file="templates/libraries.jsp"%>
<head><title>Welcome!</title></head>
<body class="bg-light">

	<%@ include file="templates/header.jsp"%>

	<section style="margin-top: 6rem;">
		<%@ include file="templates/tables.jsp"%>
	</section>
	<section class="mt-5">
		<div class="container" style="height: 300px;">
			<div class="card text-center h-100">
				<div class="card-img-overlay mt-5 text-white">
					<h5 class="card-title">Still not Registered?</h5>
					<p class="card-text">Click to button below to go to register
						page.</p>
					<a href="register.jsp" class="btn btn-lg btn-primary active">Register</a>
				</div>
				<img class="card-img h-100 w-100" src="43.webp">
			</div>
		</div>
	</section>
	<%@ include file="templates/footer.jsp"%>
	<%@ include file="templates/scripts.jsp"%>
</body>
</html>