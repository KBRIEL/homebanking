package com.mindhub.homebanking.service;

import com.mindhub.homebanking.models.Account;
import com.mindhub.homebanking.models.Client;
import com.mindhub.homebanking.models.Transaction;
import com.mindhub.homebanking.models.dtos.ClientDTO;
import com.mindhub.homebanking.repositories.AccountRepository;
import com.mindhub.homebanking.repositories.ClientRepository;
import com.mindhub.homebanking.repositories.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import static com.mindhub.homebanking.models.TransactionType.CREDITO;
import static com.mindhub.homebanking.models.TransactionType.DEBITO;

@Service
@Transactional
public class TransactionService {

    @Autowired
    private TransactionRepository txRepository;
    @Autowired
    private ClientRepository clRepository;
    @Autowired
    private AccountRepository accRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    public TransactionService() {
    }


    public boolean parameters( String description, Double amount,
                               Account originAccount, Account destinationAccount){
        if (description.isEmpty() || amount == null || amount.isNaN() || amount.isInfinite() || originAccount.getNumber().isEmpty() || destinationAccount.getNumber().isEmpty()) {
            return false;
        }else{
            return true;
        }

    }

    public boolean parametersAccount( Account originAccount, Account destinationAccount){

        return originAccount == null || destinationAccount == null || originAccount.getNumber().equals(destinationAccount.getNumber());
    }

    public boolean parametersAmount(Double amount, Client client,Account originAccount){

        return amount >0 || !client.getAccounts().contains(originAccount)||originAccount.getBalance() < amount;
    }


    public ResponseEntity<Object> createTransaction(Client client, String description, Double amount,
                                                     Account originAccount, Account destinationAccount) {
        if (this.parameters(description,amount,originAccount,destinationAccount) && this.parametersAmount(amount, client,originAccount) && !this.parametersAccount(originAccount,destinationAccount) ){


            originAccount.setBalance(originAccount.getBalance() - amount);
            Transaction transactionDebit = new Transaction(DEBITO, amount, description, LocalDateTime.now(), originAccount);

            destinationAccount.setBalance(destinationAccount.getBalance() + amount);
            Transaction transactionCredit = new Transaction(CREDITO, amount, description, LocalDateTime.now(), destinationAccount);


            txRepository.save(transactionDebit);
            txRepository.save(transactionCredit);
            accRepository.save(originAccount);
            accRepository.save(destinationAccount);


            return new ResponseEntity<>("Transaction success", HttpStatus.CREATED);
        }else{
            return new ResponseEntity<>("the transaction could not be carried out", HttpStatus.FORBIDDEN);

        }






    }

}
