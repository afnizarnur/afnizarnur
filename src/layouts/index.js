import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { createGlobalStyle, withTheme } from "styled-components"
import { useSiteMetadata } from "../utils/hooks"
import "sanitize.css"
import "./fonts/inter.css"

const GlobalStyles = createGlobalStyle`
  * {
    font-family: "Inter", system-ui, -apple-system, sans-serif!important;
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.gray[0]} !important;
    color: ${({ theme }) => theme.colors.black} !important;
  }

  a {
    color: inherit;
    text-decoration: none;
    text-decoration-skip: ink;
    text-decoration-skip-ink: auto;
  }

  .small-menu {
    background: #fff;
  }

  @media print {
    nav, footer {
      display: none !important;
    }

    #main-content {
      margin-bottom: 0 !important;
    }
  }

  @keyframes fadeInBottom {
    0% {
      transform: translateY(20px);
  
      opacity: 0;
    }
  
    100% {
      transform: translateY(0);
  
      opacity: 1;
    }
  }
`
const Layout = ({ children, theme }) => {
  const { title, description, siteUrl } = useSiteMetadata()

  return (
    <>
      <GlobalStyles />

      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content={theme.colors.black} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/thumbnail.jpg" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:site" content="@afnizarnur" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/thumbnail.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="apple-mobile-web-app-title" content="Afnizar Nur Ghifari" />
        >
        <meta name="application-name" content="Afnizar Nur Ghifari" />
        <meta name="msapplication-TileColor" content={theme.colors.black} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color={theme.colors.black}
        />
      </Helmet>

      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withTheme(Layout)