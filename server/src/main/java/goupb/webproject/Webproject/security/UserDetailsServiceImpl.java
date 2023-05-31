package goupb.webproject.Webproject.security;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import goupb.webproject.Webproject.entity.UserEntity;
import goupb.webproject.Webproject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * Custom implementation of {@link UserDetailsService} to retrieve a given user by its name.
 */
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private UserRepository userRepository;
    @Autowired
    public UserDetailsServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Optional<UserEntity> user = userRepository.findByUsername(username);
        if (user.isPresent()) {
            UserEntity userEntity = user.get();
            List<String> roles = Collections.singletonList(userEntity.getRole().name()); // Convert UserRole enum to String
            return User.builder()
                    .username(userEntity.getUsername())
                    .password(userEntity.getPassword())
                    .roles(roles.toArray(new String[0]))
                    .build();
        } else {
            throw new UsernameNotFoundException("User not found");
        }


    }




}