require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const session = require("express-session");

const app = express();
// cors : farklı klasördeki uygulamaları birbirine bağlar

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD, PUT, PATCH, POST, DELETE",
    credentials: true,
  })
);

const Schema = mongoose.Schema;

mongoose.connect(process.env.BAGLANTI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set("useCreateIndex", true);
app.use(
  session({
    secret: "Techproeducation - WebDeveloper",
    resave: true,
    saveUninitialized: true,
    name: "kullanici_bilgileri",
    proxy: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

///////// MONGODB ŞEMALARI - BAŞLANGIÇ
const urunSema = {
  isim: String,
  kategori: String,
  kategori_url: String,
  resimler: {
    bir: String,
    iki: String,
    uc: String,
    dort: String,
  },
  stok: {
    s: Number,
    m: Number,
    l: Number,
    xl: Number,
  },
  marka: String,
  aciklama: String,
  ind_fiyat: Number,
  normal_fiyat: Number,
  yildiz: {
    sayi: Number,
    puan: String,
  },
  renk: String,
  parametreler: {
    taksit: String,
    garanti: String,
    kargo: String,
  },
  satilma: Number,
  cinsiyet: String,
};

const yorumSema = {
  urun_id: String,
  isim: String,
  icerik: String,
  tarih: String,
  kullanici_id: String,
  yildiz: Number,
  onay: Number,
  like: Number,
  dislike: Number,
};

const kategoriSema = {
  kategori_isim: String,
  kategori_url: String,
  kategori_aciklama: String,
};

const kullaniciSema = new mongoose.Schema({
  isim: String,
  soyisim: String,
  email: String,
  sifre: String,
  adres: String,
  telefon: String,
  cinsiyet: String,
});
// passport local mongoose'a kullanici şemasındaki kullanıcı adı ve şifre bölümlerini tanıttık ki
// kayıt işlemlerinde, şifreyeleyeceği alanı bilsin. giriş işlemlerinde de kontrol edeceği alanları bilsin.
kullaniciSema.plugin(passportLocalMongoose, {
  usernameField: "email",
  passwordField: "sifre",
});

///////// MONGODB ŞEMALARI - BİTİŞ

///////// MONGODB MODELLERİ - BAŞLANGIÇ
const Urun = mongoose.model("Urun", urunSema);
const Yorum = mongoose.model("Yorum", yorumSema);
const Kategori = mongoose.model("Kategori", kategoriSema);
const Kullanici = mongoose.model("Kullanici", kullaniciSema);
passport.use(Kullanici.createStrategy());

// Tarayıcıda cookie oluşturacak
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// Tarayıcıdan cookie alıp kullanıcı kontrol işlemi gerçekleştireceğiz.
passport.deserializeUser(function (id, done) {
  Kullanici.findById(id, function (err, user) {
    done(err, user);
  });
});
///////// MONGODB MODELLERİ - BİTİŞ

app.get("/", function (req, res) {
  res.send("Başarılı..");
});

//////////////////////////                  URUN              /////////////////////////////
app.post("/api/urun/olusturma", function (req, res) {
  var urun = new Urun({
    isim: "Süvari Gömlek",
    kategori: "Gömlek",
    kategori_url: "gomlek",
    resimler: {
      bir: "/images/items/3.jpg",
      iki: "/images/items/1.jpg",
      uc: "/images/items/1.jpg",
      dort: "/images/items/4.jpg",
    },
    stok: {
      s: 9,
      m: 9,
      l: 9,
      xl: 9,
    },
    marka: "Süvari",
    aciklama:
      "Virgil Abloh’s Off-White is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown Odsy-1000 low-top sneakers.",
    ind_fiyat: 29.99,
    normal_fiyat: 39.99,
    yildiz: {
      sayi: 20,
      puan: "4.4",
    },
    renk: "Mavi",
    parametreler: {
      taksit: "12 Taksit",
      garanti: "1 Yıl",
      kargo: "Ücretsiz",
    },
    satilma: 50,
    cinsiyet: "Erkek",
  });

  urun.save(function (err) {
    if (!err) {
      res.send([
        {
          sonuc: "başarılı",
        },
      ]);
    } else {
      res.send([
        {
          sonuc: "hata",
        },
      ]);
    }
  });
});

app.get("/api/urun/detay/:id", function (req, res) {
  Urun.find({ _id: req.params.id }, function (err, gelenVeri) {
    if (!err) {
      res.send(gelenVeri);
    } else {
      res.send([
        {
          sonuc: "hata",
        },
      ]);
    }
  });
});

app.get("/api/urun/benzerurunler/:kategori_url/:urunid", function (req, res) {
  Urun.find(
    {
      kategori_url: req.params.kategori_url,
      _id: { $nin: req.params.urunid },
    },
    function (err, gelenVeri) {
      if (!err) {
        res.send(gelenVeri);
      } else {
        res.send([
          {
            sonuc: "hata",
          },
        ]);
      }
    }
  )
    .sort({ satilma: -1 })
    .limit(4);
});

/////////////////////////            KATEGORİ SAYFASI           /////////////////////////////
app.get("/api/kategori/:kategori_url/:bulundugu_sayfa", function (req, res) {
  var sayfa = req.params.bulundugu_sayfa;
  var secim = req.query.secim;
  var markalar =
    req.query.marka === null || req.query.marka === "" ? "" : req.query.marka;

  var minFiyat = parseInt(req.query.min);
  var maxFiyat = parseInt(req.query.max);

  var aramaKriterleri = {
    kategori_url: req.params.kategori_url,
  };

  if (markalar !== "") {
    var bosArray = markalar.split(",");
    if (bosArray.length > 0) {
      aramaKriterleri["marka"] = {
        $in: bosArray,
      };
    }
  }

  if (minFiyat > 0 && maxFiyat === 0) {
    maxFiyat = 99999999999;
  }

  if ((minFiyat === 0 && maxFiyat > 0) || (minFiyat > 0 && maxFiyat > 0)) {
    aramaKriterleri["ind_fiyat"] = {
      $gt: minFiyat,
      $lt: maxFiyat,
    };
  }

  var kriter = {};

  if (secim === "1") {
    kriter = {
      _id: -1,
    };
  } else if (secim === "2") {
    kriter = {
      satilma: -1,
    };
  } else if (secim === "3") {
    kriter = {
      ind_fiyat: 1,
    };
  }

  Urun.find(aramaKriterleri, function (err, gelenVeri) {
    if (!err) {
      res.send(gelenVeri);
    } else {
      res.send([
        {
          sonuc: "hata",
        },
      ]);
    }
  })
    .sort(kriter)
    .limit(6)
    .skip((sayfa - 1) * 6);
});

app.get("/api/urunsayisi/:kategori_url", function (req, res) {
  var markalar =
    req.query.marka === null || req.query.marka === "" ? "" : req.query.marka;

  var minFiyat = parseInt(req.query.min);
  var maxFiyat = parseInt(req.query.max);

  var aramaKriterleri = {
    kategori_url: req.params.kategori_url,
  };

  if (markalar !== "") {
    var bosArray = markalar.split(",");
    if (bosArray.length > 0) {
      aramaKriterleri["marka"] = {
        $in: bosArray,
      };
    }
  }

  if (minFiyat > 0 && maxFiyat === 0) {
    maxFiyat = 99999999999;
  }

  if ((minFiyat === 0 && maxFiyat > 0) || (minFiyat > 0 && maxFiyat > 0)) {
    aramaKriterleri["ind_fiyat"] = {
      $gt: minFiyat,
      $lt: maxFiyat,
    };
  }

  Urun.find(aramaKriterleri, function (err, gelenVeri) {
    if (!err) {
      res.send({
        toplam: gelenVeri.length,
      });
    } else {
      res.send([
        {
          sonuc: "hata",
        },
      ]);
    }
  });
});

app.get("/api/kategori/filtre/marka/:kategori_url", function (req, res) {
  Urun.distinct("marka", function (err, gelenVeri) {
    if (!err) res.send(gelenVeri);
    else res.send(err);
  });
});

/////////////////////////             POPÜLER ÜRÜNLER           //////////////////////////////
app.get("/api/populerurunler", function (req, res) {
  Urun.find({}, function (err, gelenVeri) {
    if (!err) {
      res.send(gelenVeri);
    } else {
      res.send([
        {
          sonuc: "hata",
        },
      ]);
    }
  })
    .sort({ satilma: -1 })
    .limit(4);
});

//////////////////////////             YENİ ÜRÜNLER             ///////////////////////////////
app.get("/api/yeniurunler", function (req, res) {
  Urun.find({}, function (err, gelenVeri) {
    if (!err) {
      res.send(gelenVeri);
    } else {
      res.send([
        {
          sonuc: "hata",
        },
      ]);
    }
  })
    .sort({ _id: -1 })
    .limit(4);
});

////////////////////////               YORUMLAR                ////////////////////////////////
app.get("/api/yorumlar/:id", function (req, res) {
  Yorum.find({ urun_id: req.params.id, onay: 1 }, function (err, gelenVeri) {
    if (!err) {
      res.send(gelenVeri);
    } else {
      res.send([
        {
          sonuc: "hata",
        },
      ]);
    }
  });
});

app.post("/api/yorum", function (req, res) {
  var tarih = new Date();
  var yeniTarih =
    tarih.getFullYear() + "/" + (tarih.getMonth() + 1) + "/" + tarih.getDate();

  var yorum = new Yorum({
    urun_id: req.body.urun_id,
    isim: req.body.isim,
    icerik: req.body.icerik,
    tarih: yeniTarih,
    kullanici_id: req.body.kullanici_id,
    yildiz: req.body.yildiz,
    onay: 0,
    like: 0,
    dislike: 0,
  });

  yorum.save(function (err) {
    if (!err) {
      res.send({ sonuc: true });
    } else {
      res.send({ sonuc: "hata" });
    }
  });
});

// id'si bilinen bir ürüne yapılan yorumların "yildiz" fieldında rakamların toplamı (sum).
// id'si bilinen ürüne yapılan toplam yorum sayısı (yorumsayisi)
app.get("/api/yorum/puan/:id", function (req, res) {
  Yorum.aggregate([
    {
      $group: {
        _id: req.params.id,
        sum: { $sum: "$yildiz" },
        yorumsayisi: { $sum: 1 },
      },
    },
  ]).then(function (gelenVeri) {
    res.send(gelenVeri[0]);
  });
});
///// **** ONAY : 1 ayarlaması yapılacak

/////////////////////////////   KATEGORİ API     ///////////////

app.post("/api/kategori_bireysel/olustur", function (req, res) {
  var kategori = new Kategori({
    kategori_isim: req.body.isim,
    kategori_url: req.body.url,
    kategori_aciklama: req.body.aciklama,
  });

  kategori.save(function (err) {
    if (!err) {
      res.send({
        sonuc: "başarılı",
      });
    } else {
      res.send(err);
    }
  });
});

app.get("/api/kategori_bireysel/:kategori_url", function (req, res) {
  Kategori.find(
    { kategori_url: req.params.kategori_url },
    function (err, gelenVeri) {
      if (!err) {
        res.send(gelenVeri);
      } else {
        res.send([
          {
            sonuc: "hata",
          },
        ]);
      }
    }
  );
});

app.get("/api/kategori_liste", function (req, res) {
  Kategori.find({}, function (err, gelenVeri) {
    if (!err) {
      res.send(gelenVeri);
    } else {
      res.send([
        {
          sonuc: "hata",
        },
      ]);
    }
  });
});

////////////////////////              KULLANICI İŞLEMLERİ     //////////////////////////////
app.post("/api/kullanici/olusturma", function (req, res) {
  Kullanici.register(
    {
      isim: req.body.isim,
      soyisim: req.body.soyisim,
      email: req.body.email,
      adres: req.body.adres,
      telefon: req.body.telefon,
      cinsiyet: req.body.cinsiyet,
    },
    req.body.sifre,
    function (err, gelenVeri) {
      if (err) {
        if (err.name === "UserExistsError") {
          res.send({ sonuc: "email" });
        } else {
          res.send({ sonuc: "hata" });
        }
      } else {
        passport.authenticate("local")(req, res, function () {
          res.send({ sonuc: "başarılı" });
        });
      }
    }
  );
});

app.post("/api/kullanici/giris", function (req, res) {
  const kullanici = new Kullanici({
    email: req.body.email,
    sifre: req.body.sifre,
  });

  req.login(kullanici, function (err) {
    if (err) {
      res.send({
        sonuc: false,
      });
    } else
      passport.authenticate("local")(req, res, function () {
        res.send({
          sonuc: true,
        });
      });
  });
});

app.get("/api/kullanici/cikis", function (req, res) {
  req.logout();
  res.send({ sonuc: "başarılı" });
});

app.get("/api/kullanici/giriskontrol", function (req, res) {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    res.send({ sonuc: true, isim: req.user.isim, id: req.user._id });
  } else {
    res.send({ sonuc: false });
  }
});

app.get("/api/kullanici/bilgiler", function (req, res) {});

app.listen(5000);
