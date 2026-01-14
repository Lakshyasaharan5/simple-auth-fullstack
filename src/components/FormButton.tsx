interface FormButtonProps {
    title: string
}

export function FormButton({ title }: FormButtonProps) {
    return (
        <button
            type="submit"
            className="cursor-pointer bg-gray-800 text-white py-2 rounded hover:bg-gray-800/90 hover:-translate-y-0.5 shadow-xl hover:shadow-2xl active:translate-y-0"
        >
            {title}
        </button>
    );
}