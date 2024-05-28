import { FieldErrors, UseFormRegister } from "react-hook-form";

interface FormInputTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isLoading: boolean;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  id: string;
}

const FormInputTextarea = ({
  register,
  errors,
  isLoading,
  id,
  ...props
}: FormInputTextareaProps) => {
  return (
    <div className="w-full">
      <textarea
        className="w-full placeholder:text-primary-bg bg-transparent border-b-[1px] border-primary-bg focus:outline-none"
        id={id}
        placeholder="Комментарий"
        {...register(id)}
        disabled={isLoading}
        {...props}
      />
    </div>
  );
};

export default FormInputTextarea;
