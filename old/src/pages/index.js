import React from "react"

import Layout from "@/components/layout"
import SEO from "@/components/seo"

import FiltersBar from "@/components/FiltersBar"
import IconsList from "@/components/IconsList"
import SearchBar from "@/components/SearchBar"
import CopiedFlash from "@/components/CopiedFlash"

const IndexPage = () => (
  <Layout>
    <SEO />
    <section className="container mx-auto px-4 pb-4">
      <SearchBar />
      <FiltersBar />
      <IconsList />
    </section>
    <CopiedFlash />
  </Layout>
)

export default IndexPage
