package lv.autentica.HardwareRequestApp.controllers;

import lv.autentica.HardwareRequestApp.DTO.ErrorResponse;
import lv.autentica.HardwareRequestApp.DTO.RequestDTO;
import lv.autentica.HardwareRequestApp.DTO.TrackingNumberDTO;
import lv.autentica.HardwareRequestApp.models.Request;
import lv.autentica.HardwareRequestApp.models.User;
import lv.autentica.HardwareRequestApp.models.enums.Status;
import lv.autentica.HardwareRequestApp.services.HardwareService;
import lv.autentica.HardwareRequestApp.services.RequestService;
import lv.autentica.HardwareRequestApp.services.UserService;
import lv.autentica.HardwareRequestApp.util.RequestNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/request")
@CrossOrigin(origins = "http://localhost:4200")
public class RequestController {
    private RequestService requestService;
    private HardwareService hardwareService;
    private UserService userService;
    private ModelMapper modelMapper;

    public RequestController(RequestService requestService, HardwareService hardwareService, UserService userService, ModelMapper modelMapper) {
        this.requestService = requestService;
        this.hardwareService = hardwareService;
        this.userService = userService;
        this.modelMapper = modelMapper;
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
        String status = requestService.getStatusByTrackingNumber(trackingNumber);
            Map<String, String> response = new HashMap<>();
            response.put("status", status);
            return ResponseEntity.ok(response);
    }

    @GetMapping("/viewAll")
    public List<RequestDTO> index() {
       return requestService.getAllRequests().stream().map(request -> convertToRequestDTO(request)).collect(Collectors.toList());
    }


    @PostMapping("/confirm")
    public ResponseEntity<?> confirm(@RequestBody TrackingNumberDTO trackingNumberDTO) {
        Request requestToBeChanged = requestService.getRequestByTrackingNumber(trackingNumberDTO.getTrackingNumber());
        requestService.changeStatus(requestToBeChanged, Status.APPROVED);

        Map<String, String> response = new HashMap<>();
        response.put("message", "Status changed to APPROVED");
        return ResponseEntity.ok(response);
    }

    @PostMapping("/reject")
    public ResponseEntity<?> reject(@RequestBody TrackingNumberDTO trackingNumberDTO) {
        Request requestToBeChanged = requestService.getRequestByTrackingNumber(trackingNumberDTO.getTrackingNumber());
        requestService.changeStatus(requestToBeChanged, Status.DENIED);

        Map<String, String> response = new HashMap<>();
        response.put("message", "Status changed to DENIED");
        return ResponseEntity.ok(response);
    }

    @PostMapping("/delete")
    public ResponseEntity<?> delete(@RequestBody TrackingNumberDTO trackingNumberDTO) {
        requestService.deleteByTrackingNumber(trackingNumberDTO.getTrackingNumber());

        Map<String, String> response = new HashMap<>();
        response.put("message", "Request has been deleted");
        return ResponseEntity.ok(response);
    }


    @ExceptionHandler
    private ResponseEntity<ErrorResponse> handleException(RequestNotFoundException e){
        return ResponseEntity.badRequest().body(new ErrorResponse("Tracking number not found"));
    }

    private RequestDTO convertToRequestDTO(Request request) {
        RequestDTO requestDTO = new RequestDTO();

        requestDTO.setName(request.getUser().getName());
        requestDTO.setUsername(request.getUser().getUsername());
        requestDTO.setItemName(request.getHardware().getName());
        requestDTO.setStatus(request.getStatus().toString());
        requestDTO.setCreatedAt(request.getCreatedAt().toString());

        requestDTO.setReason(request.getReason());
        requestDTO.setTrackingNumber(request.getTrackingNumber());


        return requestDTO;
    }

}
