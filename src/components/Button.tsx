interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({ text, type = "button" }: ButtonProps) {
  return (
    <button type={type} className={"rounded-2xl bg-emerald-700 text-white font-bold px-5 py-3 w-auto hover:bg-emerald-800 transition"}>
      {text}
    </button>
  )
}