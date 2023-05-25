package goupb.webproject.Webproject.controller;

import goupb.webproject.Webproject.dto.UserDTO;
import goupb.webproject.Webproject.entity.UserEntity;
import goupb.webproject.Webproject.repository.UserRepository;
import goupb.webproject.Webproject.request.AuthenticationRequest;
import goupb.webproject.Webproject.service.UserService;
import goupb.webproject.Webproject.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

/**
 * REST controller for authenticating and retrieving a JWT.
 */
@RestController
@RequestMapping(path = "/authentication")
public class AuthenticationController {

    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;
    private final JwtUtil jwtUtil;

    public AuthenticationController(JwtUtil jwtUtil) {

        this.jwtUtil = jwtUtil;
    }

    @RequestMapping(method = RequestMethod.POST)
    public String authenticate(@RequestBody AuthenticationRequest authenticationRequest) {

        authenticateUser(authenticationRequest);


        return jwtUtil.createAndSignToken(authenticationRequest.getUsername());


    }

    private void authenticateUser(AuthenticationRequest authenticationRequest) {
        Optional<UserDTO> authrequesterDB = userService.findByUsername(authenticationRequest.getUsername());
        if (authrequesterDB.isPresent()) {
            UserDTO userfound = authrequesterDB.get();
            if(!userfound.getPassword().equals(authenticationRequest.getPassword())) {
                throw new RuntimeException("Authentication failed");
            }


        }
        else {
            throw new RuntimeException("Authentication failed");
        }

    /*private void authenticateUser(AuthenticationRequest authenticationRequest) {
        if (!userService.findById(authenticationRequest.getUsername()).equals(authenticationRequest.getUsername()) || !"password".equals(authenticationRequest.getPassword())) {
            throw new RuntimeException("Authentication failed");
        }

        */
    }

}