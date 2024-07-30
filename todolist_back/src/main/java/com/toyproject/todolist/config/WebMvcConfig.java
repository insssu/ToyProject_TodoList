package com.toyproject.todolist.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")          // 스프링부트 전역에 설정한대로 바꾸겠다. /**는 모든 요청들에 대한 CrossOrigin을 다 해주겠다.
                .allowCredentials(true)     // 쿠키의 무상태성을 설정하는 부분
                .allowedMethods("*")        // "" 안의 메서드만 사용하게 할 수 있음
                .allowedOrigins("http://localhost:3000");       // 3000번에서만 날리는 요청을 받겠다
    }
}
