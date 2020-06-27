---
title: Introduction to git
category: git
date: 2020-01-07
authorID: 2
pageDescription: >-
  Git, simply put is a tool which we use to track the changes we make in our code while developing software. git also allows multiple developers work on a single project together without overwriting each other’s code.
pageKeywords: "git, what is git, introduction to git, GitHub, git basics, bitbucket, repository, version control, js"
cover: >-
  https://res.cloudinary.com/dillionmegida/image/upload/v1578440183/images/thewebfor5/what-is-git_upwrww.jpg
tags: ["git", "basics"]
---

## What is git?

Git, simply put is a tool which we use to track the changes we make in our code while developing software.

Tracking the changes we make is an amazing feature of git but the best part is git allows multiple developers to work on a single project together without overwriting each other’s code.

Remember the saying “too many cooks spoil the broth”, not in git. The more the merrier. Think about it like a pot of soup being prepared by a number of chefs, let’s say three chefs. One of the chef is tasked with seasoning, the second is tasked with spice and the third is tasked with thickness.

They all scoop out some soup and get to work, when they’re done, they all add their soup back to the pot.

Now the soup has been seasoned, spiced and thickened. This is one of the awesome things git allows us to do.

Another thing git can do is act as a time machine, as your codebase gets bigger, it would be really helpful to have something that stores different versions of your code so in case you run into a bug on the way you can always go back to a time when your code was bug free.

Back to the soup story, the three chefs all add their portion of soup back to the pot but we notice something off, the soup is salty. How do we solve this? If we add more water, the soup becomes watery and loses taste so we can’t do that, but what if we could go back in time?

What if we could go back in time to when the chef was seasoning his portion? At that point, we could reduce the salt thereby having a non-salty soup.

With git we can go back in time and redo things.

## git repository

Git makes use of something called repositories (repo for short). These are basically the storage location of a codebase and they can be either remote (online – stored by a server) or local (stored on your PC). Git makes use of both remote and local repositories and must be downloaded before it can be used, go here to [download](https://git-scm.com/downloads) (after download, run git --version on command prompt to verify if it was installed)

- **Remote Repository**: Companies like GitHub or Bitbucket can be used to store our code online in a repository. When creating a remote repo, you will be given the option of initializing git in that repo (this simply means “do you want to use git in this project or not?”). If git is initialized remotely, the repo still has to be cloned to the desktop for the git commands to work.
- **Local Repository**: We initialize git locally in our repo (which is basically a folder on our PC holding code files) by opening up git, navigating to the folder and running the command **git init**. This command will add a .git file to the folder showing that it is now a git repo and git commands can be used.

Git is used both locally and remotely by connecting the remote repo and the local repo through git.

- If a git repository was created remotely (online), it would have to be cloned to the users PC. When it is cloned, every single file in the repo will be available locally and the two repos become linked. If a change is made locally, it would be pushed to the remote repo through the use of a command.<br/>
  **Note:** When pushing to a remote repo for the first time, you will have to log in to your account so that git knows which account it is working with.
- However, if the repo was created locally, you would have to go online and create a remote repo first (which you wouldn’t initialize because a git repo has already been created locally), then you would go back to your PC and push the local repo (again, using a git command) to the remote repo using the remote repo URL thereby linking the two repos.

As long as they are linked, whatever changes made in any one of the changes will reflect in the other although the changes have to be added using a git command, it does not refresh automatically and reflect changes because that would be bad for business.

When using Git, try not to use commands that you do not fully understand or you might get into a tangle you might not be able to come out of, for example, delecting your project on repository, or resetting all changes to the default.

## Branches

How exactly does Git make it possible for multiple developers to work on the same project at the same time?

One word – **Branches**.

Branches here are like a backpack that allows you to hold a particular piece of code. They are created using the command **git branch**. The master branch is the default branch, it is created when git is initialized.

When a new branch is created, it automatically clones all of the code of the branch which it was created under and whatever change is made under that branch sticks with that branch.

e.g We have the master branch as default, we create a new branch under master branch and call it baby branch. Since we created baby branch under master branch, it copies all of master branch’s code. If we make any change to baby branch’s code, it will not affect master branch because they are now separate.

Another example is a mother and her child, she gives birth and her child takes all her features, both bad and good. However, the baby grows up and some features change, this will not affect the mother in any way, she will remain the same.

So, in Git, multiple developers who are working on one project can each create a branch of their own to hold the features they will be working on. Since they all have their branches, the main code will not be affected. When they are done with their part, they can merge their branch with the master branch.

During merging, git will compare the two branches thereby deleting and updating the necessary parts. It has an algorithm for determining which change is to say, be updated or to be removed.

Also during merging, there could be **merge conflicts**. These occurs in situations where two changes look so right to be true. At that point, the user would have to manually select the correct change.

Branches are used to avoid releasing bugs directly to software. The master branch is usually used as the production branch so it will hold the main source code of the application or site online. If the master branch is worked on directly, a lot of mistakes made in development will be visible to users using the software so it advisable to work on branches, and test for errors before merging changes.

It is also advisable to create a develop or development branch. This will be the branch that changes get merged to and then the develop gets merged to the master instead of merging with the master branch directly.

## Git Commands

Git commands are short pieces of instructions we use in git to perform certain functions. We’ve already seen some examples of git commands earlier e.g. git init, git merge, even git branch etc.

- **git init**: This command is used to initialize a git repository. It creates a .git file on the local repo. This command makes sure other git commands work.
- **git commit**: This command commits the file changes, this basically means the changes made on the file will be saved and now associated with the file.
- **git merge**: As we said earlier, git merge can be used to merge two branches together, as the merge occurs the changes made in one branch are added to the other branch it is being merged to.
- **git branch**: This command shows a list of all the branches on that repo.

There are so many git commands available to use, these few listed are but a small portion of the many git commands available.

Git is a very expansive topic and can easily get confusing, practicing using git will help your understanding. We would be looking at a step by step practical use of git in later articles
