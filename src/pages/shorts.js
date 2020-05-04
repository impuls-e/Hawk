import React from 'react'
import SEO from '../components/Seo'
import SingleCategory from '../components/SingleCategory'
import InstagramFeed from '../components/InstagramFeed'

export default function Shorts() {
  return (
    <>
      <SEO title="Shorts" />
      <SingleCategory category="short" title="SHORTS" />
      <InstagramFeed />
    </>
  )
}
