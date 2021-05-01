<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@page import="forumProject2.Categorie"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<%@include file="templates/libraries.jsp"%>
<head>
	<title>Categories</title>
<style>
img {
	position: relative;
	top: 50%;
	transform: translateY(-60%);
}
</style>
</head>
<body class="bg-light">
	<%@ include file="templates/header.jsp"%>

	<section style="height: 100%;">
		<div id="carouselExampleSlidesOnly" class="carousel slide"
			data-bs-ride="carousel">
			<div class="carousel-inner" style="height: 400px;">
				<div class="carousel-item active">
					<img src="image.jpg" class="d-block w-100">
				</div>
				<div class="carousel-item">
					<img src="image2.jpg" class="d-block w-100" alt="...">
				</div>
				<div class="carousel-item">
					<img src="image3.webp" class="d-block w-100" alt="...">
				</div>
			</div>
		</div>
	</section>

<% ArrayList<Categorie> categories = (ArrayList<Categorie>)	request.getAttribute("categories");%>

	<section>
		<div class="d-flex p-2 bg-dark justify-content-center"
			style="opacity: 0.8;">
			<h1 class="text-white">Categories</h1>
		</div>
		<div class="container-fluid mt-3 float-left">
		<div class="row">
		<div class="col-8">
		<article>
			<table class="table table-hover">
				<thead class="table-secondary">
					<tr>
						<th scope="column" class="text-center">Title</th>
						<th scope="column" class="text-center">Total Threads</th>
					</tr>
				</thead>
			<tbody>
				<%try {for(Categorie categorie : categories){ %>
					<tr>
						<td class="text-center"><h3><a href="<%=categorie.getLink() %>" class="text-success"><%= categorie.getTitle() %></a></h3></td> 
						<td class="text-center"><h3><%out.print(categorie.getThreads()); %></h3></td>
					</tr>
					<%}}
					 catch(Exception e){
						 e.printStackTrace();
					 }
					%>
			</tbody>
			</table>
				</article>
			</div>
		<div class="col-4">
			<div class="card">
				<div class="card-header text-center">
					<h4 class="text-dark">Search</h4>
				</div>
				<div class="card-body">
				<form action="search" method="GET">
				<div class="form-group">
					<input class="form-control form-control-lg" type="text" name="search" placeholder="Search...">
					</div>
					<div class="text-center">
					<button type="submit" class="btn btn-primary btn-lg">Search</button>
					</div>
					</form>
				</div>
			</div>
		</div>
		</div>
		</div>
	</section>






	<%@ include file="templates/footer.jsp"%>
	<%@ include file="templates/scripts.jsp"%>
</body>
</html>