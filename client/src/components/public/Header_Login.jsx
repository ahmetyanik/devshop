import axios from "axios";
import React, { useEffect, useState } from "react";

const Header_Login = () => {
  const [durum, setDurum] = useState(0);
  /*
    0 : yükleniyor
    1 : giriş yapılmış.
    2 : giriş yapılmamış olsun.
  */

  function girisKontrol() {
    axios
      .get("http://localhost:5000/api/kullanici/giriskontrol", {
        withCredentials: true,
      })
      .then(function (gelenVeri) {
        if (gelenVeri.data.sonuc === true) {
          setDurum(1);
        } else {
          setDurum(2);
        }
      });
  }
  useEffect(girisKontrol, []);

  function cikisYap() {
    setDurum(0);
    axios
      .get("http://localhost:5000/api/kullanici/cikis", {
        withCredentials: true,
      })
      .then(function (gelenVeri) {
        setDurum(2);
        window.location.reload();
      });
  }

  return (
    <div className="widget-header">
      <small className="title text-muted">Hoşgeldiniz !</small>
      <div>
        {durum === 2 && (
          <React.StrictMode>
            <a href="/giris">Giriş Yap</a>
            <span className="dark-transp"> | </span>
            <a href="/kayit"> Kayıt Ol</a>
          </React.StrictMode>
        )}

        {durum === 1 && (
          <React.StrictMode>
            <a href="/profilim">Profilim</a>
            <span className="dark-transp"> | </span>
            <a onClick={cikisYap} href="#">
              Çıkış Yap
            </a>
          </React.StrictMode>
        )}
      </div>
    </div>
  );
};

export default Header_Login;
