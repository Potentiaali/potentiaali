import React from "react";
import Companies from "./../components/partials/Companies";
import { Program } from "./../components/partials/Program";

const MainContent = () => {
  return (
    <section className="">
      <div className="container">
        <h2>
          Kumpulan Potentiaali vuodelle 2018 on <br /> täynnä!
        </h2>
        <br />
        <p>
          {" "}
          Kumpulan Potentiaali on Helsingin yliopiston
          matemaattis-luonnontieteellisen tiedekunnan opiskelijoiden järjestämä
          työelämä- ja rekrytointitapahtuma, joka järjestettiin ensi kertaa
          viime syksynä. Ensi kertaa järjestetyksi tapahtumaksi Kumpulan
          Potentiaali 2017 oli menestys niin opiskelijoiden kuin
          yritysvieraidenkin puolesta.
        </p>
        <br />
        <p>
          Palautteeseen vastanneista yritysvieraista yli 95% arvioi tapahtuman
          annin olevan vähintään hinnan väärti, ja joka neljäs koki tapahtuman
          annin olevan erinomainen hintaan nähden.
        </p>
        <br />
        <br />
        <Program />
        <br />
        <br />
        <Companies />
        <br />
        <br />
        <h3>TAPAHTUMATIEDOT</h3>
        <ul>
          <li>
            <b>Paikka</b>: Kumpulan kampus (Gustaf Hällströmin katu 2)
          </li>
          <li>
            <b>Aika</b>: Torstai 22.11.2018
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MainContent;
