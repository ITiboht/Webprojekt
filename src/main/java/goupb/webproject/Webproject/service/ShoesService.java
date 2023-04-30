package goupb.webproject.Webproject.service;

import goupb.webproject.Webproject.dto.ShoesDTO;

import org.bson.types.ObjectId;

import java.util.List;
import java.util.Optional;

public interface ShoesService {

    List<ShoesDTO> findAll();

    Optional<ShoesDTO> findById(String id);

    ShoesDTO create(ShoesDTO shoesDTO);

    void delete(String id);

    ShoesDTO update(ShoesDTO shoesDTO);
}
