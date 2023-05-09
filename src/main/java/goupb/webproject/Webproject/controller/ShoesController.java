package goupb.webproject.Webproject.controller;
import goupb.webproject.Webproject.dto.ShoesDTO;
import goupb.webproject.Webproject.service.ShoesService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/shoes")

public class ShoesController {

    private ShoesService shoesService;

    public ShoesController(ShoesService shoesService) {
        this.shoesService = shoesService ;
    }


    @GetMapping("/all")
    public List<ShoesDTO> findAll(){
        List<ShoesDTO> shoes = shoesService.findAll();
        return  shoes;
    }

    @GetMapping("/all/{id}")
    public Optional<ShoesDTO> findById(@PathVariable String id){
        return shoesService.findById(id);
    }

    @PostMapping("/post")
    public ShoesDTO create(@RequestBody ShoesDTO shoesDTO){
        shoesService.create(shoesDTO);
        return shoesDTO;
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id){
        shoesService.delete(id);
        return ResponseEntity.status(204).build();
    }
    @PutMapping("/update")
    public ResponseEntity<ShoesDTO> update(@RequestBody ShoesDTO shoesDTO){
        ShoesDTO updatedShoes = shoesService.update(shoesDTO);
        return ResponseEntity.status(201).body(updatedShoes);
    }

}
