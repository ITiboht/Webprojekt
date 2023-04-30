package goupb.webproject.Webproject.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.util.List;
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ShoesDTO {
    private String id;
    private String brand;
    private String name;
    private String type;
    private List<Integer> sizes;
    private String gender;
    private int price;
    private String color;
}
