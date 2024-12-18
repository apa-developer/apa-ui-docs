import type { Param } from './_types/param'

const ROUTES: {
    [sub1: string]: string[]
} = {
    components: ['button'],
}

const getNEXTJSFormattedRoutes = (): Param[] =>
    Object.keys(ROUTES).flatMap((sub1) =>
        ROUTES[sub1].map((sub2) => ({
            sub1,
            sub2,
        }))
    )

export const routes: Param[] = getNEXTJSFormattedRoutes()
