package com.hayers.finances.domain.bank;

import com.hayers.finances.domain.Bank;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/banks")
public class BankController
{
    @Autowired
    public BankService bankService;

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<Bank> getBanks()
    {
        return bankService.getAllBanks();
    }
}
