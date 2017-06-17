package com.app.charts.UIControllers;

import org.springframework.web.bind.annotation.RequestMapping;

@org.springframework.web.bind.annotation.RestController
@RequestMapping("/api")
public class RestController {
    @RequestMapping("/hello")
    public String greet() {
        return "Hello from the other side !!!";
    }
}

