package com.aaron.tradingapp.repository;

import com.aaron.tradingapp.model.Stock;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StockRepository extends JpaRepository<Stock, Long> {
}
