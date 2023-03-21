package com.mindhub.homebanking.models.dtos;

import com.mindhub.homebanking.models.Client;
import com.mindhub.homebanking.models.ClientLoan;

public class ClientLoanDTO {



    private long clientLoan_id;
    private long loan_id;
    private String name;
    private Integer payments;
    private int amount;

    public ClientLoanDTO() {
    }

    public ClientLoanDTO(ClientLoan _clientLoan) {
        this.clientLoan_id = _clientLoan.getId();
        this.loan_id = _clientLoan.getLoan().getLoan_id();
        this.name = _clientLoan.getLoan().getName();
        this.payments = _clientLoan.getPayment();
        this.amount = _clientLoan.getAmount();

    }

    public long getClientLoan_id() {
        return clientLoan_id;
    }

    public long getLoan_id() {
        return loan_id;
    }

    public String getName() {
        return name;
    }

    public Integer getPayments() {
        return payments;
    }

    public int getAmount() {
        return amount;
    }
}
