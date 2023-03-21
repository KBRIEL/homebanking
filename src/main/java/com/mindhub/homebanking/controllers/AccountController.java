package com.mindhub.homebanking.controllers;


import com.mindhub.homebanking.models.dtos.AccountDTO;
import com.mindhub.homebanking.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;




@RestController
@RequestMapping("/api")
public class AccountController {

    @Autowired
    private AccountService accService;

    @RequestMapping("/accounts")
    public List<AccountDTO> getAll(){
      return accService.getAll();
        //  return accRepository.findAll().stream().map(a -> new AccountDTO(a)).collect(toList());
    }

    @RequestMapping("/accounts/{id}")
    public AccountDTO getAccount(@PathVariable Long id){
        return accService.getAccount(id);
        //return accRepository.findById(id).map(a-> new AccountDTO(a)).orElse(null);
    }
    @PostMapping( "/clients/current/accounts")
    public ResponseEntity<Object> createAccount(Authentication authentication){
        return accService.createAccount(authentication);
    }

}