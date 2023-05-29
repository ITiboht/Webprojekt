package goupb.webproject.Webproject.repository;

import goupb.webproject.Webproject.dto.UserDTO;
import goupb.webproject.Webproject.entity.UserEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@EnableMongoRepositories
public interface UserRepository  extends MongoRepository<UserEntity, String> {
    Optional<UserEntity> findByUsername(String username);
}
