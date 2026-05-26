package com.coverspalette.backend;

import org.springframework.stereotype.Service;

@Service
public class AuthService {

    public boolean checkPassword(
    String enteredPassword,
    String savedPassword){

        return enteredPassword
        .equals(savedPassword);

    }

}
