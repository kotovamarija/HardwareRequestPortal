package lv.autentica.HardwareRequestApp.controllers;

import lv.autentica.HardwareRequestApp.DTO.RequestDTO;
import lv.autentica.HardwareRequestApp.models.Request;
import lv.autentica.HardwareRequestApp.models.User;
import lv.autentica.HardwareRequestApp.repositories.RequestRepository;
import lv.autentica.HardwareRequestApp.services.HardwareService;
import lv.autentica.HardwareRequestApp.services.RequestService;
import lv.autentica.HardwareRequestApp.services.UserService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/request")
@CrossOrigin(origins = "http://localhost:4200")
public class RequestController {
    private RequestService requestService;
    private HardwareService hardwareService;
    private UserService userService;

    public RequestController(RequestService requestService, HardwareService hardwareService, UserService userService) {
        this.requestService = requestService;
        this.hardwareService = hardwareService;
        this.userService = userService;
    }

    @PostMapping(value = "/new", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<RequestDTO> createNewRequest(@RequestBody RequestDTO requestDTO) {
        System.out.println("Получен JSON: " + requestDTO);
        System.out.println("Starting...");
        System.out.println("Printing out full DTO: " + requestDTO);

        Request request = new Request();

        request.setReason(requestDTO.getReason());
        request.setHardware(hardwareService.findByName(requestDTO.getItemName()));
        request.setUser(userService.getUserByUsername(requestDTO.getUsername())); // AND PASSWORD - should include password in common method

        System.out.println("Printing out REQUEST: " + request);

        requestService.save(request);
        return ResponseEntity.ok(requestDTO);

    }
}
