package lv.autentica.HardwareRequestApp.repositories;

import lv.autentica.HardwareRequestApp.models.Request;
import lv.autentica.HardwareRequestApp.models.enums.Status;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RequestRepository extends JpaRepository<Request, Long> {
    Optional<Request> findByTrackingNumber(String trackingNumber);
}
