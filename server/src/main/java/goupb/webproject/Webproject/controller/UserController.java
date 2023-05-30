package goupb.webproject.Webproject.controller;

import goupb.webproject.Webproject.dto.UserDTO;
import goupb.webproject.Webproject.entity.UserRole;
import goupb.webproject.Webproject.service.UserService;

import goupb.webproject.Webproject.util.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/all")
    public List<UserDTO> findAll(){
        List<UserDTO> allUser = userService.findAll();
        return allUser;
    }
    @GetMapping("/findbyuser")
    public Optional<UserDTO> findUser(@RequestBody UserDTO userDTO){
        Optional<UserDTO> findUser = userService.findByUsername(userDTO.getUsername());
        return findUser;
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
       public ResponseEntity<Void> delete(@PathVariable String id ,HttpServletRequest request){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Optional<UserDTO> userDTO = userService.findByUsername(authentication.getName());
        UserDTO user = userDTO.get();
        if(user.getRole().equals(UserRole.ADMIN))userService.delete(id);
        else throw new AccessDeniedException("Only admins can delete");
        return ResponseEntity.status(204).build();
    }
    @PutMapping("/update")
    public ResponseEntity<UserDTO> update( @RequestBody UserDTO userDTO){
        UserDTO updatedUser = userService.update(userDTO);
        return ResponseEntity.status(201).body(updatedUser);
    }
    /*

    private boolean isAdminUser(HttpServletRequest request) {
        String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            String jwt = authorizationHeader.split(" ")[1];

            String username = jwtUtil.verifyAndDecodeToken(jwt);
            Optional<UserDTO> authrequester = userService.findByUsername(username);
            UserDTO user = authrequester.get();
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);

            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                    userDetails, null, Collections.emptyList()
            );

            SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            if(user.getRole().equals("ADMIN"))return true;
            else return false;

    }
        else throw new RuntimeException("No valid token provided");
}

     */

    }
