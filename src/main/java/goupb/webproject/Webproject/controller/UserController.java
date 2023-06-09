package goupb.webproject.Webproject.controller;

import goupb.webproject.Webproject.dto.UserDTO;
import goupb.webproject.Webproject.service.UserService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/all")
    public List<UserDTO> findAll(){
        List<UserDTO> allUser = userService.findAll();
        return allUser;
    }
    @GetMapping("/all/{id}")
    public Optional<UserDTO> findById(@PathVariable String id){
        return userService.findById(id);
    }

    @PostMapping("/post")
    public UserDTO create(@RequestBody UserDTO userDTO){
        userService.create(userDTO);
        return userDTO;
    }

    @DeleteMapping("/delete/{id}")
       public ResponseEntity<Void> delete(@PathVariable String id){
             userService.delete(id);
        return ResponseEntity.status(204).build();
    }
    @PutMapping("/update")
    public ResponseEntity<UserDTO> update( @RequestBody UserDTO userDTO){
        UserDTO updatedUser = userService.update(userDTO);

        return ResponseEntity.status(201).body(updatedUser);
    }
}
