package com.mindhub.homebanking.controllers;


import com.mindhub.homebanking.models.CardColor;
import com.mindhub.homebanking.models.CardType;
import com.mindhub.homebanking.models.dtos.ClientDTO;
import com.mindhub.homebanking.service.CardService;
import com.mindhub.homebanking.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api")
public class CardController {

    @Autowired
    private CardService cdService;




    @PostMapping("/clients/current/cards")
    public ResponseEntity<Object> createCard(Authentication authentication, CardColor color, CardType type) {
    return cdService.createCard(authentication, color, type);

    }

}
