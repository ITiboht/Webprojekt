package goupb.webproject.Webproject.configuration;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Configuration for JWT related beans.
 */
@Configuration
public class JwtConfiguration {

    @Autowired
    private JwtConfigurationProperties jwtConfigurationProperties;

    @Bean
    public Algorithm hmac256Algorithm() {
        return Algorithm.HMAC256(jwtConfigurationProperties.getSecret());
    }
    //used in jwtUtil

    @Bean
    public JWTVerifier jwtVerifier() {
        return JWT.require(hmac256Algorithm())
                .withIssuer(jwtConfigurationProperties.getIssuer())
                .build();
    }

}