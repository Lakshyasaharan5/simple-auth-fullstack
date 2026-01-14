interface InputFieldProps {
    type: string;
    placeholder: string;
    value: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  export function InputField({ type, placeholder, value, name, onChange }: InputFieldProps) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={(e) => onChange(e)}
        className="border rounded px-2 py-2"
      />
    );
  }