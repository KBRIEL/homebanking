package com.mindhub.homebanking.models;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @GenericGenerator(name = "native", strategy = "native")
    private Long card_id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="client_id")
    private Client client_id;

    @Column
    private CardColor color;
    @Column
    private CardType type;
    @Column
    private String number;
    @Column
    private int cvv;
    @Column
    private LocalDateTime issueDate;
    @Column
    private LocalDateTime expirationDate;






    public Card() {
    }

    public Card(Client _client_id, CardColor _color, CardType _type, String _number, int _clave, LocalDateTime _issue, LocalDateTime _expiration) {
        this.client_id= _client_id;

        this.color = _color;
        this.type = _type;
        this.number = _number;
        this.cvv = _clave;
        this.issueDate = _issue;
        this.expirationDate = _expiration;
    }

    public Long getCard_id() {
        return card_id;
    }

    public Client getClient_id() {
        return client_id;
    }

    public String getNumber() {
        return number;
    }


    public LocalDateTime getIssueDate() {
        return issueDate;
    }

    public LocalDateTime getExpirationDate() {
        return expirationDate;
    }

    public CardColor getColor() {
        return color;
    }

    public CardType getType() {
        return type;
    }

    public int getCvv() {
        return cvv;
    }

    public String getCardHolder() {
        return client_id.getFirstName() + client_id.getLastName();
       // return cardHolder;
    }
}
