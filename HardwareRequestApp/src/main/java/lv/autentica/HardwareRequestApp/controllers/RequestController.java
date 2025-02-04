package lv.autentica.HardwareRequestApp.controllers;

import lv.autentica.HardwareRequestApp.DTO.ErrorResponse;
import lv.autentica.HardwareRequestApp.DTO.RequestDTO;
import lv.autentica.HardwareRequestApp.models.Request;
import lv.autentica.HardwareRequestApp.models.User;
import lv.autentica.HardwareRequestApp.services.HardwareService;
import lv.autentica.HardwareRequestApp.services.RequestService;
import lv.autentica.HardwareRequestApp.services.UserService;
import lv.autentica.HardwareRequestApp.util.RequestNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

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
    public ResponseEntity<?> createNewRequest(@RequestBody RequestDTO requestDTO) {
        System.out.println("Получен JSON: " + requestDTO);

        Request request = new Request();
        User user = userService.getUserByUsernameAndPassword(requestDTO.getUsername(), requestDTO.getPassword());

        if(user != null){
            request.setUser(user);
            request.setReason(requestDTO.getReason());
            request.setHardware(hardwareService.findByName(requestDTO.getItemName()));
            requestDTO.setTrackingNumber(request.getTrackingNumber());
            requestService.save(request);
            return ResponseEntity.ok(requestDTO);
        }
        return ResponseEntity.badRequest().body(new ErrorResponse("Invalid username or password"));
    }

    @PostMapping("/track")
    public ResponseEntity<?> trackStatus(@RequestBody String trackingNumber) {
        String status = requestService.trackByTrackingNumber(trackingNumber);
            Map<String, String> response = new HashMap<>();
            response.put("status", status);
            return ResponseEntity.ok(response);
    }

    @ExceptionHandler
    private ResponseEntity<ErrorResponse> handleException(RequestNotFoundException e){
        System.out.println("HANDLER!!!!!!!!!!!!!!!...");
        return ResponseEntity.badRequest().body(new ErrorResponse("Tracking number not found"));
    }

}
