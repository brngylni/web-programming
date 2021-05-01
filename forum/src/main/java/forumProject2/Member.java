package forumProject2;

import java.util.Date;
import java.time.LocalDate;

public class Member {
		private String name;
		private String lastName;
		private String birthDate;
		private String username;
		private String password;
		private boolean su;
	
		public Member(String name, String lastName, String birthDate, String username, String password, boolean su) {
			this.name = name;
			this.lastName = lastName;
			this.birthDate = birthDate;
			this.username = username;
			this.password = password;
			this.su = su;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getLastName() {
			return lastName;
		}

		public void setLastName(String lastName) {
			this.lastName = lastName;
		}

		public String getBirthDate() {
			return birthDate;
		}

		public void setBirthDate(String birthDate) {
			this.birthDate = birthDate;
		}

		public String getUsername() {
			return username;
		}

		public void setUsername(String username) {
			this.username = username;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}

		public boolean isSu() {
			return su;
		}

		public void setSu(boolean su) {
			this.su = su;
		}

		
		
}
