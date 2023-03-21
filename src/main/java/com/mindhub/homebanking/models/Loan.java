package com.mindhub.homebanking.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
public class Loan {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @GenericGenerator(name = "native", strategy = "native")
    private Long loan_id;

    @Column
    private String name;
    @Column
    private double maxAmount;
    @Column(name = "payments")
    @ElementCollection
    List<Integer> payments = new ArrayList<Integer>();

    @OneToMany(mappedBy = "client_id", fetch = FetchType.EAGER)
    private Set<Client> clients= new HashSet<>();


    public Loan() {
    }

    public Loan( String _name, double _maxAmount, List<Integer> _payments) {
        this.name = _name;
        this.maxAmount = _maxAmount;
        this.payments.addAll(_payments);

    }


    public Long getLoan_id() {
        return loan_id;
    }

    public void setLoan_id(Long loan_id) {
        this.loan_id = loan_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getMaxAmount() {
        return maxAmount;
    }

    public void setMaxAmount(double maxAmount) {
        this.maxAmount = maxAmount;
    }

    public List<Integer> getPayments() {
        return payments;
    }

    public void addPayments(Integer payments) {
        this.payments.add(payments);
    }

    @JsonIgnore
    public Set<Client> getClient() {
        return clients;
    }

    public void addClientLoans(Client client) {
        this.clients.add(client);
    }
}
