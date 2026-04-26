package com.aaron.tradingapp.service;

import com.aaron.tradingapp.model.Stock;
import com.aaron.tradingapp.repository.StockRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StockService {
    private final StockRepository stockRepository;
    public StockService(StockRepository stockRepository) {
        this.stockRepository = stockRepository;
    }

    public List<Stock> listAll() {
        return stockRepository.findAll();
    }
}
