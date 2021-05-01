<%	
	boolean admin = false;
	
	try{
		admin = (boolean) session.getAttribute("auth");
	}catch(Exception e){}
	
	if(!admin){
		response.sendRedirect("/forum/");
	}else{
%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<%@ include file="templates/libraries.jsp" %>
<head>
<meta charset="ISO-8859-1">
<title>Panel</title>
</head>
<body class="bg-light" style="padding-top:70px;">
	<%@ include file="templates/header.jsp" %>
	<main>
		<div class="container mt-5">
			<div class="card text-center">
				<div class="card-header">
					<h4>Operations</h4>
				</div>
				<div class="card-body">
					<table class="table table-hover">
						<tr>
							<td><h5><a href="addCategorie.jsp">Add Categorie</a></h5></td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</main>
		
	
	<%@ include file="templates/footer.jsp" %>
	<%@ include file="templates/scripts.jsp" %>
</body>
</html>
<%}%>