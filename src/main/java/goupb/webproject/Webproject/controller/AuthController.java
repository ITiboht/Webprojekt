package goupb.webproject.Webproject.controller;

import goupb.webproject.Webproject.request.AuthRequest;
import goupb.webproject.Webproject.util.JwtUtil;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST controller for authenticating and retrieving a JWT.
 */
@RestController
@RequestMapping(path = "/authentication")
public class AuthController {

    private final JwtUtil jwtUtil;

    public AuthController(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @RequestMapping(method = RequestMethod.POST)
    public String authenticate(@RequestBody AuthRequest authenticationRequest) {
        // This is a dummy implementation of a user authentication.
        // You should place a valid implementation here, which queries a user from the database and validates
        // if the username and the password are correct!
        authenticateUser(authenticationRequest);

        String username = "test";
        return jwtUtil.createAndSignToken(username);
    }

    private void authenticateUser(AuthRequest authenticationRequest) {
        if (!"test".equals(authenticationRequest.getUsername()) || !"password".equals(authenticationRequest.getPassword())) {
            throw new RuntimeException("Authentication failed");
        }
    }

}