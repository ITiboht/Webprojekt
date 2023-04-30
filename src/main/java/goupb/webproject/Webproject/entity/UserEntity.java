package goupb.webproject.Webproject.entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "Users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserEntity {
    @Id
    private String id;
    private String userName;
    private String email;
    private String password;
}
