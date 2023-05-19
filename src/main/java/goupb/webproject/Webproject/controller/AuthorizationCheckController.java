package goupb.webproject.Webproject.controller;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;

import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST controller demonstrating how can we access the authorized (or authenticated) user.
 */
@RestController
@RequestMapping(path = "/authchk")
public class AuthorizationCheckController {

    @RequestMapping(path = "/principal", method = RequestMethod.GET)
    public String checkAuthorizationWithPrincipal(Principal principal) {
        return String.format("Welcome, %s!", principal.getName());
    }

    @RequestMapping(path = "/auth", method = RequestMethod.GET)
    public String checkAuthorizationWithAuthentication(Authentication authentication) {
        return String.format("Welcome, %s!", authentication.getName());
    }

    @RequestMapping(path = "/request", method = RequestMethod.GET)
    public String checkAuthorizationWithRequest(HttpServletRequest httpServletRequest) {
        return String.format("Welcome, %s!", httpServletRequest.getAttribute("authorizedUsername"));
    }

}