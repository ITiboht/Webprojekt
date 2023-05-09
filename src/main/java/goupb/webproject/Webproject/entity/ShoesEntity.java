package goupb.webproject.Webproject.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import java.util.List;


@Document(collection = "Shoes")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ShoesEntity {
    @Id
    private String id;
    private String brand;
    private String name;
    private String type;

    private List<Integer> sizes;

    private String gender;

    private int price;
    private String color;

}
