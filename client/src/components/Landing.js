import React from "react";
const textUvod = "Jmenuji se Katka Červenková a budu pečovat o Vaše přírodní nechty dle Vašich potřeb a přání";
const textOdsek1 = "Péče o ruce a nehty mě fascinovala už jako malou holku. Více jsem se začala věnovat tomuto oboru přibližně před 12 lety, kdy jsem zkoušela různé materiály a zdobení.";
const textOdsek2 = "Už tehdy jsem pracovala s technikou gelových nehtů a v roku 2014 jsem absolvovala kurz akrylovej modeláže. Dnes jsou to už 3 roky, co se specializuji na léčbu přírodních nehtů, zničených po nehtové modeláži nebo neodborně provedenou manikúrou. Mým cílem je řešit tyto problémy komplexně, přes vitamíny, stravu a následnou domácí péči o nehty.";

const Landing = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>
                Salon
        </h1>
            <p> {textUvod} </p>
            <p> {textOdsek1} </p>
            <p> {textOdsek2} </p>
        </div>
    );
};

export default Landing;