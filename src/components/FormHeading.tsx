interface FormHeadingProps {
    title: string;
  }
  
  export function FormHeading({ title }: FormHeadingProps) {
    return (
      <h1 className="text-4xl text-center my-6">
        {title}
      </h1>
    );
  }