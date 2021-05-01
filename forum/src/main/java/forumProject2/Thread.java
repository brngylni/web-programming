package forumProject2;

public class Thread {
	private String title;
	private String dateCreated;
	private int catId;
	private int authorId;
	private String link;
	public Thread(String title, String dateCreated, int catId, int authorId) {
		
		this.title = title;
		this.dateCreated = dateCreated;
		this.catId = catId;
		this.authorId = authorId;
		this.link = "/forum/Threads/" + title;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(String dateCreated) {
		this.dateCreated = dateCreated;
	}

	public int getCatId() {
		return catId;
	}

	public void setCatId(int catId) {
		this.catId = catId;
	}

	public int getAuthorId() {
		return authorId;
	}

	public void setAuthorId(int authorId) {
		this.authorId = authorId;
	}
	public String getLink() {
		return this.link;
	}
}
