import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

const SEO = ({ lang, meta, title }) => {
  const metaTitle = title || "Jam icons / 890+ pixel perfect icons"
  const metaDescription =
    "890+ handcrafted SVG icons to make your web app awesome."
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: "@michaelampr",
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },

        {
          name: "robots",
          content: "index,follow",
        },
        {
          name: "author",
          content: "Michael Amprimo <@michaeleampr>",
        },
        {
          name: "designer",
          content: "Michael Amprimo",
        },
        {
          name: "copyright",
          content: "©Jam Icons / All rights reserved",
        },
        {
          name: "url",
          content: "https://jam-icons.com",
        },
        {
          name: "msapplication-TileColor",
          content: "#ffc40d",
        },
        {
          name: "theme-color",
          content: "#f5c25a",
        },
        {
          property: "og:url",
          content: "https://jam-icons.com",
        },
        {
          property: "og:image",
          content: "https://jam-icons.com/img/jam-large.jpg",
        },
        {
          name: "twitter:site",
          content: "@michaelampr",
        },
        {
          name: "twitter:image",
          content: "https://jam-icons.com/img/jam-large.jpg",
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO
