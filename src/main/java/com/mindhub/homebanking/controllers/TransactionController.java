package com.mindhub.homebanking.controllers;



import com.mindhub.homebanking.models.Account;
import com.mindhub.homebanking.models.Client;
import com.mindhub.homebanking.repositories.AccountRepository;
import com.mindhub.homebanking.repositories.ClientRepository;
import com.mindhub.homebanking.repositories.TransactionRepository;
import com.mindhub.homebanking.service.ClientService;
import com.mindhub.homebanking.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;



@Controller
@RequestMapping("/api")
public class TransactionController {
    @Autowired
    private TransactionRepository txRepository;
    @Autowired
    private AccountRepository accRepository;
    @Autowired
    private ClientRepository clRepository;
    @Autowired
    private ClientService clService;
    @Autowired
    private TransactionService txService;



    @Transactional
    @PostMapping("/transactions")
    public ResponseEntity<Object> createTransaction(
            Authentication auth, @RequestParam String description,
            @RequestParam Double amount, @RequestParam String originAccount, @RequestParam String destinationAccount) {
       Client client = clRepository.findByEmail(auth.getName());
       Account origin= accRepository.findByNumber(originAccount);
       Account destination= accRepository.findByNumber(destinationAccount);

        return  this.txService.createTransaction(client,description,amount,origin, destination);





      // new ResponseEntity<>("Transaction success", HttpStatus.CREATED);




    }

}
