package com.kaiqiu.lms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

import com.kaiqiu.lms.config.JPAConfig;

@Import({ JPAConfig.class })
@SpringBootApplication
public class LMSApplication {
	public static void main(String[] args) {
		SpringApplication.run(LMSApplication.class, args);
	}
}
