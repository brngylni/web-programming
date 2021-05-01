package forumProject2;

import java.util.ArrayList;
import java.util.List;
import java.sql.*;
public class ThreadsDal {
	private String url = "jdbc:mysql://localhost:3306/forumproject";
	private String username = "root";
	private String password = "12345";
	
	public List<Thread> searchThreads(String keyword) throws ClassNotFoundException, SQLException {
		String title;
		String dateCreated;
		int catId;
		int authorId;
		
		List<Thread> threads = new ArrayList<>();
		String query = "SELECT * FROM threads";
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection connection = DriverManager.getConnection(this.url, this.username, this.password);
		Statement statement = connection.createStatement();
		ResultSet results = statement.executeQuery(query);
		while(results.next()) {
			if(results.getString("title").contains(keyword)) {
				title = results.getString("title");
				dateCreated = String.valueOf(results.getDate("dateCreated"));
				catId = results.getInt("catId");
				authorId = results.getInt("authorId");
				threads.add(new Thread(title, dateCreated, catId, authorId));
			}else {
				continue;
			}
		}
		statement.close();
		connection.close();
		return threads;
		
	}
}
