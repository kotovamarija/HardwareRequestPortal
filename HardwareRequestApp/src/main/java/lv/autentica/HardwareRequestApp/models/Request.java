package lv.autentica.HardwareRequestApp.models;

import jakarta.persistence.*;
import lv.autentica.HardwareRequestApp.models.enums.Status;

import java.time.LocalDateTime;

@Entity
@Table(name = "Requests")
public class Request {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne()
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "hardware_id", referencedColumnName = "id")
    private Hardware hardware;

    @Column(name = "reason")
    private String reason;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private Status status;

    @Column(name = "tracking_number")
    private String trackingNumber;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_at")
    private LocalDateTime createdAt;

    public Request() {
        this.status = Status.SUBMITTED;
        this.createdAt = LocalDateTime.now();
        this.trackingNumber = "LV2025" + System.currentTimeMillis();
    }

    public Long getId() {
        return id;
    }

    public User getEmployee() {
        return user;
    }

    public void setEmployee(User user) {
        this.user = user;
    }

    public Hardware getHardware() {
        return hardware;
    }

    public void setHardware(Hardware hardware) {
        this.hardware = hardware;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getTrackingNumber() {
        return trackingNumber;
    }

    public void setTrackingNumber(String trackingNumber) {
        this.trackingNumber = trackingNumber;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

}
