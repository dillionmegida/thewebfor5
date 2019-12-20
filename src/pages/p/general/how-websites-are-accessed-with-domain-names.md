---
title: How Websites are Accessed by Domain Names?
category: general
date: 12-19-2019
pageDescription: >-
  The browser searches for the DNS of the domain name the user requests. The DNS provides information such as the IP address to the browser thereby given the browser access to the contents of the website.
pageKeywords: 'web, what is web, what is a website, types of websites, static and dynamic, static and dynamic websites, introduction to the web, www'
cover: >-
  
tags: ["web", "dns"]
---

In this article, you'd learn **what a domain name is**, **why they were developed**, **what DNS is**, **how websites are accessed by domain names** and some **DNS terms**.

## What is a Domain Name?
A domain name is a [website (or web application)]()'s name. It can be likened to your house address. When anyone wants to visit you, you'd give them your house address right? This is similar to the address which identifies your website.

### Why was it developed?
If you are trying to be **specific** about your house address, it may be diffult for someone who wants to comprehend if not written (or stored somewhere) because it would have to contain the house number, street number, city name, state name, and also country name to name a few. But with a precise (and popular) name, your location can be easily accessed. For example, telling an Uber driver you are going to the White House.

The computers which keeps your website uses IP address which is a combination of numbers. e.g 192.163.443.448 The IP address is the specific address of your website but cannot be easily remembered. Domain names were developed as a means of creating a precise address with which your website can be accessed. This development is aided by Domain Name System (DNS).


## What is a Domain Name System?
This is an internet service which translates domain names (precise addresses) to their specific addresses. This is similar to a phonebook which stores numbers (addresses) by the defined names (domains). Generally, the DNS holds informations about domain names registered on it.

## How Websites are Accessed by Domain Names
When you try to open a website by it's domain name, the browser tries to know the IP address which the domain belongs to. In it's quest for this;
- the browser checks its cache (a temporary storage) if it remembers the DNS for the domain. If it doesn't find it,
- it checks the **recursive server**. This server is found in the network you are connected to. This could be the Internet Service Provider (ISP) providing you network, or it could be WiFi. These networks contains informations on default DNS servers which the browser should use when translating names to IPs. If the DNS isn't there,
- it reaches out to **Root Name Servers (RNS)** online. The work of these servers is to help the browser reach **Top-Level Domains (TLD)** for the nameservers. Examples of TLDs are **.com**, **.org**, etc. The respective TLD is gotten from the domain address typed in the browser.
- The TLDs communicates with the **authoritative nameservers** which knows all informations about the domain names. All informations are stored in the **DNS records**.
- Then the records are cached in the recursive servers and in the browsers cache.

The DNS server would search for the name and respond with the IP address of the website. The browser then gains connection with the web server by using the IP. By this connection, the contents of the website (webpages) can be gotten.

This is the simple process by which websites are accessed. For a more detailed explanation, check out this article - [DNS Explained - How Your Browser Finds Websites](https://scotch.io/tutorials/dns-explained-how-your-browser-finds-websites/amp).