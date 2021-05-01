package forumProject2;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class AddCategorie
 */
@WebServlet("/addCategorie")
public class AddCategorie extends HttpServlet {

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
			String title = request.getParameter("title");
			PrintWriter out = response.getWriter();
			
			CategoriesDal dal = new CategoriesDal();
			try {
				dal.addCategorie(title);
			} catch (ClassNotFoundException | SQLException e) {
				e.printStackTrace();
			}
			
			out.println("Added");
	}

}
