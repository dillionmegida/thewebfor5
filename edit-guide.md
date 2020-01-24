# Guide for easily editing the site
## Add new Categories
1. Add category to netlify cms by editing the config file - static/adming/config.yml.
2. Add category to Blog Categories - src/components/blog/categories/[category].js. Then, state the category name.
3. Add category page to src/pages/category/[category].js

## Add new Author
1. Add the author details in the author list - /src/components/Author/AuthorList.js
2. The slug which you'd use for the author should be used to create a new file in src/pages/author - [authorSlug].js
3. In the new file, import the author component and pass a prop of the authorID