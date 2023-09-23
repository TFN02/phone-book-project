import React, { useState } from "react";
import { MdDone, MdAdd } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  action,
  btnAddNumber,
  divPhone,
  newBtn,
  newPageInput,
  newPageInputTitle,
  pageAction,
} from "../styles/global.style";
import { useContacts } from "../contexts/ContactsContext";
import { BiSolidLeftArrow, BiSolidTrashAlt } from "react-icons/bi";

const AddPage = () => {
  const { contacts, addNewContact } = useContacts();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phones, setPhones] = useState([""]); 
  const isValidName = (name: string): boolean => /^[A-Za-z]+$/.test(name);
  const isFirstNameUnique = (name: string) =>
    !contacts.some((contact) => contact.first_name === name);
  const isLastNameUnique = (name: string) =>
    !contacts.some((contact) => contact.last_name === name);
  const isValidPhone = (phone: string) => /^[0-9+]+$/.test(phone);
  const navigate = useNavigate();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newFirstName: string = e.target.value;
    if (isValidName(newFirstName)) {
      setFirstName(newFirstName);
    }
  };
  const handleLastNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const newLastName: string = e.target.value;
    if (isValidName(newLastName)) {
      setLastName(newLastName);
    }
  };

  const handlePhoneChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const newPhones = [...phones];
    newPhones[index] = e.target.value;
    setPhones(newPhones);
  };

  const handleAddPhone = (): void => {
    setPhones([...phones, ""]);
  };

  const handleRemovePhone = (index: number): void => {
    const newPhones = phones.filter((_, i) => i !== index);
    setPhones(newPhones);
  };

  const handleSubmit = () => {
    if (!isFirstNameUnique(firstName) && !isLastNameUnique(lastName)) {
      alert("Nama sudah ada !");
      console.error("First name is not unique.");
      return;
    }

    const newContactData = {
      first_name: firstName,
      last_name: lastName,
      phones: phones
        .filter((phone) => phone.trim())
        .map((phone) => ({ number: phone })),
    };
    console.log(newContactData);

    addNewContact(newContactData)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error adding new contact:", error);
      });
  };

  return (
    <section>
      <h2>Add New Page</h2>
      <div css={[newPageInput]}>
        <input
          css={[newPageInputTitle]}
          required={true}
          placeholder="Masukan Nama Depan Contact"
          type="text"
          value={firstName}
          onChange={handleNameChange}
        />
        <input
          css={[newPageInputTitle]}
          required={true}
          placeholder="Masukan Nama Belakang Contact"
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
        />
        {phones.map((phone, index) => (
          <div key={index} css={[divPhone]}>
            <input
              css={[newPageInputTitle]}
              required={true}
              placeholder="Masukan Nomor Contact ...."
              value={phone}
              onChange={(e) => handlePhoneChange(e, index)}
            />
            <button
              css={[newBtn]}
              type="button"
              onClick={() => handleRemovePhone(index)}
            >
              <BiSolidTrashAlt size={20} />
            </button>
          </div>
        ))}
        <button css={[btnAddNumber]} type="button" onClick={handleAddPhone}>
          <MdAdd /> Tambah Nomor Telepon
        </button>
      </div>
      <div css={[pageAction]}>
        <Link to="/" css={action}>
          <BiSolidLeftArrow />
        </Link>
        <button css={[action]} onClick={handleSubmit}>
          <MdDone />
        </button>
      </div>
    </section>
  );
};

export default AddPage;
