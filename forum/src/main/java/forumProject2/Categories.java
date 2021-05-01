package forumProject2;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import forumProject2.Categorie;
import forumProject2.CategoriesDal;

@WebServlet("/categories")
public class Categories extends HttpServlet {
	
	public void service(HttpServletRequest request, HttpServletResponse response){
		List<Categorie> categories;
		CategoriesDal dal = new CategoriesDal();
		categories = dal.getCategories();
			
		for(Categorie categorie : categories) {
			try {
				categorie.setThreads(dal.getThreads(categorie));
			} catch (ClassNotFoundException e) {
				e.printStackTrace();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		request.setAttribute("categories", categories);
		RequestDispatcher dispatch = request.getRequestDispatcher("categories.jsp");
		try {
			dispatch.forward(request, response);
		} catch (ServletException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
			
	}
	



}
