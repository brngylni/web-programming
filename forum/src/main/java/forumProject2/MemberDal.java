package forumProject2;
import java.sql.*;
import java.text.SimpleDateFormat;

import forumProject2.Member;

public class MemberDal {

	private String url = "jdbc:mysql://localhost:3306/forumproject";
	private String username = "root";
	private String password = "12345";
	
	public boolean authenticate(String userid, String userpass) throws ClassNotFoundException, SQLException {
		
		String query = "SELECT * FROM MEMBERS WHERE UserName=? AND password=?";
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection connection = DriverManager.getConnection(this.url, this.username, this.password);
		PreparedStatement statement = connection.prepareStatement(query);
		statement.setString(1, userid);
		statement.setString(2, userpass);
		ResultSet results = statement.executeQuery();
		statement.close();
		connection.close();
		if(results.next()) {
			return true;
		}else {
			return false;
		}
		
		
		
	}
	
	public int addMember(Member member) throws ClassNotFoundException, SQLException {
		
		
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection connection = DriverManager.getConnection(this.url, this.username, this.password);
		String query = "INSERT INTO members (name, lastName, birthDate, UserName, password, superuser) VALUES (?, ?, ?, ?, ?, 0)";
		PreparedStatement statement = connection.prepareStatement(query);
		statement.setString(1, member.getName());
		statement.setString(2, member.getLastName());
		statement.setDate(3, Date.valueOf(member.getBirthDate()));
		statement.setString(4, member.getUsername());
		statement.setString(5, member.getPassword());
		int affected  = statement.executeUpdate();
		statement.close();
		connection.close();
		return affected;
	}

}
