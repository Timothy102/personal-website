const remarkMDXImages = () => {
  return async function transformer(tree) {
    const visit = (await import('unist-util-visit')).default
    
    visit(tree, 'image', (node) => {
      // Convert standard markdown image to MDX component
      node.type = 'mdxJsxFlowElement'
      node.name = 'MDXImage'
      node.attributes = [
        { type: 'mdxJsxAttribute', name: 'src', value: node.url },
        { type: 'mdxJsxAttribute', name: 'alt', value: node.alt || '' }
      ]
    })
  }
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMDXImages],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  images: {
    domains: [], // Add domains if needed
  },
}

module.exports = withMDX(nextConfig)