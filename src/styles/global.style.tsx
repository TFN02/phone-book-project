/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const appContainer = css`
  min-height: 100vh;
  transition: all ease-in-out 0.5s;
`;

export const headNav = css`
display: flex;
background-color: black;
padding: 3rem;
border-bottom-right-radius: 40px;
border-bottom-left-radius: 40px;
`;
export const navigation = css`
  display: flex;
  justify-content: center;
  font-size: 24px;
  align-items: center;
  color: white;
`;
export const h1 = css`
@media screen
display: flex;
justify-content: center;
`

export const main = css`
  padding: 1rem 0rem;
  max-width: 1200px;
  @media screen and (min-width: 300px) {
    padding: 1rem 2rem;
  }
`;

export const homepage = css`
@media screen and (min-width: 300px) {
  background-color: white;
  padding: 1rem;
  margin: 1rem 0 10rem 0;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  box-shadow: -2px 2px 6px 1px rgba(0,0,0,0.75);
  overflow-y: scroll;
  height: 100vh;
}
`;
export const favpageTitle = css`
  margin: 2rem 0;
`
export const favpage = css`
@media screen and (min-width: 300px) {
  background-color: white;
  padding: 1rem;
  margin: 1.5rem 0 3rem 0;
  border-radius: 20px;
  box-shadow: -2px 2px 6px 1px rgba(0,0,0,0.75);
}
`
export const avatar = css`
width: 50px;
  height: 50px;
  background-color: #000; 
  color: #fff; 
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 20px;
  font-weight: bold; 
`
export const contactDiv = css`
display: flex;
@media screen and (min-width: 300px) {
  justify-content: space-between;
  align-items: center;
}
`
export const pagination = css`
  display: flex;
  gap: 1rem;
  align-items: center;
`
export const btnPagination = css`
  border: none;
  font-size: 24px;
  &:hover {
    border: black 2px solid;
    border-radius: 5px;
  }
`;
export const contactList = css`
  @media screen and (min-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const contactListEmpty = css`
  margin-top: 32px;
  padding: 16px 8px;
`;
export const contactListEmptyTitle = css`
  text-align: center;
`;
export const contactItem = css`
display: flex;
align-items: center;
margin: 24px 0;
border: 2px dashed black;
padding: 16px;
border-radius: 8px;

@media screen and (min-width: 650px) {
  grid-template-columns: repeat(2, 1fr);
}
`
export const contactItemTitle = css`
margin-left: 8px;
padding-left: 8px;
border-left: 1px solid #aaa;
flex: 1;
`
export const contactImg = css`
width: 64px;
border-radius: 50%;
`
export const contactItemBody = css`
  margin-top: 16px;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`;
export const detailPage = css`
@media screen and (min-width: 300px) {

  min-height: 50vh;
  display: flex;
  gap:2rem;
  background-color: #fff;
  margin: 1.5rem 0 5rem 0;
  padding: 1rem 0 0 1.5rem;
  border-radius: 20px;
  box-shadow: -2px 2px 6px 1px rgba(0,0,0,0.75);
}
  `;
  
export const detailPageTitle = css`
  @media screen and (min-width: 300px) {
    display:flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 17px;
    border-left: 2px solid black;
    padding-left: 1rem;
  }
`;

export const detailPageBody = css`
  font-size: 17px;
  padding: 1rem 0 0 1rem;
`;

export const pageAction = css`
  position: fixed;
  display: flex;
  gap: 16px;
  bottom: 32px;
  right: 32px;
  z-index: 10;
`;
export const action = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  border: 0;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  color: white;
  background-color: black;
  box-shadow: -2px 2px 6px 1px rgba(0,0,0,0.75);
  padding: 8px;
  cursor: pointer;
`;
export const newPageInput = css`
  display: flex;
  height: 70vh;
  flex-direction: column;
  background-color: white;
  box-shadow: -2px 2px 6px 1px rgba(0,0,0,0.75);
  border-radius: 20px;
  padding: 1.5rem;
  margin: 1rem 0 0 0;
  gap: 0.5rem;

  @media screen and (min-width: 300px) {
    height: 40vh;
    overflow-y: scroll;
    margin-bottom: 8rem;
  }
  `;

export const newPageInputTitle = css`
  border: 2px solid black;
  border-radius: 10px;
  padding: 1rem;
  margin: 0 0.5rem 0 0;
`;

export const divPhone = css`
  display: flex;
  align-items: center;
`

export const newBtn = css`
  border: none;
  background-color: transparent;
`
export const btnAddNumber = css`
  border: 2px solid black;
  background-color: black;
  border-radius: 10px;
  color: white;
  width: 20%;
  padding: 0.5rem;
  
  @media screen and (min-width: 300px) {
    width: 100%;
  }
`
export const searchbar = css`
  font-family: 'Inter', sans-serif;
  border: 2px solid black;
  border-radius: 10px;
  padding: 8px;
  width: 100%;
`;

export const modalOverlay = css`
  position: fixed;
  top: 45%;
  left: 25%;
  padding: 2rem 1rem;
  margin: 0 2rem;
  background-color: white;
  box-shadow: 3px 1px 60px 13px rgba(0,0,0,0.75);
  border-radius: 10px;
`
export const modal = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const btnYesModal = css`
  background-color: transparent;
  border: none;
  color: red;
  font-weight: bold;
  font-size: medium;
`
export const btnBackModal = css`
  background-color: black;
  color: white;
  font-size:medium;
  border: none;
  border-radius: 10px;
  padding: 0.5rem;

  &:hover {
    filter: opacity(80%);
  }
`

export const footer = css`
  background-color: #000;
  color: white;
  padding: 1rem;
  width: 100%; 
  display:flex;
  position: absolute;
  justify-content: center;
`
