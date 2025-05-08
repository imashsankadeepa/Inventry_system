package backend.repository;
import backend.model.inventryModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface inventryRepository extends JpaRepository<inventryModel, Long> {


}
