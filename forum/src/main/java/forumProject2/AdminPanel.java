package forumProject2;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


@WebServlet("/admin")
public class AdminPanel extends HttpServlet {

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		boolean auth = false;
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		HttpSession session = request.getSession();
		RequestDispatcher dispatcher = request.getRequestDispatcher("panel.jsp");
		
			
		MemberDal dal = new MemberDal();
		
		try {
			if(dal.adminAuth(username, password)) {
				session.setAttribute("auth", true);
			}else {
				session.setAttribute("auth", false);
				response.sendRedirect("admin.jsp");
			}
		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		}

		dispatcher.forward(request, response);
	}

}
