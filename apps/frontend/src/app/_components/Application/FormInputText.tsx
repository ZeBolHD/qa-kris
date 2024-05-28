import { FieldErrors, UseFormRegister } from "react-hook-form";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isLoading: boolean;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  id: string;
}

const FormInputText = ({ register, errors, isLoading, id, ...props }: FormInputProps) => {
  return (
    <div className="w-full">
      <input
        className="w-full placeholder:text-primary-bg bg-transparent border-b-[1px] border-primary-bg focus:outline-none"
        type="text"
        {...props}
        {...register(id, {
          required: true,
        })}
        required
        disabled={isLoading}
      />
      {errors[id] && <p className="text-red-500">Поле обязательно для заполнения</p>}
    </div>
  );
};

export default FormInputText;
