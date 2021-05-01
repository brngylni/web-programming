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
		<div class="container">
			<div class="card text-center">
				<div class="card-header">
					<h4>Add Categorie</h4>
				</div>
				<div class="card-body">
					<form action="addCategorie" method="POST">
						<div class="form-group">
							<label for="title">Categorie Title :</label>
							<input type="text" class="form-control" name="title">
						</div>
						<button type="submit" class="btn btn-primary btn-lg mt-3">Add</button>
					</form>
				</div>
			</div>
		</div>
	</main>
		
	
	<%@ include file="templates/footer.jsp" %>
	<%@ include file="templates/scripts.jsp" %>
</body>
</html>
<%}%>