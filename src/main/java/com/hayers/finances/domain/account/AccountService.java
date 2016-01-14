package com.hayers.finances.domain.account;

import com.hayers.finances.domain.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService
{
    @Autowired
    private AccountRepository accountRepository;

    public Iterable<Account> getActiveAccounts()
    {
        return accountRepository.findByActive(true);
    }

    public Account addAccount(Account account)
    {
        return accountRepository.save(account);
    }

    public void deleteAccount(Long accountId)
    {
        Account account = accountRepository.findOne(accountId);
        account.setActive(false);
        accountRepository.save(account);
    }
}
