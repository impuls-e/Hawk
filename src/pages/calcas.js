import React from 'react'
import SEO from '../components/Seo'
import SingleCategory from '../components/SingleCategory'
import InstagramFeed from '../components/InstagramFeed'

export default function Calcas() {
  return (
    <>
      <SEO title="Calcas" />
      <SingleCategory category="pants" title="CALÇAS" />
      <InstagramFeed />
    </>
  )
}
