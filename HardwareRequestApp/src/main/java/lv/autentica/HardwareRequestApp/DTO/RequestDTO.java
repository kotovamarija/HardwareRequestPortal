package lv.autentica.HardwareRequestApp.DTO;

import jakarta.persistence.*;
import lv.autentica.HardwareRequestApp.models.Hardware;
import lv.autentica.HardwareRequestApp.models.User;
import lv.autentica.HardwareRequestApp.models.enums.Status;

import java.time.LocalDateTime;

public class RequestDTO {

    private String itemName;

    private String reason;

    private String username;

    private String name;

    private String password;

    private String trackingNumber;

    private String status;

    private String createdAt;

    public RequestDTO() {

    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
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

    public String getTrackingNumber() {
        return trackingNumber;
    }

    public void setTrackingNumber(String trackingNumber) {
        this.trackingNumber = trackingNumber;
    }

    public void setPassword(String password) {
        this.password = password;

    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "RequestDTO{" +
                "itemName='" + itemName + '\'' +
                ", reason='" + reason + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", trackingNumber='" + trackingNumber + '\'' +
                ", status='" + status + '\'' +
                ", createdAt='" + createdAt + '\'' +
                '}';
    }
}
