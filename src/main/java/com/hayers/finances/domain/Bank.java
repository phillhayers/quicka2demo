package com.hayers.finances.domain;

import javax.persistence.*;

@Entity
@Table(name = "BANK")
public class Bank
{
    @Id
    @GeneratedValue
    @Column(name = "BANK_ID")
    private Long bankId;

    @Column(name = "NAME")
    private String name;

    @Column(name = "LOGO_FILE")
    private String logoFile;

    public Long getBankId()
    {
        return bankId;
    }

    public void setBankId(Long bankId)
    {
        this.bankId = bankId;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getLogoFile()
    {
        return logoFile;
    }

    public void setLogoFile(String logoFile)
    {
        this.logoFile = logoFile;
    }
}
