import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';
import ContactList from '../components/ContactList';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { favpage, favpageTitle } from '../styles/global.style';

interface Props {
    contacts: Array<any>;
}

const FavoritePage: React.FC<Props> = ({contacts}) => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const keywordFav: string | null = searchParams.get('keyword');
 
  const [contactFavorite, setContactFavorite] = useState<any[]>([]);

  const storedContacts = localStorage.getItem('contacts');

  const handleSearchParams = (keyword: string) => {
    setSearchParams({ keyword });
  };

  useEffect(() => {
    const filteredFavoriteContacts = contacts.filter(
      (item: any) =>
        item.isFavorite &&
        (!keywordFav || item.first_name.toLowerCase().includes(keywordFav.toLowerCase()))
    );

    if (storedContacts) {
      const localContacts = JSON.parse(storedContacts);
      const filteredLocalFavoriteContacts = localContacts.filter(
        (item: any) =>
          item.isFavorite &&
          (!keywordFav || item.first_name.toLowerCase().includes(keywordFav.toLowerCase()))
      );
      setContactFavorite(filteredLocalFavoriteContacts);
    } else {
      setContactFavorite(filteredFavoriteContacts);
    }
  }, [contacts, keywordFav, storedContacts]);

  return (
    <section>
      <h2 css={[favpageTitle]}>Favorite Contact List</h2>
      <SearchBar keyword={keywordFav} keywordChange={handleSearchParams} />
      <div css={[favpage]}>
      <ContactList contacts={contactFavorite} />
      </div>
    </section>
  );
};

export default FavoritePage;
