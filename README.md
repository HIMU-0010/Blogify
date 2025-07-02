# LWS Blogify - Next.js Blog Application

A modern, responsive blog application built with Next.js 14, featuring server-side rendering, dynamic routing, and advanced filtering capabilities.

##  Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HIMU-0010/Blogify.git
   cd Blogify
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

##  Usage

### Adding New Blog Posts

Edit the `data/data.json` file to add new blog posts:

```json
{
  "title": "Your Blog Title",
  "description": "<p>HTML content of your blog post...</p>",
  "date": "2024-01-25",
  "category": "Your Category",
  "author": {
    "name": "Author Name",
    "avatar": "https://example.com/avatar.jpg"
  }
}
```

### URL Structure

- **Homepage**: `/` - Lists all blogs with filtering options
- **Filtered**: `/?categories=PhotoGraphy,Self-Healing&sort=latest` - Filtered and sorted blogs
- **Blog Detail**: `/blog/your-blog-title-slug` - Individual blog post


**Happy Coding 🚀**
```

