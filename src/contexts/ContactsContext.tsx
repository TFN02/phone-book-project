import React, { createContext, useContext, useEffect, useState } from 'react';
import { useQuery, ApolloClient } from '@apollo/client';
import { ADD_NEW_CONTACT, DELETE_CONTACT, GET_CONTACTS_LIST, GET_CONTACT_DETAIL } from './queries';

export interface Contact {
  created_at: string;
  first_name: string;
  id: number;
  last_name: string;
  phones: {
    number: string;
  }[];
  isFavorite: boolean;
}

export interface ContactInput {
  first_name: string;
  last_name: string;
  phones: {
    number: string;
  }[];
}

interface ContactsContextType {
  contacts: Contact[];
  loading: boolean;
  error: any;
  contactDetail: Contact | null;
  getContactDetail: (contactId: number) => Promise<void>;
  addNewContact: (newContact: ContactInput) => Promise<void>;
  toggleFavorite: (contactId: number) => void;
  deleteContact: (contactId: number) => Promise<void>;
}

const ContactsContext = createContext<ContactsContextType | undefined>(undefined);

export function ContactsProvider({
  children,
  client,
}: {
  children: React.ReactNode;
  client: ApolloClient<any>;
}) {
  // const storedContacts = localStorage.getItem("contacts");
  // const initialContacts = storedContacts ? JSON.parse(storedContacts) : [];

  const [contacts, setContacts] = useState<Contact[]>([]);

  const { loading, error, data } = useQuery(GET_CONTACTS_LIST);
  const [contactDetail, setContactDetail] = useState<Contact | null>(null);

  useEffect(() => {
    if (data) {
      const updateContact: Contact[] = data.contact.map((contact: Contact) => ({
        ...contact,
        isFavorite: false,
      }));
      const storedContacts = localStorage.getItem("contacts");

      if (storedContacts) {
        // Jika ada data yang tersimpan di localStorage, gunakan data tersebut
        setContacts(JSON.parse(storedContacts));
      } else {
        // Jika tidak ada data di localStorage, gunakan data dari GraphQL
        setContacts(updateContact);
      }
    }
  }, [data]);

  const getContactDetail = async (contactId: number): Promise<void> => {
    try {
      const result = await client.query({
        query: GET_CONTACT_DETAIL,
        variables: { id: contactId },
      });
      setContactDetail(result.data.contact_by_pk);
    } catch (error) {
      console.error('Error fetching contact detail:', error);
    }
  };

  const addNewContact = async (newContact: ContactInput): Promise<void> => {
    try {
      const result = await client.mutate({
        mutation: ADD_NEW_CONTACT,
        variables: {
          first_name: newContact.first_name,
          last_name: newContact.last_name,
          phones: newContact.phones,
          },
      });
  
      // Perbarui data kontak setelah menambahkan kontak baru
      if (result.data) {
        setContacts((prevContacts) => [...prevContacts, result.data.insert_contact.returning[0]]);
      }
    } catch (error) {
      console.error('Error adding new contact:', error);
    }
  };
  

  const toggleFavorite = (contactId: number) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === contactId ? { ...contact, isFavorite: !contact.isFavorite } : contact
      )
    );
  
    // Mengambil array contact yang sudah diperbarui dan menyimpannya ke Local Storage
    const updatedContacts = contacts.map((contact) =>
      contact.id === contactId ? { ...contact, isFavorite: !contact.isFavorite } : contact
    );
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };
  

  const deleteContact = async (contactId: number): Promise<void> => {
    try {
      await client.mutate({
        mutation: DELETE_CONTACT, // Gantilah dengan operasi GraphQL untuk menghapus kontak
        variables: {
          id: contactId,
        },
      });

      // Perbarui data kontak setelah menghapus kontak
      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== contactId)
      );
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <ContactsContext.Provider
      value={{ 
        contacts, 
        loading, 
        error, 
        contactDetail, 
        getContactDetail, 
        addNewContact,
        toggleFavorite,
        deleteContact,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
}

export function useContacts() {
  const context = useContext(ContactsContext);
  if (!context) {
    throw new Error('useContacts must be used within a ContactsProvider');
  }
  return context;
}
