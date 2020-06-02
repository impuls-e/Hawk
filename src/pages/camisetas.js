import React from 'react'
import SEO from '../components/Seo'
import SingleCategory from '../components/SingleCategory'
// import InstagramFeed from '../components/InstagramFeed'

export default function Camisetas() {
  return (
    <>
      <SEO title="Camisetas" />
      <SingleCategory category="tshirt" title="CAMISETAS" />
      {/* <InstagramFeed /> */}
    </>
  )
}
