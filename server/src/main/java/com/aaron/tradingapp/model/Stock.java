package com.aaron.tradingapp.model;

import org.springframework.data.annotation.Id;

public class Stock {

    @Id
    private Integer id;

    private String name;

    private String ticker;

    private Market exchangeMarket;

    private Long sharesIssued;

    private Long sector33Id;

    public Stock() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTicker() {
        return ticker;
    }

    public void setTicker(String ticker) {
        this.ticker = ticker;
    }

    public Market getExchangeMarket() {
        return exchangeMarket;
    }

    public void setExchangeMarket(Market exchangeMarket) {
        this.exchangeMarket = exchangeMarket;
    }

    public Long getSharesIssued() {
        return sharesIssued;
    }

    public void setSharesIssued(Long sharesIssued) {
        this.sharesIssued = sharesIssued;
    }

    public Long getSector33Id() {
        return sector33Id;
    }

    public void setSector33Id(Long sector33Id) {
        this.sector33Id = sector33Id;
    }
}
