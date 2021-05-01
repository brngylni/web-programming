package forumProject2;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/search")
public class Search extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			ThreadsDal dal = new ThreadsDal();
			String keyword = request.getParameter("search");
			List<Thread> results;
			try {
				results = dal.searchThreads(keyword);
				request.setAttribute("results", results);
				RequestDispatcher dispatch = request.getRequestDispatcher("search.jsp");
				dispatch.forward(request, response);
			}catch(Exception e) {
				RequestDispatcher dispatch = request.getRequestDispatcher("search.jsp");
				dispatch.forward(request, response);
			}
		
			
	}

}
