import React from "react";
import { AppProps } from "next/app";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import AppLayout from "../components/Layout/AppLayout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <meta
        name="viewport"
        content="width=device-width,minimum-scale=1,initial-scale=1"
        className="next-head"
      />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default MyApp;