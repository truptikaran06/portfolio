package com.trupti.portfolio_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.trupti.portfolio_api.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}
