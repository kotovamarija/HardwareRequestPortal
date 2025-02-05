package lv.autentica.HardwareRequestApp.models;

import jakarta.persistence.*;
import lv.autentica.HardwareRequestApp.models.enums.UserRole;

import java.util.List;

@Entity
@Table(name = "Users")
public class User {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "role")
    private UserRole userRole;

    @Column(name ="name")
    private String name;

    @Column(name ="username") // UNIQUE -- should add validation
    private String username;

    @Column(name ="password")
    private String password;

    @OneToMany(mappedBy = "user")
    private List<Request> requests;

    public User(){
        this.userRole = UserRole.USER;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public UserRole getUserRole() {
        return userRole;
    }

    public void setUserRole(UserRole userRole) {
        this.userRole = userRole;
    }

    public List<Request> getRequests() {
        return requests;
    }

    public void setRequests(List<Request> requests) {
        this.requests = requests;
    }
}
