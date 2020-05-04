import React from 'react'
import SEO from '../components/Seo'
import SingleCategory from '../components/SingleCategory'
import InstagramFeed from '../components/InstagramFeed'

export default function Acessorios() {
  return (
    <>
      <SEO title="Acessorios" />
      <SingleCategory category="accessories" title="ACESSORIOS" />
      <InstagramFeed />
    </>
  )
}
