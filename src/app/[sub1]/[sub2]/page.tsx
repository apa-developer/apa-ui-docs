import type { Param } from './_types/param'
import { routes } from './_routes'

export default async function Page({ params }: { params: Promise<Param> }) {
    const { sub1, sub2 } = await params

    const { default: Post } = await import(`@/doc-mds/${sub1}/${sub2}.mdx`)

    return <Post />
}

export function generateStaticParams(): Param[] {
    return routes
}

export const dynamicParams = false
