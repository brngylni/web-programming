<%@ page language="java" contentType="text/html; charset=ISO-8859-1"%>
<!DOCTYPE html>
<header>
	<nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top ">
		<div class="container py-2 w-100">
			<div class="navbar-header">
				<i class="fas fa-robot fa-2x bg-light mx-auto"></i> <a
					href="/forum/" class="navbar-brand mx-auto">Forum</a>
			</div>
			<button class="navbar-toggler" type="button"
				data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div id="navbarCollapse" class="collapse navbar-collapse">
				<ul class="navbar-nav ms-auto">
					<li class="nav-item">
						<% if(request.getRequestURI().equals("/forum/") || request.getRequestURI().equals("/forumProject/index.jsp")){%>
						<a href="" class="nav-link active">Home</a> <%}else{%> <a
						href="/forum/" class="nav-link">Home</a> <%} %>
					</li>
					<li class="nav-item">
						<% if(request.getRequestURI().equals("/forum/categories.jsp")){%> <a
						href="categories" class="nav-link active">Categories</a> <%}else{%>
						<a href="categories" class="nav-link">Categories</a> <%} %>
					
					<li class="nav-item">
						<% if(request.getRequestURI().equals("/forum/about.jsp")){%> <a
						href="about.jsp" class="nav-link active">About</a> <%}else{%> <a
						href="about.jsp" class="nav-link">About</a> <%} %>
					</li>
					<%
						boolean auth;
					try{
		 				auth = (boolean) session.getAttribute("auth");
					}catch(Exception e){
						auth = false;
					}
		 			if(auth != true){
		 		%>
					<li class="nav-item">
						<%if(request.getRequestURI().equals("/forum/login.jsp")){%> <a
						href="login.jsp" class="nav-link active">Login</a> <%}else{%> <a
						href="login.jsp" class="nav-link">Login</a> <%}%>
					</li>
					<%}else{ %>
					<li class="nav-item">
					 <a href="logout" class="nav-link active">Logout</a> 
					</li>
					<%} %>
				</ul>
			</div>
		</div>
	</nav>
</header>