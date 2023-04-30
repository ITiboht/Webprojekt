package goupb.webproject.Webproject.repository;

import goupb.webproject.Webproject.entity.ShoesEntity;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ShoeRepository  extends MongoRepository<ShoesEntity, String> {
}
