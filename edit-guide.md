# Guide for easily editing the site
## Add new Categories
1. Add category to netlify cms by editing the config file - static/adming/config.yml.
2. Add category to Blog Categories - src/components/blog/categories/[category].js. Then, state the category name.
3. Add category page to src/pages/category/[category].js
4. Edit src/pages/categories.js. Set up the new category for getting the length and also add it to the category list