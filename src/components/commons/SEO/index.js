import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

export default function SEO({ headTitle }) {
  const pageTitleDefault = 'Instalura - Projeto do Alura Bootcamp';
  const hasHeadTitle = Boolean(headTitle);
  const title = hasHeadTitle
    ? (`${headTitle} | ${pageTitleDefault}`)
    : (pageTitleDefault);
  const description = 'Alura Bootcamp - Instalura - Desafio';
  const baseUrl = 'http://instalura.penadev.vercel.app/';
  const imgContent = 'https://www.alura.com.br/assets/img/alura-share.1571848411.png';

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgContent} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={baseUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imgContent} />
    </Head>
  );
}

SEO.defaultProps = {
  headTitle: '',
};

SEO.propTypes = {
  headTitle: PropTypes.string,
};
