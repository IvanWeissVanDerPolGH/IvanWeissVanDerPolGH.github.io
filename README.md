# Project Name

## Overview
This project is built using Jekyll, a static site generator, and utilizes TailwindCSS for styling. It's designed to be highly customizable with a focus on ease of content management and scalability. This site includes features like responsive navigation, social media integration, contact forms, and dynamically generated tables of contents for posts.

## Prerequisites
Before you begin, ensure you have the following installed:
- Ruby
- Bundler
- Node.js and npm

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**
   
   git clone https://your-repository-url.git
   cd your-project-directory
   

1. **Install dependencies:**


bundle install
npm install

1. **Build the project:**

bundle exec jekyll serve

This command will start a local server. Open `http://localhost:4000` in your browser to view the site.

## Content Management
### Updating Content
Content on this site is managed through Markdown files for simplicity and ease of update. Here's how to update different sections of the website:

- **Home Page, About, Projects, Education, and Work Experience:**
These pages are generated from Markdown files located in the `_Pages_content` directory. To update these pages, edit the corresponding Markdown file:
- `about.md` for the About page
- `projects.md` for the Projects page
- `education.md` for the Education page
- `work_experience.md` for the Work Experience page

Each file uses standard Markdown syntax. Here is an example of how to format your content:

- **Blog Posts:**
Posts are stored in the `_posts` directory. To add a new blog post:
1. Create a new file in the `_posts` directory.
2. Name the file with the following format: `YEAR-MONTH-DAY-title.MARKDOWN`.
3. Use the following front matter at the top of your post:
   ```yaml
   ---
   layout: post
   title: "Your Title Here"
   date: YEAR-MONTH-DAY
   ---
   ```
4. Write your post below the front matter in Markdown.

### Adding Images
To add images to your content:
1. Place your images in the `assets/img` directory.
2. Reference them in your Markdown or HTML files using relative paths, like so:
 ```markdown
 ![Alt text](/assets/img/your-image-file.png)

Updating Styling
TailwindCSS is used for styling. To modify the styles:

Edit the tailwind.config.js to customize Tailwind's default behavior.
Use Tailwind's utility classes within your HTML or Markdown files to apply styles directly.

