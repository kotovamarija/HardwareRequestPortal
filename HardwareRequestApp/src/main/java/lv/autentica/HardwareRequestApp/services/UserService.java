package lv.autentica.HardwareRequestApp.services;

import lv.autentica.HardwareRequestApp.models.User;
import lv.autentica.HardwareRequestApp.models.enums.UserRole;
import lv.autentica.HardwareRequestApp.repositories.UserRepository;

import lv.autentica.HardwareRequestApp.util.InvalidRoleException;
import lv.autentica.HardwareRequestApp.util.InvalidUsernameOrPasswordException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
public class UserService {
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public User getUserByUsernameAndPassword(String username, String password) {
        //return userRepository.findByUsernameAndPassword(username, password).orElse(null);

        Optional<User> user = userRepository.findByUsernameAndPassword(username, password);
        if (user.isPresent()) {
            return user.get();
        }
        throw new InvalidUsernameOrPasswordException();
    }

    public void checkAdminRights(User user) {
        if (!user.getUserRole().equals(UserRole.ADMIN)) {
            throw new InvalidRoleException();
    }

    }
}