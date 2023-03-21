package com.mindhub.homebanking.models.dtos;

import com.mindhub.homebanking.models.Account;
import com.mindhub.homebanking.models.Transaction;
import com.mindhub.homebanking.models.TransactionType;


import java.time.LocalDateTime;

public class TransactionDTO {

    private Long transaction_id;

    private TransactionType type;
    private  double amount;
    private LocalDateTime date;

    public TransactionType getType() {
        return type;
    }

    public double getAmount() {
        return amount;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public String getMotive() {
        return motive;
    }

    private String motive;

    public Long getTransaction_id() {
        return transaction_id;
    }

    private Account account;



    public TransactionDTO(Transaction  _transaction){
        this.transaction_id= _transaction.getTransaction_id();
        this.type = _transaction.getType();
        this.amount = _transaction.getAmount();
        this.account = _transaction.getAccount();
        this.motive = _transaction.getMotive();
        this.date = _transaction.getDate();
    }

}
