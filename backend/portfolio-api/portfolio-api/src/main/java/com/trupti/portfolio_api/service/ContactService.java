package com.trupti.portfolio_api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.trupti.portfolio_api.model.Contact;
import com.trupti.portfolio_api.repository.ContactRepository;

@Service
public class ContactService {

    private final ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    // Save a new contact
    public Contact saveContact(Contact contact) {
        // No need to set createdAt or status manually; handled by @PrePersist in entity
        return contactRepository.save(contact);
    }

    // Get all contacts
    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }
}
