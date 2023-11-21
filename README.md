# The Storyblok Gatsby Ultimate Tutorial

In this tutorial series, you will learn how to build a headless website using Storyblok and Gatsby. Starting with the fundamental integration of Storyblok in Gatsby, more advanced functionalities are explained in bite-sized content pieces, such as dynamic page rendering, dynamic menus, custom components, multilingual content and more.

You can switch between the different branches of this repository; there is one branch for each tutorial part. Alternatively, you may want to check out the live demos on StackBlitz. You can even replicate the corresponding Storyblok space for each of the tutorial parts in order to explore its exact configuration.

## Tutorial Parts

### Part 1
 - Tutorial: [Add a headless CMS to Gatsby in 5 minutes](https://www.storyblok.com/tp/add-a-headless-cms-to-gatsby-5-minutes)
 - Branch: [part-1](https://github.com/storyblok/gatsby-ultimate-tutorial/tree/part-1)
 - Storyblok space: [Create your own copy](https://app.storyblok.com/#!/build/166651)

 ### Part 2
 - Tutorial: [Render Storyblok Stories Dynamically in Gatsby](https://www.storyblok.com/tp/render-storyblok-stories-dynamically-in-gatsby)
 - Branch: [part-2](https://github.com/storyblok/gatsby-ultimate-tutorial/tree/part-2)
 - Storyblok space: [Create your own copy](https://app.storyblok.com/#!/build/166652)

  ### Part 3
 - Tutorial: [Create Dynamic Menus in Storyblok and Gatsby](https://www.storyblok.com/tp/create-dynamic-menus-in-storyblok-and-gatsby)
 - Branch: [part-3](https://github.com/storyblok/gatsby-ultimate-tutorial/tree/part-3)
 - Storyblok space: [Create your own copy](https://app.storyblok.com/#!/build/168925)

  ### Part 4
 - Tutorial: [Create Custom Components in Storyblok and Gatsby](https://www.storyblok.com/tp/create-custom-components-in-storyblok-and-gatsby)
 - Branch: [part-4](https://github.com/storyblok/gatsby-ultimate-tutorial/tree/part-4)
 - Storyblok space: [Create your own copy](https://app.storyblok.com/#!/build/166654)

  ### Part 5
 - Tutorial: [Create and Render Blog Articles in Storyblok and Gatsby](https://www.storyblok.com/tp/create-and-render-blog-articles-in-storyblok-and-gatsby)
 - Branch: [part-5](https://github.com/storyblok/gatsby-ultimate-tutorial/tree/part-5)
 - Storyblok space: [Create your own copy](https://app.storyblok.com/#!/build/169999)

  ### Part 6 - Coming soon
 - Tutorial: Manage Multilingual Content in Storyblok and Gatsby
 - Branch: part-6
 - Storyblok space: Create your own copy
=======
<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's default starter
</h1>

Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.com/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI ([install instructions](https://www.gatsbyjs.com/docs/tutorial/getting-started/part-0/#gatsby-cli)) to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the default starter
    gatsby new my-default-starter https://github.com/gatsbyjs/gatsby-starter-default
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-default-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/getting-started/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries).

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🚀 Quick start (Netlify)

Deploy this starter with one click on [Netlify](https://app.netlify.com/signup):

[<img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" />](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a typical Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

1.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

1.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

1.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

1.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1.  **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/docs/tutorial/getting-started/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[Build, Deploy, and Host On Netlify](https://netlify.com)

The fastest way to combine your favorite tools and APIs to build the fastest sites, stores, and apps for the web. And also the best place to build, deploy, and host your Gatsby sites.

<!-- AUTO-GENERATED-CONTENT:END -->

