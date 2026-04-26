package com.aaron.tradingapp.controller;

import com.aaron.tradingapp.model.Stock;
import com.aaron.tradingapp.repository.StockRepository;
import com.aaron.tradingapp.service.StockService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/stocks")

public class StockController {
    private final StockService stockService;
    public StockController(StockService stockService) {
        this.stockService = stockService;
    }

    @GetMapping
    public List<Stock> getStocks() {
        return stockService.listAll();
    }
}
