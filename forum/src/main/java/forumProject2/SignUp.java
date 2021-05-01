package forumProject2;

import java.io.IOException;
import java.sql.SQLException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/signUp")
public class SignUp extends HttpServlet {

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		 
		String username = request.getParameter("userName");
		String password = request.getParameter("password");
		String name = request.getParameter("firstName");
		String lastName = request.getParameter("lastName");
		String dob = request.getParameter("birthDate");
		String email = request.getParameter("email");
		boolean su = false;
		
	
		Member member = new Member(name, lastName, dob, username, password, su);
		MemberDal dal = new MemberDal();
		int result = 0;
		try {
			result = dal.addMember(member);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		if(result == 0) {
			response.sendRedirect("register");
		}else {
			response.sendRedirect("login");
		}
	}

}
