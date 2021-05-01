<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
	<head>
		<title>
			Sign Up
		</title>
	</head>
<%@include file="templates/libraries.jsp"%>

<body class="bg-light" style="padding-top: 70px;">
	<%@ include file="templates/header.jsp"%>

	<section>
		<div class="container w-50 h-100">
			<div class="card bg-white" style="margin-top: 100px;">
				<div class="card-header text-center">
					<h2>Sign Up</h2>
				</div>
				<div class="card-body py-3 px-4">
					<form action="signUp" method="POST">
						<div class="container">
							<div class="row">
								<div class="col-sm-6 ">
									<div class="form-group text-center">
										<label for="userName">
											<p class="lead" style="margin-left: 100px;">First Name</p>
										</label> <input class="form-control w-50 ms-auto" type="text"
											name="firstName" placeholder="Enter your first name."
											required>
									</div>
								</div>
								<div class="col-sm-6">
									<div class="form-group text-start">
										<label for="password">
											<p class="lead">Last Name</p>
										</label> <input class="form-control w-50" type="text" name="lastName"
											placeholder="Enter your last name" required>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-sm-6">
									<div class="form-group text-center">
										<label for="dateOfBirth">
											<p class="lead" style="margin-left: 100px;">Date of Birth</p>
										</label> <input class="form-control w-50 ms-auto" type="text"
											name="birthDate" placeholder="dd/mm/yy"
											required>
									</div>
								</div>
								<div class="col-sm-6">
									<div class="form-group text-start">
										<label for="password">
											<p class="lead">Email</p>
										</label> <input class="form-control w-50" type="email" name="email"
											placeholder="Enter your email." required>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-sm-6">
									<div class="form-group text-center">
										<label for="userName">
											<p class="lead" style="margin-left: 100px;">Username</p>
										</label> <input class="form-control w-50 ms-auto" type="text"
											name="userName" placeholder="Enter an username" required>
									</div>
								</div>
								<div class="col-sm-6">
									<div class="form-group text-start">
										<label for="password">
											<p class="lead">Password</p>
										</label> <input class="form-control w-50" type="password"
											name="password" placeholder="Enter Password" required>
									</div>
								</div>
							</div>
							<div class="row">
								<button type="submit"
									class="btn btn-lg btn-outline-primary w-50 mx-auto mt-3">Register</button>
							</div>
						</div>
					</form>

				</div>
				<div class="card-footer text-center mt-3">
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