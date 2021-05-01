package forumProject2;

import javax.servlet.http.HttpServlet;
import java.io.IOException;
import javax.servlet.Servlet;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebServlet;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class CategoriesDal{
       
	private String url = "jdbc:mysql://localhost:3306/forumproject";
	private String username = "root";
	private String password = "12345";
	
	
	
	public List<Categorie> getCategories() {
		int id;
		String title;
		List<Categorie> categories = new ArrayList<>();
		
		String query = "SELECT * FROM categories";
		try {
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection connection = DriverManager.getConnection(this.url, this.username, this.password);
		Statement statement = connection.createStatement();
		ResultSet results = statement.executeQuery(query);
		while(results.next()) {
			id = results.getInt("id");
			title = results.getString("title");
			categories.add(new Categorie(id, title));
		}
		statement.close();
		connection.close();
		}catch(Exception e) {
			e.printStackTrace();
		}
		
		return categories;
		
		
		
	}
	
	public int getThreads(Categorie cat) throws ClassNotFoundException, SQLException {
		
		String query = "SELECT * FROM threads WHERE (catid=?)";
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection  connection = DriverManager.getConnection(this.url, this.username, this.password);
		PreparedStatement statement = connection.prepareStatement(query);
		statement.setInt(1, cat.getId());
		ResultSet results = statement.executeQuery();
		int counter = 0;
		while(results.next()) {
			counter++;
		}
		statement.close();
		connection.close();
		return counter;
		
	}
}
