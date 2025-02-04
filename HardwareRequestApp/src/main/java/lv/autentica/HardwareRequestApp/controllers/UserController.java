package lv.autentica.HardwareRequestApp.controllers;

import lv.autentica.HardwareRequestApp.models.User;
import lv.autentica.HardwareRequestApp.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

}
