import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import SingleCategory from '../components/SingleCategory';

export default function Shorts() {
  return (
    <Layout>
      <SEO title="Shorts" />
      <SingleCategory category="short" title="SHORTS" />
    </Layout>
  );
}
