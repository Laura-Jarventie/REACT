import React from "react";
import Taata from "../../assets/img/Taata.jpg";

const Home = () => {
  return (
    <span>
      <div className="Taata">
        <img
          src={Taata}
          alt="picture of granpa"
          height="560px"
          width="433px"
        ></img>
      </div>
      <h1>Tervetuloa selaamaan Järventeiden luottoreseptejä</h1>
      <div className="homeText">
        <p>
          Varmasti jokaisessa suvussa on tiettyjä luottoreseptejä jotka
          kiertävät kädestä käteen ja niitä tehdään vuodesta toiseen, näin on
          myös meillä. Meidän suvun ehdottomasti ahkerin leipuri on ollut jo
          edesmennyt isoisäni eli taata. Muistan vieläkin elävästi kuinka
          pikkutyttönä kävimme kalassa taatan, isän ja veljen kanssa. Illalla
          ahvenet savustettiin ja syötiin heti lämpiminä suoraan
          savustuspöntöstä. Jälkiruuaksi oli höpöjä eli taatan leipomia
          korvapuusteja. Tätini Leena muistelee että taatan leivontavillitys
          lähti liikkeelle tiikerikakusta. Itselleni on jäänyt höpöjen lisäksi
          hyvin mieleen tosca-kakku mitä mummilla ja taatalla tarjoiltiin kahvin
          kanssa sunnuntaisin.
        </p>
        <p>
          Taatan leivonnaisten lisäksi kerään tälle sivulle myös muita
          reseptejä, kuten äitini poro-leipäjuustokeitto ja Leenan
          Britan-kakkku. Nämä ja muut herkut löydät "Reseptit" sivulta.
          Reseptejä on kirjoitettu mitä erilaisimmille lappusille. Osassa on
          päivämäärät merkittyinä, ne olen lisännyt myös tänne. Osa on ollut
          ahkerassa käytössä, ja niissä on paljon tahroja. Useimmat on myös
          kirjoitettu käsin lyhenteitä käyttäen. Toivottavasti olen osannut
          tulkita niitä oikein. Taatan resepteissä vehnäjauhoista käytetään
          nimitystä nisujauho. Kaikki meidän sukuun kuuluvat voivat myös lisätä
          reseptejä sivulta "Lisää reseptit". Herkullisia lukuhetkiä ja vielä
          herkullisempia tuotoksia.
        </p>
      </div>
    </span>
  );
};

export default Home;
