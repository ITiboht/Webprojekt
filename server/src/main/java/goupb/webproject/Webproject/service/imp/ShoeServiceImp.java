package goupb.webproject.Webproject.service.imp;

;
import goupb.webproject.Webproject.dto.ShoesDTO;
import goupb.webproject.Webproject.entity.ShoesEntity;
import goupb.webproject.Webproject.exception.NotFoundException;
import goupb.webproject.Webproject.repository.ShoeRepository;
import goupb.webproject.Webproject.service.ShoesService;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ShoeServiceImp implements ShoesService {
    private ModelMapper modelMapper;
    private ShoeRepository shoeRepository;

    public ShoeServiceImp(ShoeRepository shoeRepository, ModelMapper modelmapper) {
        this.shoeRepository = shoeRepository;
        this.modelMapper = modelmapper;
    }

    @Override
    public List<ShoesDTO> findAll() {
        List<ShoesEntity> allShoes = shoeRepository.findAll();
        List<ShoesDTO> result = new ArrayList<>();
        for (ShoesEntity shoesEntity : allShoes) {
            ShoesDTO shoesDTO = modelMapper.map(shoesEntity, ShoesDTO.class);
            result.add(shoesDTO);
        }
        return result;
    }

    @Override
    public Optional<ShoesDTO> findById(String id) {
        Optional<ShoesEntity> optionalShoesEntity = shoeRepository.findById(id);
        Optional<ShoesDTO> shoesDTO = optionalShoesEntity.map(shoesEntity -> modelMapper.map(shoesEntity, ShoesDTO.class));
        return shoesDTO;
    }

    @Override
    public ShoesDTO create(ShoesDTO shoesDTO) {
        ShoesEntity shoesEntity = modelMapper.map(shoesDTO, ShoesEntity.class);
        shoesEntity.setId(UUID.randomUUID().toString().split("-")[0]);
        ShoesEntity saveShoes = shoeRepository.save(shoesEntity);
        return modelMapper.map(saveShoes, ShoesDTO.class);
    }


    @Override
    public void delete(String id) {
        Optional<ShoesEntity> optionalShoesEntity = shoeRepository.findById(id);
        if (optionalShoesEntity.isPresent()) {
            shoeRepository.delete(optionalShoesEntity.get());
        }else{
            throw new NotFoundException("Shoes not found with id: " +id);
        }
    }

    @Override
    public ShoesDTO update(ShoesDTO shoesDTO) {
        String id = shoesDTO.getId();
        boolean exists = shoeRepository.existsById(id);

        if (exists) {
            ShoesEntity shoesEntity = modelMapper.map(shoesDTO, ShoesEntity.class);
            ShoesEntity savedShoes = shoeRepository.save(shoesEntity);
            return modelMapper.map(savedShoes, ShoesDTO.class);
        } else{

            throw new NotFoundException("Shoes not found with id: " +id);
        }

    }

}

