package goupb.webproject.Webproject.service.imp;

import goupb.webproject.Webproject.dto.UserDTO;
import goupb.webproject.Webproject.entity.UserEntity;
import goupb.webproject.Webproject.entity.UserRole;
import goupb.webproject.Webproject.exception.NotFoundException;
import goupb.webproject.Webproject.repository.UserRepository;
import goupb.webproject.Webproject.service.UserService;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserServiceImp implements UserService {

   private UserRepository userRepository;
   private ModelMapper modelMapper;

    public UserServiceImp(ModelMapper modelMapper,UserRepository userRepository) {
        this.modelMapper = modelMapper;
        this.userRepository = userRepository;

    }

    @Override
    public List<UserDTO> findAll() {
        List<UserEntity> users = userRepository.findAll();
        List<UserDTO>  results = new ArrayList<>();
        for (UserEntity userEntity : users){
            UserDTO userDTO = modelMapper.map(userEntity, UserDTO.class);
            results.add(userDTO);
        }
        return results;
    }

    @Override
    public Optional<UserDTO> findById(String id) {
        Optional<UserEntity> optionalUserEntity = userRepository.findById(id);
        Optional<UserDTO> userDTO = optionalUserEntity.map( userEntity -> modelMapper.map(userEntity, UserDTO.class));
        return userDTO;
    }

    @Override
    public UserDTO create(UserDTO userDTO) {
        UserEntity userEntity = modelMapper.map(userDTO, UserEntity.class);
        userEntity.setId(UUID.randomUUID().toString().split("-")[0]);
        if(userEntity.getRole() != UserRole.ADMIN)userEntity.setRole(UserRole.USER);
        UserEntity createdEntity = userRepository.save(userEntity);
        return modelMapper.map(createdEntity, UserDTO.class);
    }

    @Override
    public void delete(String id) {
        Optional<UserEntity> userEntity = userRepository.findById(id);
        if(userEntity.isPresent())
        { userRepository.delete(userEntity.get());
        }else{
            throw new NotFoundException("User not found with id: " +id);

        }
    }

    @Override
    public UserDTO update(UserDTO userDTO) {
        String id = userDTO.getId();
        boolean exists = userRepository.existsById(id);
        if(exists){
            UserEntity savedUser = modelMapper.map(userDTO, UserEntity.class);
            UserEntity save = userRepository.save(savedUser);
            return modelMapper.map(save, UserDTO.class);
        }else{
            throw new NotFoundException("User not found with id: " +id);
        }

    }

}
