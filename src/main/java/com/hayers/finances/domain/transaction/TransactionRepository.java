package com.hayers.finances.domain.transaction;

import com.hayers.finances.domain.Transaction;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface TransactionRepository extends PagingAndSortingRepository<Transaction, Long>
{
}
