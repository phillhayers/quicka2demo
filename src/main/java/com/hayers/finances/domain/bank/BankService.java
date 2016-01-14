package com.hayers.finances.domain.bank;

import com.hayers.finances.domain.Bank;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BankService
{
    @Autowired
    private BankRepository bankRepository;

    public Iterable<Bank> getAllBanks()
    {
        return bankRepository.findAll();
    }
}
