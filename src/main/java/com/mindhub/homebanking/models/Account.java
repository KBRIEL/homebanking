package com.mindhub.homebanking.models;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Account {


    @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
  @GenericGenerator(name = "native", strategy = "native")
    private Long account_id;
    @Column
    private String number;
    @Column
    private LocalDateTime creationDate;
    @Column
    private Double balance;

    public void setClient(Client client_id) {
        this.client_id = client_id;
    }

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="client_id")
    private Client client_id;

    @OneToMany(mappedBy="account_id", fetch=FetchType.EAGER)
    Set<Transaction> transacctions = new HashSet<>();

    public Set<Transaction> getTransacctions() {
        return transacctions;
    }

    public Account() {
  }

    public void setBalance(Double balance) {
        this.balance = balance;
    }

    public Account(String _number, LocalDateTime _creationDate, double _balance, Client _client) {
      this.number=_number;
      this.creationDate=_creationDate;
      this.balance= _balance;
      this.client_id=_client;
  }

  public Long getId() {
    return account_id;
  }

  public Long getAccount_id() {
        return account_id;
    }

    public String getNumber() {
        return number;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public Double getBalance() {
        return balance;
    }

    public Client getClient_id() {
        return client_id;
    }

}
