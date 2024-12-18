import Button from '@/components/common/button'

export default function Home() {
    return (
        <>
            <main className="py-36">
                <div className="container">
                    <div className="flex justify-center">
                        <div className="flex max-w-5xl flex-col items-center gap-8 text-center">
                            <h1 className="text-8xl">
                                Yet Another{' '}
                                <span className="h-18 rotate-45 rounded-2xl border-2 bg-amber-500 px-6 align-middle text-6xl">
                                    UI Library
                                </span>{' '}
                                Developed Using{' '}
                                <span className="h-86 rotate-45 rounded-2xl border-2 bg-teal-500 px-6 align-middle text-6xl">
                                    Tailwind CSS
                                </span>
                            </h1>
                            <p className="max-w-xl text-lg">
                                Apa UI is a lightweight UI component library built with TailwindCSS
                                and inspired by Neo-Brutalism. Simple to set up, easy to use, and
                                full of style—perfect for building something different, fast.
                            </p>
                            <Button className="h-18 rounded-2xl px-12 text-lg">
                                Check out the Docs
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
