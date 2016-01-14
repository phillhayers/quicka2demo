package com.hayers.finances.domain.bank;

import com.hayers.finances.domain.Bank;
import org.springframework.data.repository.CrudRepository;

public interface BankRepository extends CrudRepository<Bank, Long>
{
}
