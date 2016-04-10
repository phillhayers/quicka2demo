package com.hayers.finances.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "TRANSACTION")
public class Transaction
{
    @Id
    @GeneratedValue
    @Column(name = "TRANSACTION_ID")
    private Long transactionId;

    @Column
    @Temporal(TemporalType.DATE)
    private Date date;

    @Column
    private Double in;

    @Column
    private Double out;

    @ManyToOne(targetEntity = Account.class)
    @JsonIgnore
    private Account account;

    @Column
    private String description;

    public Long getTransactionId()
    {
        return transactionId;
    }

    public void setTransactionId(Long transactionId)
    {
        this.transactionId = transactionId;
    }

    public Date getDate()
    {
        return date;
    }

    public void setDate(Date date)
    {
        this.date = date;
    }

    public Double getIn()
    {
        return in;
    }

    public void setIn(Double in)
    {
        this.in = in;
    }

    public Double getOut()
    {
        return out;
    }

    public void setOut(Double out)
    {
        this.out = out;
    }

    public Account getAccount()
    {
        return account;
    }

    public void setAccount(Account account)
    {
        this.account = account;
    }

    public String getDescription()
    {
        return description;
    }

    public void setDescription(String description)
    {
        this.description = description;
    }
}
