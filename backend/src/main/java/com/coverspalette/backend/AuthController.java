package com.coverspalette.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")

public class AuthController {

    @Autowired
    UserRepository repo;

   @PostMapping("/signup")
public String signup(@RequestBody User user){

    if(repo.existsByEmail(user.getEmail())){
        return "Email Already Exists";
    }

    repo.save(user);

    return "Signup Success";
}
    @PostMapping("/login")
    public String login(@RequestBody User user){

        User existingUser=
        repo.findByEmail(user.getEmail());

        if(existingUser!=null &&
        existingUser.getPassword()
        .equals(user.getPassword())){

            return "success";

        }

        return "failed";

    }

}