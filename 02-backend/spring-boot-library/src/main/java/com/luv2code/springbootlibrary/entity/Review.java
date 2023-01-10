package com.luv2code.springbootlibrary.entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "review")
@Data
public class Review {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(name = "user_email")
    String userEmail;

    @Column(name = "date")
    @CreationTimestamp
    Date date;

    @Column(name = "rating")
    Double rating;

    @Column(name = "book_id")
    Long bookId;

    @Column(name = "review_description")
    String reviewDescription;
}
