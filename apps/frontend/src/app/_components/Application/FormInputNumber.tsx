import { FieldErrors, UseFormRegister } from "react-hook-form";

interface FormInputNumberProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isLoading: boolean;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  id: string;
  min?: number;
  max?: number;
}

const FormInputNumber = ({
  register,
  errors,
  isLoading,
  id,
  min,
  max,
  ...props
}: FormInputNumberProps) => {
  return (
    <div className="w-full">
      <input
        className="w-full placeholder:text-primary-bg bg-transparent border-b-[1px] border-primary-bg focus:outline-none"
        type="number"
        {...props}
        {...register(id, {
          required: true,
          valueAsNumber: true,
          min: min,
          max: max,
        })}
        required
        disabled={isLoading}
        min={min}
        max={max}
      />
      {errors[id] && <p className="text-red-500">Поле обязательно для заполнения</p>}
    </div>
  );
};

export default FormInputNumber;
