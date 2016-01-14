package com.hayers.finances.domain.account;

import com.hayers.finances.domain.Account;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface AccountRepository extends PagingAndSortingRepository<Account, Long>
{
    Iterable<Account> findByActive(boolean active);
}