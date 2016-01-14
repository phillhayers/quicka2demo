package com.hayers.finances.domain;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "ACCOUNT")
public class Account
{
    @Id
    @GeneratedValue
    @Column(name = "ACCOUNT_ID")
    private Long accountId;

    @OneToMany
    @ManyToOne(targetEntity = Bank.class)
    @JoinColumn(name = "BANK_ID")
    private Bank bank;

    @Column(name = "ACCOUNT_NAME")
    @NotNull
    private String name;

    @Column
    @JsonIgnore
    private boolean active = true;

    public Long getAccountId()
    {
        return accountId;
    }

    public void setAccountId(Long accountId)
    {
        this.accountId = accountId;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public boolean isActive()
    {
        return active;
    }

    public void setActive(boolean active)
    {
        this.active = active;
    }

    public Bank getBank()
    {
        return bank;
    }

    public void setBank(Bank bank)
    {
        this.bank = bank;
    }
}
