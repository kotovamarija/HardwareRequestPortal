package lv.autentica.HardwareRequestApp.repositories;

import lv.autentica.HardwareRequestApp.models.Request;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RequestRepository extends JpaRepository<Request, Long> {
}
