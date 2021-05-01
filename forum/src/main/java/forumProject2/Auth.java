package forumProject2;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


@WebServlet("/auth")
public class Auth extends HttpServlet {
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
			String username = request.getParameter("userName");
			String password = request.getParameter("password");
			boolean isAuth = false;
			MemberDal dal = new MemberDal();
			try {
				isAuth = dal.authenticate(username, password);
			} catch (ClassNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			if(isAuth) {
				HttpSession session = request.getSession();
				session.setAttribute("auth", true);
				response.sendRedirect("/forum/");
			}else {
				HttpSession session = request.getSession();
				session.setAttribute("auth", "error");
				response.sendRedirect("login");
			}
	}

}
