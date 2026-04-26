package com.aaron.tradingapp.model;

import org.springframework.data.annotation.Id;

public class Sector33 {

    @Id
    private Long id;

    private String name;

    private String code;

    public Sector33() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
