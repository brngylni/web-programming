<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<%@ include file="templates/libraries.jsp" %>
<head>
<meta charset="ISO-8859-1">
<title>panel</title>
</head>
<body class="bg-light" style="padding-top:70px;">

	<%@ include file="templates/header.jsp" %>
	
	
	<div class="container mt-5 w-50">
		<div class="card text-center">
			<div class="card-header">
				<h4>
					Panel Login
				</h4>
			</div>
			<div class="card-body">
				<form action="admin" method="POST">
					<div class="form-group">
						<label for="username">Username :</label>
						<input type="text" class="form-control" name="username">
					</div>
					<div class="form-group">
						<label for="password">Password :</label>
						<input type="password" class="form-control" name="password">
					</div>
					<button type="submit" class="btn btn-outline-primary btn-lg mt-3">Login</button>
				</form>
			</div>
		</div>
	</div>
	
	
	
	<%@ include file="templates/footer.jsp" %>
	<%@ include file="templates/scripts.jsp" %>
</body>
</html>