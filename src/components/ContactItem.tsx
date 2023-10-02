import React from 'react';
import { Link } from 'react-router-dom';
import { BiSolidRightArrowCircle } from 'react-icons/bi'
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { contactItem, contactItemTitle } from '../styles/global.style';
import Avatar from './Avatar';

interface ContactItemProps {
  id: number;
  first_name: string;
  last_name: string;
  phones: { number: string }[];
}

const ContactItem: React.FC<ContactItemProps> = ({ id, first_name,last_name, phones }) => {
  return (
    <article css={[contactItem]}> 
    <div>
      <Avatar firstName={first_name} lastName={last_name} />
    </div>
      <div css={[contactItemTitle]}>
        <h3>
            <Link to={`/contacts/${id}`}>{first_name}</Link>
        </h3>
        
        <p>{phones.length > 0 ? phones[0].number : 'contact kosong' }</p>
      </div>
      <Link to={`/contacts/${id}`}>
        <BiSolidRightArrowCircle size={25} />
      </Link>
    </article>
  )
}

export default ContactItem;