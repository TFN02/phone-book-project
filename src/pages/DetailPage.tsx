import React, { useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { BsBookmarkStar } from "react-icons/bs";
import { useNavigate, useParams, Link } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  detailPage,
  detailPageBody,
  detailPageTitle,
  pageAction,
  action,
} from "../styles/global.style";
import { useContacts } from "../contexts/ContactsContext";
import ConfirmationModal from "../components/ConfirmationModal";
import { BiSolidLeftArrow } from "react-icons/bi";
import Avatar from "../components/Avatar";

const DetailPage: React.FC = () => {
  const { contactDetail, getContactDetail, toggleFavorite, deleteContact } =
    useContacts();
  const { id } = useParams<{ id: string }>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getContactDetail(Number(id));
    }
  }, [id, getContactDetail]);

  const handleArchive = (id: number): void => {
    toggleFavorite(id);
    navigate("/");
  };

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = (id: number) => {
    deleteContact(id);
    setIsModalOpen(false);
    navigate("/");
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
  };

  const handleUnarchive = (unarchiveId: number): void => {
    toggleFavorite(unarchiveId);
    navigate("/");
  };

  if (!contactDetail) {
    return (
      <div>
        Contact Tidak Ditemukan | Clear cache atau akses melalui incognito
      </div>
    );
  }

  return (
    <section>
      <h2>Detail Page</h2>
      <div css={detailPage}>
        <Avatar
          firstName={contactDetail.first_name}
          lastName={contactDetail.last_name}
        />
        <div css={detailPageTitle}>
          <h2>
            {contactDetail.first_name} {contactDetail.last_name}
          </h2>
          <p>List Contact:</p>
          {contactDetail.phones.map((item: { number: string }) => (
            <li key={item.number} css={detailPageBody}>
              {item.number}
            </li>
          ))}
        </div>
        <div css={pageAction}>
          <Link to="/" css={action}>
            <BiSolidLeftArrow />
          </Link>
          {contactDetail.isFavorite ? (
            <button
              css={action}
              onClick={() => handleUnarchive(contactDetail.id)}
            >
              <BsBookmarkStar />
            </button>
          ) : (
            <button
              css={action}
              onClick={() => handleArchive(contactDetail.id)}
            >
              <BsBookmarkStar />
            </button>
          )}
          <button css={action} onClick={handleDelete}>
            <MdOutlineDelete />
          </button>
          <ConfirmationModal
            isOpen={isModalOpen}
            onCancel={handleCancelDelete}
            onConfirm={() => handleConfirmDelete(contactDetail.id)}
          />
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
