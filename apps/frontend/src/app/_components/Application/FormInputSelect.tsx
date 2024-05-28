import { FieldErrors, UseFormRegister } from "react-hook-form";

interface FormInputSelectProps {
  isLoading: boolean;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  id: string;
  options: any[];
  placeholder?: string;
}

const FormInputSelect = ({
  register,
  errors,
  isLoading,
  id,
  options,
  placeholder,
}: FormInputSelectProps) => {
  return (
    <div className="w-full">
      <select
        id={id}
        className="w-full placeholder:text-primary-bg bg-transparent border-b-[1px] border-primary-bg focus:outline-none"
        {...register(id, {
          required: true,
        })}
        defaultValue={""}
        disabled={isLoading}
      >
        <option className="w-full bg-primary-dark text-secondary-light" disabled value={""}>
          {placeholder}
        </option>
        {options.map((service) => (
          <option key={service} value={service} className="w-full bg-primary-dark">
            {service}
          </option>
        ))}
      </select>

      {errors[id] && <p className="text-red-500">Должно быть выбрано одно из значений</p>}
    </div>
  );
};

export default FormInputSelect;
