package backend.exception;

public class inventryNotFoundException extends RuntimeException{

    public inventryNotFoundException(Long id){
        super("could not find id" + id);
    }
    public inventryNotFoundException(String message){
        super(message);
    }
}
