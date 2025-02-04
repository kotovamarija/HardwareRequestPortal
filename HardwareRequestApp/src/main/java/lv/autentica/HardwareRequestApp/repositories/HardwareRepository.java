package lv.autentica.HardwareRequestApp.repositories;

import lv.autentica.HardwareRequestApp.models.Hardware;
import lv.autentica.HardwareRequestApp.models.enums.Category;
import lv.autentica.HardwareRequestApp.models.enums.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface HardwareRepository extends JpaRepository<Hardware, Long> {
//List<Hardware> findByCategory(Category category);
List<Hardware> findByType(Type type);
Optional<Hardware> findByName(String name);

}
