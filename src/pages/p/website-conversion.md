---
title: "Website Converstion From PHP to JS (Gatsby)"
date: "08-31-2019"
readTime: "4 mins"
pageDescription: "I converted my website from PHP to Gatsby. In this article, I explain the reasons behind the conversion and the methods I used to achieve it."
pageKeywords: "Website Conversion, Dillion, Megida, Convert Website"
tags: ["php", "gatsby"]
---

Welcome to my Blog &#128519;
### Quick Intro...
I am Dillion Megida, a frontend developer, technical writer and graphics designer.
<br/>
I write on web development, mostly frontend. I try my best in explaining to the best of my knowledge - giving examples, sharing resources - in any topic I am writing about. I also write on <a href='https://dev.to/dillionmegida' title='Dev.to - Dillion Megida'>Dev.to - Dillion Megida</a> and <a href='https://dillion.hashnode.dev' title='Hashnode - Dillion Megida'>Dillion Hashnode Blog</a>.

### My Blog - dillionmegida.com
I launched this blog during June, 2019 and wrote had my first article written, <a href='/first-blog' title='My first Blog'>Dillion Megida - First Blog</a> on the 18th of the same month where I shared a bit about my journey into Web Development and Graphics Designing.

### The Conversion
I had all files written in PHP.
<br>
I tried implementing `Model-View-Controller (MVC)` structure. There was no `Model` though, as I wasn't working with any database.<br/>
I just had the controllers controlling the views.<br/>
It was a nice implementation I would be honest.

At that moment, I wasn't too professional with PHP. I've been advised by friends to learn Laravel and some other suggested frameworks, but I wanted to be **JS-Focused**. <br/>
My aim was to be a Javascript Full-stack developer, since Javascript was doing a lot those days. PHP was just a one-sided skill. Advancing in PHP was a bit more of a future plan &#128533;

My website was going fine until I wanted to write another article. It was almost as developing a new webpage and inserting code snippets was a big headache.<br />
This is the major reason my blog has been idle for a while. I worked towards a solution so that I could start writing more articles.

#### My Implementation
I had a `blog-template.php` file.<br/>

```php
<?php

$title = 'Dillion Megida - '.$blogTitle;
require_once 'public/common/headTag.php';

?>                  
...
<h2><?= $blogTitle ?></h2>
<p><?= $date ?></p>
<hr>
<p class="content"><?= $content ?></p>
...
<?php
...
?>
```
These are important parts of my file. So, on each blog, I simply state the variables - `$blogTitle`, `$date`, `$content`.
<br/>
The `$blogTitle` is used for the title of the page, and the `<h2>` tag of the blog.<br/>
The `$date` is used for date of blog.<br/>
The `$content` is used to get the contents of the blog.
> ##### Please note that styles were stated on this page

On each blog, say, `first-blog.php`, I would have
```php
<?php

$blogTitle = 'Dillion Megida - First Blog';
$date = '18th July, 2019';
$content = "
This is my first blog.
<br/>
I have a little code.
<pre>
<code class='language-javascript'>
console.log('first blog')
</code>
</pre>
"

require 'public/common/blog-template.php';

?>
```
This was pretty much it. <br/>
Noticed how I added code-snippets? This was possible after importing the source code of `prism.js syntax highlight` in my head tag.
<br/>
Having `<pre>`s and `<code>`s everywhere and declaring class of language was kind of a task.

I then remembered that GitHub uses `markdowns` and also **Dev.to** which I am quite familiar with uses it. I make my formats by adding things like `## for bold`, `[]() for links`, ` ``` ``` for adding codes`, and so on. This seemed like a solution to me.

While carrying out research on `.md` files and blogs, I encountered `Static Site Generators`. I read their implementations and to me, this was the perfect fix. But, there were (and still are) so many SSGs - `Next.js`, `GatsbyJS`, `Hugo`, to name a few.

I threw out a question on Twitter asking for the best SSG and many suggested Gatsby. I also checked a professional developer () <a href='https://florin-pop.com' href='Florin Pop'>Florin Pop's Blog's</a> source code and noticed `__gatsby` &#128558; Gatsby to the Rescue &#128640; <br/>
I gave it some research and discovered it uses `React`. At that moment, I was learning React so I felt it would improve my understanding of React.

I followed the tutorials on their website - how to setup environment, how use components (and those provided by Gatsby), how to run GraphQL queries (which could transform .md files), how to programatically add data to a page, how to build and serve project, and so on. <br/>
They also made an example with a little blog.<br/>
At this point, I made up my mind. I started breaking my website into components, and grouping them together, until I achieved the website back (though with new styles). I also used GraphQL as I learnt from their tutorials.

I would be honest, learning Gatsby wasn't easy. I publicly committed to some goals on Twitter on the 3rd of this month, August, which included converting my website. You wouldn't believe that I just finished and updated my blog today, the 31st of the same month &#128514; <br/>
I'm though happy I was able to achieve this goal.

Now, I have an easy blogging platform. Easy markdowns and easy cody syntax highlighting. <br/>
Like I said earlier, this was what kept my blog idle for some days.<br/>
Now, I'd put in my best in writing more articles and helping the community the best ways I can.<br/>

You can connect to me on Twitter <a href='https://twitter.com/iamdillion'>@iamdillion</a>. My DMs are always open.

Thanks for reading &#128522;
