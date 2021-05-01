<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@ page import="forumProject2.Thread" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<%@ include file="templates/libraries.jsp" %>
<head>
<meta charset="ISO-8859-1">
<title>Search Results</title>
</head>
<body class="bg-light" style="padding-top:70px;">
	<%@ include file="templates/header.jsp" %>
	
	<main>
	<%	try{
			List<Thread> results = (ArrayList<Thread>) request.getAttribute("results"); %>
			<div class="d-flex p-2 bg-dark justify-content-center"
			style="opacity: 0.8;">
			<h1 class="text-white">Search Results</h1>
		</div>
		<div class="container-fluid mt-3 float-left">
		<div class="row">
		<div class="col-8">
		<article>
			<table class="table table-hover">
				<thead class="table-secondary">
				
					<tr>
						<th scope="column" class="text-center">Title</th>
						<th scope="column" class="text-center">Creation Date</th>
					</tr>
				</thead>
			<tbody>
				<%for(Thread result : results){%>
				<tr>
					<td class="text-center"><h3><a href="<%= result.getLink() %>"><%= result.getTitle() %></a></h3></td>
					<td class="text-center"><h3><%= result.getDateCreated() %></h3>
				</tr>	
				<%}%>
			</tbody>
			</table>
				</article>
			</div>
		<% }catch(Exception e){ %>
			<div class="d-flex p-2 bg-dark justify-content-center"
					style="opacity: 0.8;">
					<h1 class="text-white">Search Results</h1>
				</div>
		<% }%>
		
	</main>
	
	<%@include file="templates/footer.jsp" %>
	<%@ include file="templates/scripts.jsp" %>
</body>
</html>