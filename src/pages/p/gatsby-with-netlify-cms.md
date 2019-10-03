---
title: Gatsby with Netlify CMS
date: 2019-10-02T21:07:33.244Z
readTime: 3 mins
pageDescription: Managing contents in Gatsby site with Netlify Content Management System (CMS)
pageKeywords: 'gatsby, cms, netlify, netlify cms, gatsby blog, gatsby netlify'
---
In this article, I'd be explaining how to manage contents (which are published continuously) with Netlify CMS.

I'd assume that you have a Gatsby site already running. Also, I'd be more particular about blogs since they a better example for a regular publishing site. However, there are greater powers of Gatsby and Netlify CMS.

## Introduction

### What is Netlify CMS?

From [netlifycms.org/docs](https://www.netlifycms.org/docs/intro/)

> Netlify CMS is an open source content management system for your Git workflow that enables you to provide editors with a friendly UI and intuitive workflows. You can use it with any static site generator to create faster, more flexible web projects. Content is stored in your Git repository alongside your code for easier versioning, multi-channel publishing, and the option to handle content updates directly in Git.

### My Little Story

When I started running this website, I'd have to pass through the following process to publish an article;

* Write the article in a markdown file of which [`gatsby-source-filesystem`](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/) working with [`gatsby-transformer-remark`](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/) and [`createPages API`](https://www.gatsbyjs.org/tutorial/part-seven/) would automatically create a HTML page for the file.
* Push the file to my Github repository when the article is ready
* Access my Ubuntu system on digitalocean, pull files from repository and serve from there.

Peradventure any typo, I would edit the file, push and pull again.

This is obviously a long process

### How does Netlify CMS come in?

With this, I am presented with a 'friendly UI' where I can manage my contents.I can also view workflows - my articles in draft mode, in ready mode, etc - and manage generally everything that I have configured the CMS for.
When I publish create and publish an article, it automatically creates and merges a pull request for that article and with the power of Netlify, my site is also automatically built in response to the repository changes.
Now, my focus is centered on the CMS rather than my former procedures. Pretty much how CMS works.

### So, How?

## Setting up Netlify CMS with your gatsby site.

You wouldn't want to manage contents that you rarely update or change because it wouldn't seem necessary, though, you still could.
Like I stated earlier, I'd be using a blog for example.

* Want to build a Gatsby site having a blog of yours from scratch? [Check out this Gatsby tutorial](https://www.gatsbyjs.org/tutorial/) or
* Use this [Gatsby starter blog template](https://github.com/gatsbyjs/gatsby-starter-blog)

At this point, I want to believe that your site is running locally and also you have a repository for your files.

### Steps

* Install Netlify CMS package and setup Gatsby configurations
* CMS configuration file
* Create Netlify Application
* Setup configurations
* ...you are good to go.
* Resources

#### Install Netlify CMS package and setup Gatsby Configurations

```shell
npm install --save netlify-cms-app gatsby-plugin-netlify-cms
```

These helps us create the CMS page for managing our contents depending on the configurations setup for it. You'd also need to edit `gatsby-config.js`

```js
plugins: [
    `gatsby-plugin-netlify-cms`
]
```

#### CMS configuration file

The CMS would need a configuration file to work on - `config.yml`. This file would be located in an `static/admin/`. The plugins help in generating an `admin/index.html` file from our configuration. A sample could be

```yml
backend:
    name: github
    repo: your-username/the-repo
media_folder: "static/img/uploads"
public_folder: "img/uploads"
collections:
    - name: "blogs"
      label: "Blogs"
      description: "Blog Posts"
      folder: "src/pages/post"
      create: true
      fields:
    - { name: title, label: Title }
    - { name: date, label: Date, widget: date }
    - { name: body, label: Body, widget: markdown }
publish_mode: editorial_workflow
```

* The **backend** option specifies how to access the content for your site, including authentication.
* The **media_folder** specified tells the CMS where to upload your images or videos to.
* The **public folder** is pretty much where the published are accessed.
* **Collections** determine our contents.
As seen above, we want to control blog contents.
A folder is specified which we would get and also load our contents from. It may be different in your repository but the target is the location of your posts.
The fields mentioned are those you'd like to fill in when writing post. They are just like the frontmatter and body you create when writing markdown files.
* The **publish_mode** allows you specify controls for the different phases of publishing contents.

At this point, you can run `gatsby develop` to see for yourself.

When you write a new blog and publish, it merges pull requests sent from the CMS to your repository.
Push your changes to your repository.

### Create Netlify Application

Go to [app.netlify.com](https://app.netlify.com). Sign up on netlify if you haven't to gain access. Select 'New site from git', choose your repository provider (e.g Github).
You'd have to select the particular repository to use. You may have to grant other permissions like authentications.

### Setup configurations

After selecting your repository, you'd have to make some configurations for the deployments such as the public folder and the build command. Click deploy site when done.
You can also change your site name as obviously, the given name wouldn't be admirable.

#### ...you are good to go

After deployment, go to your site's admin page ('your-site.netlify.com/admin/') and you can create a new post. You fill in the fields which are from our `config.yml` title, date and body. When you click Publish, a pull request made my Netlify (when working on the post) would be merged.
Automatically, Netlify would begin deploying the site (upon the change detected on your repo). After deployment, you can go to your site's blog page and you'll see your new post.

> Before clicking publish, you can leave posts in draft or review mode pending when you want to finish the post.

Fascinating right? 😎

* You could create more collections which are contents you'd like to manage.
* You can also use a custom domain instead of the Netlify given site - [Check Netlify's doc on how-to](https://www.netlify.com/docs/custom-domains/)

I do hope you have been able to learn a thing or two from this article

### Resources
- [Sourcing from Netlify CMS - Gatsbyjs](https://www.gatsbyjs.org/docs/sourcing-from-netlify-cms/)
- [Making a Gatsby blog with Netlify CMS | GatsbyJS](https://www.gatsbyjs.org/tutorial/blog-netlify-cms-tutorial/)

Thanks for reading : )

Feel free to ask questions or make contributions in the comment section. Also you could
