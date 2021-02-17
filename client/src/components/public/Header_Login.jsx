import React from "react";

const Header_Login = () => {
  return (
    <div className="widget-header">
      <small className="title text-muted">Hoşgeldiniz !</small>
      <div>
        <a href="/girisyap">Giriş Yap</a>{" "}
        <span className="dark-transp"> | </span>
        <a href="/kayitol"> Kayıt Ol</a>
      </div>
    </div>
  );
};

export default Header_Login;
