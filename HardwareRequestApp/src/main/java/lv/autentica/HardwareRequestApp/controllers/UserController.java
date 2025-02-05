package lv.autentica.HardwareRequestApp.controllers;

import lv.autentica.HardwareRequestApp.DTO.ErrorResponse;
import lv.autentica.HardwareRequestApp.DTO.UserDTO;
import lv.autentica.HardwareRequestApp.models.User;
import lv.autentica.HardwareRequestApp.services.UserService;
import lv.autentica.HardwareRequestApp.util.InvalidRoleException;
import lv.autentica.HardwareRequestApp.util.InvalidUsernameOrPasswordException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

@GetMapping
    public List<User> index(){
        return userService.getAllUsers();
}

@PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user){
    User savedUser = userService.createUser(user);
    return ResponseEntity.ok(savedUser);
    }

    @PostMapping("/login")
    public ResponseEntity<?>  login(@RequestBody User user){
        User receivedUser = userService.getUserByUsernameAndPassword(user.getUsername(), user.getPassword());
        userService.checkAdminRights(receivedUser);

        Map<String, String> response = new HashMap<>();
        response.put("message", "Login successful");
        return ResponseEntity.ok(response);
    }

    @ExceptionHandler
    private ResponseEntity<ErrorResponse> handleInvalidUsernameOrPasswordException(InvalidUsernameOrPasswordException e){
        return ResponseEntity.badRequest().body(new ErrorResponse("Invalid username or password"));
    }

    @ExceptionHandler
    private ResponseEntity<ErrorResponse> handleInvalidRoleException(InvalidRoleException e){
        return ResponseEntity.badRequest().body(new ErrorResponse("Only ADMIN is allowed here"));
    }

}
