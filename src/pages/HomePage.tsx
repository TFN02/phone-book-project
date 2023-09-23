import React, { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { Link, useSearchParams } from "react-router-dom";
import ContactList from "../components/ContactList";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { action, homepage, pageAction } from "../styles/global.style";
import { useContacts } from "../contexts/ContactsContext";
import FavoritePage from "./FavoritePage";
import Pagination from "../components/Pagination";

const HomePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams("");
  const keyword: string | null = searchParams.get("keyword");
  const { contacts } = useContacts();
  const [contactRegular, setContactRegular] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 10;

  const totalPageCount = Math.ceil(contacts.length / contactsPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * contactsPerPage;
    const endIndex = startIndex + contactsPerPage;
    const filteredContacts = contacts.filter(
      (item: any) =>
        !item.isFavorite &&
        (!keyword ||
          item.first_name.toLowerCase().includes(keyword.toLowerCase()))
    );

    const contactsOnPage = filteredContacts.slice(startIndex, endIndex);
    setContactRegular(contactsOnPage);
  }, [currentPage, contacts, keyword]);

  const handleNextPage = () => {
    if (currentPage < totalPageCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section>
      <FavoritePage contacts={contacts} />
      <Pagination 
      handleNextPage={handleNextPage} 
      handlePrevPage={handlePrevPage} 
      totalPageCount={totalPageCount}
      currentPage={currentPage}
      />
      <div css={[homepage]}>
        <ContactList contacts={contactRegular} />
        <div css={[pageAction]}>
          <Link to="/contacts/new">
            <button css={[action]} type="button">
              <BiPlus />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
