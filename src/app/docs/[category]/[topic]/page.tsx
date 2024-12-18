type Param = {
    category: string
    topic: string
}

const ROUTES: Record<string, string[]> = {
    components: ['button'],
}

const getFormattedRoutes = (): Param[] => {
    return Object.entries(ROUTES).flatMap(([category, topics]) =>
        topics.map((topic) => ({ category, topic }))
    )
}

export default async function Page({ params }: { params: Promise<Param> }) {
    const { category, topic } = await params

    const { default: Post } = await import(`@/doc-mds/${category}/${topic}.mdx`)

    return <Post />
}

export function generateStaticParams(): Param[] {
    return getFormattedRoutes()
}

export const dynamicParams = false
