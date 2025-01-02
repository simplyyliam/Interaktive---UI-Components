

interface ButtonProps {
    onClick: () => void
    Name: string
}

export function Button ({onClick, Name}: ButtonProps): JSX.Element {
    return (
        <button className="w-full text-start py-3 px-4 hover:bg-neutral-100 rounded-lg" onClick={onClick}> {Name} </button>
    )
}