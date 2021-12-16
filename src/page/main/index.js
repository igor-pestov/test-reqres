import React, { useEffect, useState } from "react";
import CardItem from "../../components/card";
import ModalItem from "../../components/modal";
import { getUsers, getUser } from "../../api/index";

import styles from "./styles/index.module.scss";

const Main = () => {
  const [cards, setCards] = useState([]);
  const [user, setUser] = useState();
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await getUsers();

      setCards(data.data);
    };
    getData();
  }, []);

  const handleOpen = async (id) => {
    const user = await getUser(id);

    setUser(user.data);
    setIsOpenModal(true);
  };

  return (
    <section className={styles.main}>
      {cards.map((item) => (
        <CardItem key={item.id} data={item} setOpen={handleOpen} />
      ))}
      {user && (
        <ModalItem open={isOpenModal} setOpen={setIsOpenModal} data={user} />
      )}
    </section>
  );
};

export default Main;
