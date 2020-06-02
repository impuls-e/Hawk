import React from 'react'
import SEO from '../components/Seo'
import SingleCategory from '../components/SingleCategory'
// import InstagramFeed from '../components/InstagramFeed'

export default function Moletons() {
  return (
    <>
      <SEO title="Moletons" />
      <SingleCategory category="moletom" title="MOLETONS" />
      {/* <InstagramFeed /> */}
    </>
  )
}
