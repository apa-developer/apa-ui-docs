import { ReactNode } from 'react'
import RainbowCursor from '../common/cursor'

type Props = {
    children: ReactNode
}

const MainLayout = ({ children }: Props) => {
    return (
        <>
            <header className="sticky top-0">
                <div className="container">
                    <div className="flex items-center justify-between py-6">
                        <a href="#" className="text-lg font-bold">
                            Apa UI
                        </a>
                        <nav className="flex gap-8">
                            <a href="#" className="hover:underline">
                                Docs
                            </a>
                            <a href="#" className="hover:underline">
                                Github
                            </a>
                            <a href="#" className="hover:underline">
                                Discussion
                            </a>
                        </nav>
                    </div>
                </div>
            </header>
            {children}
            <RainbowCursor />
        </>
    )
}

export default MainLayout
