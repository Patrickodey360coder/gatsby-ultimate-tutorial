import * as React from "react"
import PropTypes from "prop-types"
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok"
import Teaser from './teaser'
import Grid from "./grid"
import Feature from "./feature"
import Navigation from "./navigation"
import Footer from "./footer"
import Config from "./config"
import MenuLink from "./menuLink"
import Hero from "./hero"

storyblokInit({
  accessToken: process.env.GATSBY_PREVIEW_STORYBLOK,
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    config: Config,
    hero: Hero,
    "menu_link": MenuLink
  }
});

const Layout = ({ children }) => {
  return (
    <div className="text-center">
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout