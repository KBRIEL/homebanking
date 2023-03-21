package com.mindhub.homebanking.controllers;

import com.mindhub.homebanking.models.Loan;
import com.mindhub.homebanking.models.dtos.ClientLoanDTO;
import com.mindhub.homebanking.repositories.ClientLoanRepository;
import com.mindhub.homebanking.repositories.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("/api")
@RestController
public class LoanController {

    @Autowired
    private ClientLoanRepository clLoanRepository;
    @Autowired
    private LoanRepository lRepository;



    @RequestMapping("/clientsloans")
    public List<ClientLoanDTO> getClientsLoans() {
        return clLoanRepository.findAll().stream().map(cl -> new ClientLoanDTO(cl)).collect(Collectors.toList());
    }



    @RequestMapping("/loans")
    public List<Loan> getLoans() {
        return lRepository.findAll();
    }

}

