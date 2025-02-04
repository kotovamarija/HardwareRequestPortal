package lv.autentica.HardwareRequestApp.controllers;
import lv.autentica.HardwareRequestApp.models.enums.Category;
import lv.autentica.HardwareRequestApp.models.enums.Type;
import lv.autentica.HardwareRequestApp.services.HardwareService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/navig")
@CrossOrigin(origins = "http://localhost:4200")
public class NavigationController {

    private HardwareService hardwareService;

    public NavigationController(HardwareService hardwareService) {
        this.hardwareService = hardwareService;
    }

    @GetMapping("/categories")
    public List<String> getCategories() {
        return List.of(Category.values())
                .stream()
                .map(category -> category.name()
                        .replaceAll("_", " "))
                .collect(Collectors.toList());
    }

    @GetMapping("/categories/{category}")
    public List<String> getTypes(@PathVariable String category) {
        return hardwareService.findTypesByCategory(category);
    }

    @GetMapping("/{chosenType}")
    public List<String> getItems(@PathVariable String chosenType) {
        return hardwareService.findByType(Type.valueOf(chosenType.replaceAll(" ", "_"))).stream().map(hardware -> hardware.getName()).collect(Collectors.toList());
    }

//    @PostMapping
//    public ResponseEntity<String> createUser(@RequestBody String type){
//        return ResponseEntity.ok(type);
//    }

}
