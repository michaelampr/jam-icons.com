import React from "react"
import { Link } from "gatsby"
import Layout from "@/components/layout"
import SEO from "@/components/seo"

import icon404 from "@/images/404.png"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Not found" />
    <section className="px-4 mx-auto max-w-2xl flex justify-center items-center flex-col my-20">
      <img src={icon404} alt="404 icon" className="" />
      {/* <h1 className="mt-6 mb-2 text-3xl font-bold text-yellow-500">
        Page Not Found
      </h1> */}
      <p className="text-center mt-10 mb-6">
        Hmmm that's unfortunate. <br /> The page you're looking for cannot be
        found.
      </p>
      <Link
        className="py-2 px-4 rounded-lg bg-gray-400 hover:bg-yellow-500 transition-background duration-300"
        to="/"
      >
        Back Home
      </Link>
    </section>
  </Layout>
)

export default NotFoundPage
