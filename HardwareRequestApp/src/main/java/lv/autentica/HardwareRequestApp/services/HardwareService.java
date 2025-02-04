package lv.autentica.HardwareRequestApp.services;

import lv.autentica.HardwareRequestApp.models.Hardware;
import lv.autentica.HardwareRequestApp.models.User;
import lv.autentica.HardwareRequestApp.models.enums.Category;
import lv.autentica.HardwareRequestApp.models.enums.Type;
import lv.autentica.HardwareRequestApp.repositories.HardwareRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class HardwareService {
    @Autowired
    private HardwareRepository hardwareRepository;

    public HardwareService(HardwareRepository hardwareRepository) {
        this.hardwareRepository = hardwareRepository;
    }

    public List<Hardware> findAll() {
        return hardwareRepository.findAll();
    }

    public Hardware findById(Long id) {
        return hardwareRepository.findById(id).orElse(null);
    }

    @Transactional
    public void save(Hardware hardware) {
        hardwareRepository.save(hardware);
    }

    public List<Hardware> findByCategory(Category category) {
        return hardwareRepository.findByCategory(category);
    }

    public List<Hardware> findByType(Type type) {
        return hardwareRepository.findByType(type);
    }

    public Hardware findByName(String name) {
        return hardwareRepository.findByName(name).orElse(null);
    }

}
