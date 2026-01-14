export function Card({ children }: { children: React.ReactNode }) {
    return (
      <div className="w-full max-w-sm bg-gray-100 shadow-2xl rounded-xl">
        {children}
      </div>
    );
  }