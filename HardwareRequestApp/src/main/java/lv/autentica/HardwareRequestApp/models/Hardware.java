package lv.autentica.HardwareRequestApp.models;

import jakarta.persistence.*;
import lv.autentica.HardwareRequestApp.models.enums.Type;
import lv.autentica.HardwareRequestApp.models.enums.Category;

@Entity
@Table(name = "Hardware")
public class Hardware {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private Category category;

    @Enumerated(EnumType.STRING)
    private Type type;
    private String name; //  long name including characteristics

    @OneToOne(mappedBy = "hardware")
    private Request request;

    public Hardware() {}

    public Long getId() {
        return id;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public Request getRequest() {
        return request;
    }

    public void setRequest(Request request) {
        this.request = request;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
