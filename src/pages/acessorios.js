import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import SingleCategory from '../components/SingleCategory';

export default function Acessorios() {
  return (
    <Layout>
      <SEO title="Acessorios" />
      <SingleCategory category="accessories" title="ACESSORIOS" />
    </Layout>
  );
}
