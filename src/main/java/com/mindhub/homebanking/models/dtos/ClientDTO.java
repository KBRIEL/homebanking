package com.mindhub.homebanking.models.dtos;

import com.mindhub.homebanking.models.Client;
import java.util.HashSet;
import java.util.Set;


import static java.util.stream.Collectors.toSet;

public class ClientDTO {





    private Long client_id;
    private String firstName;

    private String lastName;

    private String email;
    private Set<AccountDTO> accounts = new HashSet<>();
    private Set<ClientLoanDTO> loans = new HashSet<>();


    private Set<CardDTO> cards = new HashSet<>();

    public Set<ClientLoanDTO> getLoans() {
        return loans;
    }

    public ClientDTO(Client _client){
        this.client_id= _client.getId();
        this.firstName=_client.getFirstName();
        this.lastName= _client.getLastName();
        this.email= _client.getEmail();
        this.accounts= _client.getAccounts().stream().map(acc ->new AccountDTO(acc)).collect(toSet()) ;
        this.loans = _client.getLoans().stream().map(cl->new ClientLoanDTO(cl)).collect(toSet());
        this.cards = _client.getCards().stream().map(card->new CardDTO(card)).collect(toSet());
    }


    public Long getClient_id() {
        return client_id;
    }

    public void setClient_id(Long client_id) {
        this.client_id = client_id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<AccountDTO> getAccounts() {
        return accounts;
    }
   public Set<CardDTO> getCards() {
        return cards;
    }



}
