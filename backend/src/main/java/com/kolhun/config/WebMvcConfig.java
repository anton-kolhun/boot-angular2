package com.kolhun.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class WebMvcConfig extends WebMvcConfigurerAdapter {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedOrigins("*");
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/**/*.html").addResourceLocations("classpath:/frontend/");
        registry.addResourceHandler("/**/*.css").addResourceLocations("classpath:/frontend/");
        registry.addResourceHandler("/**/*.js").addResourceLocations("classpath:/frontend/");
    }
}
