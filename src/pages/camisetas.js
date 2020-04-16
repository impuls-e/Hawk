import React from 'react';
import Layout from '../components/Layout/';
import SEO from '../components/Seo';
import SingleCategory from '../components/SingleCategory';

export default function Camisetas() {
  return (
    <Layout>
      <SEO title="Camisetas" />
      <SingleCategory category="tshirt" title="CAMISETAS" />
    </Layout>
  );
}
