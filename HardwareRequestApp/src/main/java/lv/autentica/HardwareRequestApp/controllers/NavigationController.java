package lv.autentica.HardwareRequestApp.controllers;

import lv.autentica.HardwareRequestApp.models.Hardware;
import lv.autentica.HardwareRequestApp.models.User;
import lv.autentica.HardwareRequestApp.models.enums.Category;
import lv.autentica.HardwareRequestApp.models.enums.Type;
import lv.autentica.HardwareRequestApp.repositories.HardwareRepository;
import lv.autentica.HardwareRequestApp.services.HardwareService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static lv.autentica.HardwareRequestApp.models.enums.Type.*;

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
                        .replaceAll("_", " ")
//                        .toLowerCase()
                       )
                .collect(Collectors.toList());
    }

//    @GetMapping("/types")
//    public List<String> getTypes() {
//        return List.of(Type.values())
//                .stream()
//                .map(type -> type.name()
//                                .replaceAll("_", " ")
////                        .toLowerCase()
//                )
//                .collect(Collectors.toList());
//    }


    @GetMapping("/categories/{category}")
    public List<String> getTypes(@PathVariable String category) {
        switch (category) {
            case "COMPUTERS":
                return List.of(Stream.of(LAPTOPS, TABLETS, PERSONAL_COMPUTERS).map(type -> type.name()
                        .replaceAll("_", " ")).toArray(String[]::new));
            case "COMPUTER COMPONENTS":
                return List.of(Stream.of(CPU, HDD, SSD, RAM, MOTHERBOARD,
                        VIDEO_CARD, SOUND_CARD, POWER_SUPPLY, COOLING_FAN, CARD_READER).map(type -> type.name()
                        .replaceAll("_", " ")).toArray(String[]::new));
            case "MONITORS":
                return List.of(Stream.of(SCREEN_SIZE_19, SCREEN_SIZE_21, SCREEN_SIZE_25).map(type -> type.name()
                        .replaceAll("_", " ")).toArray(String[]::new));
            case "ACCESSORIES":
                return List.of(Stream.of(MOUSE, KEYBOARD, MOUSE_PAD, STYLUS).map(type -> type.name()
                        .replaceAll("_", " ")).toArray(String[]::new));
            case "AUDIO AND VIDEO":
                return List.of(Stream.of(HEADPHONES, SPEAKERS, MICROPHONES, WEB_CAMERA, SECURITY_CAMERA).map(type -> type.name()
                        .replaceAll("_", " ")).toArray(String[]::new));
            case "PROJECTORS AND SCREENS":
                return List.of(Stream.of(PROJECTORS, PROJECTOR_SCREENS).map(type -> type.name()
                        .replaceAll("_", " ")).toArray(String[]::new));
            case "PRINTERS AND SCANNERS":
                return List.of(Stream.of(PRINTER, SCANNER, CARTRIDGES).map(type -> type.name()
                        .replaceAll("_", " ")).toArray(String[]::new));
            case "CABLES AND ADAPTERS":
                return List.of(Stream.of(HDMI_CABLE, VGA_CABLE, DVI_CABLE, LAPTOP_ADAPTERS, MONITOR_ADAPTERS, USB_CABLE).map(type -> type.name()
                        .replaceAll("_", " ")).toArray(String[]::new));
            case "NETWORKING DEVICES":
                return List.of(Stream.of(ROUTER, NETWORK_ADAPTER, SWITCH).map(type -> type.name()
                        .replaceAll("_", " ")).toArray(String[]::new));
            case "OTHERS":
                return List.of(Stream.of(MEMORY_CARDS, USB_FLASH_MEMORY, BATTERIES_AA, BATTERIES_AAA, LAPTOP_CASE_size_M, LAPTOP_CASE_size_L).map(type -> type.name()
                        .replaceAll("_", " ")).toArray(String[]::new));
            default:
                return null;
        }
    }

    @GetMapping("/{chosenType}")
    public List<String> getItems(@PathVariable String chosenType) {
        System.out.println("HELLO FROM CONTROLLERS / GET ITEMS...");
                System.out.println("THIS FUCKING SHIT - the type: " + chosenType.replaceAll(" ", "_"));
//                System.out.println("the item:" + hardwareService.findByType(Type.valueOf("TABLETS")));
               return hardwareService.findByType(Type.valueOf(chosenType.replaceAll(" ", "_"))).stream().map(hardware -> hardware.getName()).collect(Collectors.toList());
    }




    @PostMapping
    public ResponseEntity<String> createUser(@RequestBody String type){
        return ResponseEntity.ok(type);
    }

}
