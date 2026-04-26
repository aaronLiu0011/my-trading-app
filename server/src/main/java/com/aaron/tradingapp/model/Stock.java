package com.aaron.tradingapp.model;

import jakarta.persistence.*;

@Entity
@Table(name = "stocks")
public class Stock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String ticker;

    @Enumerated(EnumType.STRING)
    @Column(name = "exchange_market", nullable = false)
    private Market exchangeMarket;

    @Column(name = "shares_issued")
    private Long sharesIssued;

    @Column(name = "sector33_id")
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
