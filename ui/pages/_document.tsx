import Document, { DocumentInitialProps, Head, Html, Main, NextScript } from "next/document";
import React from "react";

// import "../static/css/normalize.css";
// import "../static/css/style.css";

class MyDocument extends Document {
  /* Modify the initial Docment for Customization

    Note: for more information, visit the documentation below: 
    https://nextjs.org/docs/advanced-features/custom-document*/

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  //TODO: FIGURE OOUT ALL THESE LINKS ANS SHET
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous"
          ></link>
          {/* ADDED ROBOTO ON 10/29/2020 */}
          <link 
            rel="stylesheet" 
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" 
            crossOrigin="anonymous"/>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js"
            integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ="
            crossOrigin="anonymous"
          ></script>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />

          {/* 
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          /> */}

        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            src="https://code.jquery.com/jquery-3.4.1.min.js"
            integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
            integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
            crossOrigin="anonymous"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
