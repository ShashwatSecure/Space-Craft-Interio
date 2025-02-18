import { twMerge } from "tailwind-merge"

const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={twMerge("w-[100vw] min-h-[100vh] h-auto", className)}>
            {children}
        </div>
    )
}

export default Container