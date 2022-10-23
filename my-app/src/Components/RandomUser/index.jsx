import React, { useState, useEffect } from "react";
import BtnRandomUser from "./BtnRandomUser";
import axsios from "axios";
import styles from "./RandomUser.module.scss";
import BtnGetFamale from "./BtnGetFamale";


export default function RandomUser() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

  useEffect(() => {
    onClickHandler();
  }, []);

  const onClickHandler = () => {
    setActiveLink(0);
    setLoading(true);
    axsios
      .get("https://randomuser.me/api/?results=10")
      .then((response) => {
        console.log(response);
        setUserData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      })
      .finally(() => {
        setLoading(false);
        setActiveUser(true);
      });
  };

  const onClickFamale = () => {
    setActiveLink(0);
    setLoading(true);
    axsios
      .get("https://randomuser.me/api/?results=10&gender=female")
      .then((response) => {
        console.log(response);
        setUserData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      })
      .finally(() => {
        setLoading(false);
        setActiveUser(true);
      });
  };

  const icons = [
    "fas fa-user fa-4x",
    "fas fa-envelope fa-4x",
    "fas fa-calendar-alt fa-4x",
    "fas fa-map-marker fa-4x",
    "fas fa-phone fa-4x",
    "fas fa-lock fa-4x",
  ];

  const PhraseGenerator = ({ user }) => {
    const phrases = [
      `Name ${user.name.first} `,
      `Last ${user.name.last}`
      `Email addres ${user.email} `,
      `Date of Birth ${user.dob.date.slice(0, 10)} `,
      `Country ${user.location.country} `,
      `Phone number ${user.phone} `,
      `Password ${user.login.password} `,
    ];
    return <h1>{phrases[activeLink]}</h1>;
  };
  const activeLinkHandler = (index) => {
    setActiveLink(index);
  };
  const style = {
    color: "green",
  };
  return (
    <>
      <div className={styles.app}>
        {loading ? (
          <h1>Loading....</h1>
        ) : (
          <div className={styles.appUser}>
            {userData.map((user, index) => {
              return (
                <div className={styles.userConteiner} key={user.cell}>
                  {/* {user.name.first + ' ' + user.name.last } */}
                  <img src={user.picture.large} alt="photo_user" />
                  <PhraseGenerator user={user} />
                  <div className={styles.appIcons}>
                    {icons.map((icon, index) => {
                      return (
                        <i
                          className={icon}
                          key={index}
                          onMouseEnter={() => activeLinkHandler(index)}
                          style={activeLink === index ? style : null}
                        ></i>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <BtnRandomUser className={styles} isActive={activeUser} clicked={onClickHandler} />
        <BtnGetFamale  className={styles} isActive={activeUser} clicked={onClickFamale} />
      </div>
    </>
  );
}
