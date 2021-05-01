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

@WebServlet("")
public class Index extends HttpServlet {
    
	public void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		List<Thread> latestsList;
		List<Thread> popularsList;
		ThreadsDal dal = new ThreadsDal();
		try {
			latestsList = dal.getLatestThreads();
			popularsList = dal.getPopularThreads();
			
			for(Thread thread : latestsList) {
				thread.setAuthor(dal.getAuthor(thread));
			}
			for(Thread thread : popularsList) {
				thread.setAuthor(dal.getAuthor(thread));
			}
			request.setAttribute("latests", latestsList);
			request.setAttribute("populars", popularsList);
		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		}
		
		RequestDispatcher dispatch = request.getRequestDispatcher("index.jsp");
		dispatch.forward(request, response);
		
	}
}
