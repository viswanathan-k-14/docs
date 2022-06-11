# HelpDocs Starter Template - Bars V4

## What's new in V4 templates?

V4 templates are our fastest, most accessible templates ever. We've redesigned them from the ground up so you can create a fast, unique support experience for every customer.

### CSS Grid

To make templates faster, we're using [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) for the layout. It's a powerful layout system that lets you create complex layouts _without_ the need for external libraries like Bootstrap.

We recommend learning the fundamentals over here: https://gridbyexample.com.

### Removal of jQuery

To get the fastest experience by default we've rewritten our core templates to use JavaScript without jQuery. For finding JavaScript alternatives to common jQuery functions, head over to [You Might Not Need jQuery](http://youmightnotneedjquery.com).

## First time guide

We use the templating language [Handlebars](https://handlebarsjs.com/) to create themes.

1. Enable Custom HTML templates in HelpDocs. Head to **Settings** > **Brand**, and choose **Custom** as your **Template**
2. The files in this folder match up with the headers in **Settings** > **Templates**. You should copy each to their respective tab and hit **Save**
2. Copy the content from `scripts.js` in this folder into **Settings** > **Code** > **Scripts** and hit **Save**
3. You can load our default CSS from the HelpDocs CDN by adding this line to the top of **Settings** > **Code** > **Scripts**:
```
<link rel="stylesheet" type="text/css" href="https://cdn.helpdocs.io/css/v4/bars.min.css?cb=custom">
```

**Want to customize the CSS instead?** Don't insert the `<link ...>` above. Head to [the CSS file](https://cdn.helpdocs.io/css/v4/bars.min.css?cb=custom) in your browser and copy the contents into **Settings** > **Code** > **CSS**.

You can find more extensive documentation on getting set up on our support site:
- [Getting Started with a Custom HTML Template](https://support.helpdocs.io/article/l8q1fmsnx7-getting-started-with-a-custom-html-template)
- [Handlebars Helpers for Custom Templates](https://support.helpdocs.io/article/kvaf7f4kf9-handlebars-helpers-for-custom-templates)


Now you can edit any of the files to your heart's content. 🎉
