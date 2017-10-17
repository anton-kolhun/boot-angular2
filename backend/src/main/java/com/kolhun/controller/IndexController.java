package com.kolhun.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping
public class IndexController {

    @RequestMapping
    public String index() {
        return "index";
    }

    @RequestMapping("getSmth")
    @ResponseBody
    public String getSmth() {
        return "work it out";
    }
}
