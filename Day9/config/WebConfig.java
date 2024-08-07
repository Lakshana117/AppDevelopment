// package com.tech.course_mania.config;

// import org.springframework.context.annotation.Configuration;
// import org.springframework.lang.NonNull;
// import org.springframework.web.servlet.config.annotation.CorsRegistry;
// import org.springframework.web.servlet.config.annotation.EnableWebMvc;
// import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// @Configuration
// @EnableWebMvc
// public class CorsConfig implements WebMvcConfigurer {

// public void addCorsMappings(@NonNull CorsRegistry registry) {
// registry.addMapping("/**")
// .allowedOrigins("http://localhost:3000/")
// .allowedMethods("GET", "POST", "PUT", "DELETE")
// .allowedHeaders("*");
// }
// }
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.web.servlet.config.annotation.CorsRegistry;
// import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// @Configuration
// public class WebConfig implements WebMvcConfigurer {

//     @Override
//     public void addCorsMappings(CorsRegistry registry) {
//         registry.addMapping("/**")
//             .allowedOrigins("http://localhost:3000") // Change to your frontend URL
//             .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
//             .allowedHeaders("*")
//             .allowCredentials(true);
//     }
// }
