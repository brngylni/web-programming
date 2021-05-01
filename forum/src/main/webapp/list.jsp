<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="forumProject2.Thread"%>
<!DOCTYPE html>
<html>
<%@ include file="templates/libraries.jsp" %>
<%
	List<Thread> list = (ArrayList<Thread>) request.getAttribute("list");
	String categorie  = (String) request.getAttribute("cat");
%>
<head>
<meta charset="ISO-8859-1">
<title><%= categorie %></title>
</head>
<body class="bg-light" style="padding-top:70px;">
	<%@ include file="templates/header.jsp" %>
	
	<main>
		<div class="d-flex p-2 bg-dark justify-content-center"
			style="opacity: 0.8;">
			<h1 class="text-white"><%=categorie %></h1>
		</div>
		<div class="container mt-5">
		<article>
			<table class="table table-hover">
				<thead class="table-secondary">
					<tr>
						<th scope="column" class="text-center">Title</th>
						<th scope="column" class="text-center">Date Created</th>
					</tr>
				</thead>
			<tbody>
				<%try {for(Thread thread : list){ %>
					<tr>
						<td class="text-center"><h3><a href="<%= thread.getLink() %>" class="text-success"><%= thread.getTitle() %></a></h3></td> 
						<td class="text-center"><h3><%= thread.getDateCreated() %></h3></td>
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
	
	</main>
	
	<%@ include file="templates/footer.jsp" %>
	<%@ include file="templates/scripts.jsp" %>
</body>
</html>