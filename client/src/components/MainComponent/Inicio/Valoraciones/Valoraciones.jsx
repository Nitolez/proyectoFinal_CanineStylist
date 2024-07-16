import React, { useEffect } from "react";

const ListaValoraciones = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.sociablekit.com/google-reviews/widget.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <article className="valoraciones">
        <h2>Valoraciones</h2>
        <div className="sk-ww-google-reviews" data-embed-id="25438135"></div>
      </article>
    </>
  );
};
export default ListaValoraciones;
