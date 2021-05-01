<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="forumProject2.Thread" %>
<!DOCTYPE html>
<%
	Thread thread = (Thread) request.getAttribute("thread");

%>
<html>
<%@ include file="templates/libraries.jsp" %>
<head>
<meta charset="ISO-8859-1">
<title><%= thread.getTitle() %></title>
</head>
<body class="bg-light" style="padding-top:70px;">
<%@ include file="templates/header.jsp" %>

	<main>
		<div class="container" style="margin-top:100px;">
			<div class="card">
				<div class="card-header text-center">
					<h4><%=thread.getTitle() %></h4>
				</div>
				<div class="card-body text-center">
					<p class="lead"><%= thread.getContent() %></p>
				</div>
				<div class="card-footer text-muted">
					<p><%=thread.getDateCreated()%></p>
				</div>
			</div>
		</div>
	</main>


<%@ include file="templates/footer.jsp" %>
<%@include file="templates/scripts.jsp" %>
</body>
</html>