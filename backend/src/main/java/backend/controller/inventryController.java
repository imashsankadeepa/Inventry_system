package backend.controller;

import backend.model.inventryModel;
import backend.repository.inventryRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import backend.exception.inventryNotFoundException;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class inventryController {

    @Autowired
    private inventryRepository InventryRepository;

    // Insert item
    @PostMapping("/inventry")
    public inventryModel newinventryModel(@RequestBody inventryModel newinventryModel) {
        System.out.println("Received inventryModel: " + newinventryModel); // ✅ Log for debugging
        return InventryRepository.save(newinventryModel);
    }

    // Upload image
    @PostMapping("/inventry/itemImg")
    public String itemImage(@RequestParam("file") MultipartFile file) {
        String folder = "src/main/uploads/";
        String itemImage = file.getOriginalFilename();

        try {
            File uploadDir = new File(folder);
            if (!uploadDir.exists()) {
                uploadDir.mkdir(); // ✅ Use mkdirs() for nested directories
            }
            file.transferTo(Paths.get(folder + itemImage));
        } catch (IOException e) {
            e.printStackTrace();
            return "Error uploading file: " + itemImage;
        }

        return itemImage;
    }

    // Get all items
    @GetMapping("/inventry")
    List<inventryModel> getallItems() {
        return InventryRepository.findAll();
    }

    // Get item by ID
    @GetMapping("/inventry/{id}")
    inventryModel getItemId(@PathVariable Long id) {
        return InventryRepository.findById(id).orElseThrow(() -> new inventryNotFoundException(id));
    }

    private final String UPLOAD_DIR = "src/main/uploads/";

    // Serve image
    @GetMapping("/uploads/{filename}")
    public ResponseEntity<FileSystemResource> getimage(@PathVariable String filename) {
        File file = new File(UPLOAD_DIR + filename);
        if (!file.exists()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(new FileSystemResource(file));
    }

    @PutMapping("/inventry/{id}")
    public inventryModel updateitem(
            @RequestPart(value = "itemDetails") String itemDetails,
            @RequestPart(value = "file", required = false) MultipartFile file,
            @PathVariable Long id
    ) {
        System.out.println(" itemDetails :" + itemDetails);
        if (file != null) {
            System.out.println("File received :" + file.getOriginalFilename());
        } else {
            System.out.println("No File Uploaded");
        }
        ObjectMapper mapper = new ObjectMapper();
        inventryModel newinventry;
        try {
            newinventry = mapper.readValue(itemDetails, inventryModel.class);
        } catch (Exception e) {
            throw new RuntimeException("Error parsing itemDetails", e);

        }

        return InventryRepository.findById(id).map(existinginventry -> {
            existinginventry.setItemId(newinventry.getItemId());
            existinginventry.setItemName(newinventry.getItemName());
            existinginventry.setItemCategory(newinventry.getItemCategory());
            existinginventry.setItemQty(newinventry.getItemQty());
            existinginventry.setItemDetails(newinventry.getItemDetails());

            if (file != null && !file.isEmpty()) {
                String folder = "src/main/uploads";
                String itemImage = file.getOriginalFilename();
                try {
                    file.transferTo(Paths.get(folder + itemImage));
                    existinginventry.setItemImage(itemImage);
                } catch (IOException e) {
                    throw new RuntimeException("error Saving file", e);
                }


            }
            return InventryRepository.save(existinginventry);
        }).orElseThrow(() -> new inventryNotFoundException(id));
    }

    //deletr part
    @DeleteMapping("/inventry/{id}")
    String deleteItem(@PathVariable Long id) {
        // cheak item is exist db
        inventryModel inventryItem = InventryRepository.findById(id)
                .orElseThrow(() -> new inventryNotFoundException(id));
        //image delete part

        String itemImage = inventryItem.getItemImage();
        if (itemImage != null && !itemImage.isEmpty()) {
            File imageFile = new File("src/main/uploads" + itemImage);
            if (imageFile.delete()) {
                System.out.println("Image deleted");

            } else {
                System.out.println("Fail to delete image");
            }
        }

        //Delete item from the repo
        InventryRepository.deleteById(id);
        return "data with id" +id+ "and image deleted";
    }
}
