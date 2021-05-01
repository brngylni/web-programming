<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<%@include file="templates/libraries.jsp"%>
<head>
	<title>
		Sign In
	</title>
</head>
<body class="bg-light" style="padding-top: 70px;">
	<%@ include file="templates/header.jsp"%>

	<section>
		<div class="container-sm w-50 h-100">
			<div class="card bg-white" style="margin-top: 100px;">
				<div class="card-header text-center">
					<h2>Sign In</h2>
				</div>
				<div class="card-body py-3 px-4">
					<form action="auth" method="POST">
						<div class="form-group text-center">
							<label for="userName">
								<p class="lead">Username</p>
							</label> <input class="form-control w-50 mx-auto" type="text"
								name="userName" placeholder="Enter Username" required>
						</div>
						<div class="form-group text-center">
							<label for="password">
								<p class="lead">Password</p>
							</label> <input class="form-control w-50 mx-auto" type="password"
								name="password" placeholder="Enter Password" required>
						</div>
						<div class="text-center">
							<button type="submit" class="btn btn-lg btn-outline-success mt-3">Login</button>
						</div>
					</form>
				</div>
				<div class="card-footer text-center">
					<p class="text-muted">
						Not a member? Click <a href="register.jsp">here</a> to register.
					</p>
				</div>
			</div>
		</div>
	</section>

	<%@ include file="templates/footer.jsp"%>
	<%@ include file="templates/scripts.jsp"%>

</body>
</html>