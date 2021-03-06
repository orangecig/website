---
position: 1
title: How DatoCMS works
---

DatoCMS is a cloud-based content management system designed to work with static websites, mobile apps and server-side applications of any kind. Freelancers, agencies and startups use DatoCMS to allow non-technical clients and team members to manage the content of their digital products within a web-based CMS.

Once you signup to DatoCMS and create your account, you'll be able to create an arbitrary number of different projects. For each one of those you'll be given an administrative area at a specific domain (ie. https://my-project.admin.datocms.com) from which you'll be able to invite a number collaborators to manage its specific content. All the projects you create will be completely isolated from each other.

---

### DatoCMS for static websites

The first thing to understand is that — unlike other solutions — **DatoCMS is API-driven and decouples the content of your website from the Git repository** that contains the static website project. That is, content is created and managed independently from where it's used, and is always accessible through our REST API.

Put simply, DatoCMS is a client-friendly interface over a database – that means you can focus on your schema instead of a specific static generator setup. 

To make the integration with static generators convenient, we built a set of libraries and command-line tools that let you declare exactly **how content needs to be converted into Markdown/Yaml files**, so that they can be "digested" during the build phase of your static website generator just as if they were written by hand.

#### Advantages

Our decoupled architecture offers many advantages over the traditional storage of content within the Git repository of the project:

* **Hybrid websites:** the content of your website, while being used during the build phase of the site to produce the static HTML files, **can also be queried using client-side AJAX calls**: this allows a whole set of new dynamic functionalities, like search pages, that would be otherwise impossible to achieve with static websites;

* **Future-proof:** pretty much **any present (and future) static website generator is compatible with DatoCMS**. You are also free to switch to a different static website generator at any time, simply editing the configuration files that map remote content to local files;

* **Interoperability**: using our REST API, the content of your static website can easily be used in other contexts (ie. mobile/desktop apps).
