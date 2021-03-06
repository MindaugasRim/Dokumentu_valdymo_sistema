package lt.akademijait.bronza.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;

@Controller
public class FileUploadController {


    //this is for a download. It is still in progress and does not work
//    @Autowired
//    private ApplicationContext applicationContext;
//
//    @GetMapping(value = "/files-multi/{filename:.+}")
//    @ResponseBody
//    public ResponseEntity serveFile(@PathVariable String fileName) {
//        Resource file = applicationContext.getResource("file:/home/paulius/Desktop/" + fileName);
//        if (file.exists()) {
//            HttpHeaders headers = new HttpHeaders();
//            headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"");
//            headers.add("Access-Control-Expose-Headers", HttpHeaders.CONTENT_DISPOSITION + ","
//                    + HttpHeaders.CONTENT_LENGTH);
//            return ResponseEntity.ok().headers(headers).body(file);
//        }
//        return ResponseEntity.notFound().build();
//
//    }


    @RequestMapping(value = "/files", method = RequestMethod.POST,
            consumes = "multipart/form-data", produces = "application/json")
    public ResponseEntity mutipleFileUpload(HttpServletRequest req,
                                            @RequestParam(value = "file", required = false) MultipartFile[] files)
            throws IOException {
        //this is used to get the current absolute path. Later the temp file is deleted
        File tempFile = new File("temptest9954332543.txt");
        boolean bool = tempFile.createNewFile();
        System.out.println("TempTestFile created: " + bool);
        String fileSeparator = System.getProperty("file.separator");
        Path currentAbsolutePath = Paths.get("temptest9954332543.txt").toAbsolutePath().getParent();
        tempFile.delete();


        String userName = "/user1-dir";
        int userID = 2;

        File userDirectory = new File(currentAbsolutePath + fileSeparator + "uploaded-files" + fileSeparator + userName);
        userDirectory.mkdirs();
        for (MultipartFile file : files) {
            File fileToSave = new File(userDirectory, userID + "-"+getCurrentLocalDateTimeStamp()+"-" + file.getOriginalFilename());
//            fileToSave.mkdirs();

            try {
                file.transferTo(fileToSave); //Transfer or Saving in local memory
            } catch (IllegalStateException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }


        return null;
    }
    public String getCurrentLocalDateTimeStamp() {
        return LocalDateTime.now()
                .format(DateTimeFormatter.ofPattern("yyyy-MM-dd-HH-mm-ss-SSS"));
    }
}


