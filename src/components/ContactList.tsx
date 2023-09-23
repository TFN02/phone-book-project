import React from 'react'
import ContactItem from './ContactItem';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { contactListEmpty, contactList, contactListEmptyTitle } from '../styles/global.style';

interface Props {
    contacts: Array<any>;
}

const ContactList: React.FC<Props> = ({ contacts }) => {
    return (
        <section css={[contactList]}>
            {contacts.length > 0 ? contacts.map((contact) => (
                <ContactItem key={contact.id} {...contact} />
            )) :
                <section css={[contactListEmpty]}>
                    <p css={[contactListEmptyTitle]}>Tidak ada contact !</p>
                </section>
            }
        </section>
    )
}

export default ContactList