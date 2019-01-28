package lt.akademijait.bronza.entities;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "USER")
//@Table(name = "USER", uniqueConstraints = {@UniqueConstraint(columnNames = "username")})
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //@Column
    //private Long userId

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private LocalDate hireDate;

    @Column
    private boolean administrator;

    @Column (unique = true, nullable=false)
    private String username;

    @Column
    private String password;

    //@Column
    //private byte[] passwordSalt;

    @Column (unique = true)
    private String emailAddress;

    @ManyToMany
    private List<UserGroup> userGroups;

    @OneToMany
    private List<Document> documents;

    //@Column
    //@CollectionTable(name = "USER_ROLE", joinColumns = @JoinColumn(name = "USER_ID"))
    //@ElementCollection(fetch = FetchType.EAGER, targetClass = UserRole.class)
    //private Set<UserRole> role;

    private User() {

    }

    public User(Long id, String firstName, String lastName, LocalDate hireDate, boolean administrator, String username, String password, String emailAddress, List<UserGroup> userGroups, List<Document> documents) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.hireDate = hireDate;
        this.administrator = administrator;
        this.username = username;
        this.password = password;
        this.emailAddress = emailAddress;
        this.userGroups = userGroups;
        this.documents = documents;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public LocalDate getHireDate() {
        return hireDate;
    }

    public void setHireDate(LocalDate hireDate) {
        this.hireDate = hireDate;
    }

    public boolean isAdministrator() {
        return administrator;
    }

    public void setAdministrator(boolean administrator) {
        this.administrator = administrator;
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

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public List<UserGroup> getUserGroups() {
        return userGroups;
    }

    public void setUserGroups(List<UserGroup> userGroups) {
        this.userGroups = userGroups;
    }

    public List<Document> getDocuments() {
        return documents;
    }

    public void setDocuments(List<Document> documents) {
        this.documents = documents;
    }
}