package goupb.webproject.Webproject.dto;

import goupb.webproject.Webproject.entity.UserRole;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private String id;
    private String username;
    private String email;
    private String password;
    private UserRole role;
    private List<String> roles;
}
