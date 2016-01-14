package com.hayers.finances.domain.account;

import com.hayers.finances.domain.Account;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/accounts")
public class AccountController
{
    private static final Logger logger = Logger.getLogger(AccountController.class);

    @Autowired
    public AccountService accountService;

    @CrossOrigin
    @ResponseBody
    @RequestMapping(method = RequestMethod.GET)
    public Iterable<Account> getActiveAccounts()
    {
        return accountService.getActiveAccounts();
    }

    @CrossOrigin(origins = "*")
    @ResponseStatus(HttpStatus.ACCEPTED)
    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public Account saveAccount(@RequestBody Account account)
    {
        logger.info("Saving account");
        return accountService.addAccount(account);
    }

}
