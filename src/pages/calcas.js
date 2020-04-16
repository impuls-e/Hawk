import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import SingleCategory from '../components/SingleCategory';

export default function Calcas() {
  return (
    <Layout>
      <SEO title="Calcas" />
      <SingleCategory category="pants" title="CALÇAS" />
    </Layout>
  );
}
