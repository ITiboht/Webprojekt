package goupb.webproject.Webproject.repository;

import goupb.webproject.Webproject.entity.UserEntity;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository  extends MongoRepository<UserEntity, String> {
}
