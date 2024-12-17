import createMDX from '@next/mdx'
import type { NextConfig } from 'next'
import remarkGfm from 'remark-gfm'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import torchlight from 'remark-torchlight'

const nextConfig: NextConfig = {
    output: 'export',
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkGfm, torchlight],
        rehypePlugins: [],
    },
})

export default withMDX(nextConfig)
