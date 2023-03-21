package com.mindhub.homebanking.models;


import org.hibernate.annotations.GenericGenerator;
import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @GenericGenerator(name = "native", strategy = "native")
    private Long client_id;
    @Column
    private String firstName;
    @Column
    private String lastName;
    @Column
    private String email;
    @Column
    private String password;



    public Set<ClientLoan> getLoans() {

        return loans;
    }

    public void addLoans(ClientLoan loan) {
       // this.loans.add(loan);
    }

    @OneToMany(mappedBy = "clientLoan_id", fetch = FetchType.EAGER)
    private Set<ClientLoan> loans = new HashSet<>();


    public void setPassword(String password) {
        this.password = password;
    }

    @OneToMany(mappedBy="client_id", fetch=FetchType.EAGER)
   Set<Account> accounts = new HashSet<>();

    @OneToMany(mappedBy="client_id", fetch=FetchType.EAGER)
    Set<Card> cards = new HashSet<>();



    public Client(String _first, String _last, String _email, String _pass) {
        this.firstName=_first;
        this.lastName=_last;
        this.email=_email;
        this.password= _pass;
    }

    public Long getId() {
        return client_id;
    }



    public String getFirstName() {
        return firstName;
    }

    public Client() {

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


    public void addAccount(Account account){
        account.setClient(this);
        accounts.add(account);
    }

    public Set<Account> getAccounts() {
        return accounts;
    }

    public Long getClient_id() {
        return client_id;
    }

    public Set<Card> getCards() {
        return cards;
    }

    public String getPassword() {
        return password;
    }


}
