package forumProject2;

public class Categorie {
	private int id;
	private String title;
	private int threads;
	private String link;
	
	public Categorie(int id, String title) {
		this.id = id;
		this.title = title;
		this.link = "/" + this.title;
	}

	public String getLink() {
		return this.link;
	}
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public int getThreads() {
		return threads;
	}

	public void setThreads(int threads) {
		this.threads = threads;
	}
	
	
	
}
