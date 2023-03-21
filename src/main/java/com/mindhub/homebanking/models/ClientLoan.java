package com.mindhub.homebanking.models;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
public class ClientLoan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @GenericGenerator(name = "native", strategy = "native")
    private Long clientLoan_id;

    @Column
    private int amount;
    @Column
    private Integer payment;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "client_id")
    private Client clientLoan;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "loan_id")
    private Loan loan;


    public ClientLoan() {
    }

    public ClientLoan(int _amount, Integer _payment, Client _clientLoan, Loan _loan) {
        this.amount = _amount;
        this.payment = _payment;
        this.clientLoan = _clientLoan;
        this.loan = _loan;
    }

    public long getId() {

        return clientLoan_id;
    }

    public int getAmount() {

        return amount;
    }

    public void setAmount(int amount) {

        this.amount = amount;
    }

    public Integer getPayment() {

        return payment;
    }

    public void setPayment(Integer payment) {

        this.payment = payment;
    }

    public Client getClient() {
        return clientLoan;
    }

    public void setClient(Client clientLoan) {

        this.clientLoan = clientLoan;
    }

    public Loan getLoan() {
        return loan;
    }

    public void setLoan(Loan loan) {
        this.loan = loan;
    }
}
