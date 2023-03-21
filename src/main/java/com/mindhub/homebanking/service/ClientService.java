package com.mindhub.homebanking.service;

import com.mindhub.homebanking.models.Account;
import com.mindhub.homebanking.models.Client;
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


@Service
@Transactional
public class ClientService {

    @Autowired
    private TransactionRepository txRepository;
    @Autowired
    private ClientRepository clRepository;
    @Autowired
    private AccountRepository accRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    public ClientService() {
    }

    public ClientDTO getClientE(String email) {
        return new ClientDTO(clRepository.findByEmail(email));
    }
    public ClientDTO getClient(Long id) {
        return new ClientDTO(clRepository.findById(id).get());
    }




    public ResponseEntity<Object> register( String firstName, String lastName, String email, String password) {

        if (firstName.isEmpty() || lastName.isEmpty() || email.isEmpty() || password.isEmpty()) {
            return new ResponseEntity<>("Missing data", HttpStatus.FORBIDDEN);
        }

        if (clRepository.findByEmail(email) != null) {
            return new ResponseEntity<>("Name in use", HttpStatus.FORBIDDEN);
        }else{
            Client client = new Client(firstName, lastName, email, passwordEncoder.encode(password));
            clRepository.save(client);

            int num=(int)(Math.floor(Math.random()* 99999999+1));
            String number= "VIN" + num;
            Account account = new Account(number, LocalDateTime.now(), 0, client);
            accRepository.save(account);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }

    }

    public List<ClientDTO> getClients() {

            return clRepository.findAll().stream().map(cl -> new ClientDTO(cl)).collect(Collectors.toList());


    }

    public ClientDTO getClientCurrent(Authentication authentication) {
        return new ClientDTO(clRepository.findByEmail(authentication.getName()));
    }



}
