package goupb.webproject.Webproject.service;

import goupb.webproject.Webproject.dto.UserDTO;

import java.util.List;
import java.util.Optional;
import goupb.webproject.Webproject.entity.UserEntity;


public interface UserService {
List<UserDTO> findAll();
Optional<UserDTO> findById(String id);
Optional<UserDTO> findByUsername(String username);



    UserDTO create(UserDTO userDTO);
    void delete(String id);
    UserDTO update(UserDTO userDTO);

}
