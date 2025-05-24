type CheckboxProps = {
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  id?: string;
};

export function Checkbox({
  checked,
  onChange,
  id = "checkbox-orange",
}: CheckboxProps) {
  return (
    <label
      htmlFor={id}
      className="inline-block cursor-pointer select-none -webkit-tap-highlight-color-transparent">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <div
        className={`
          relative w-5 h-5 rounded-lg border-2
          transition-transform duration-200 ease
          border-orangeTheme-300 bg-white
          focus-within:ring-4 focus:ring-orangeTheme-200
          hover:scale-[1.05] active:scale-[0.95]
          ${checked ? "bg-orangeTheme-500 border-orangeTheme-500 " : ""}
        `}>
        <div
          className={`
            absolute inset-0 flex items-center justify-center
            transition-transform duration-200 ease
            ${checked ? "scale-100" : "scale-0"}
            text-orangeTheme-600
          `}>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="w-[80%] h-[80%]"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path
              className="transition-[stroke-dashoffset] duration-300 ease-in-out delay-100"
              strokeDasharray="40"
              strokeDashoffset={checked ? 0 : 40}
              d="M4 12L10 18L20 6"
            />
          </svg>
        </div>
      </div>
    </label>
  );
}
