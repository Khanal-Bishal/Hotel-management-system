import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface InputWithLabelProps {
  htmlFor: string;
  label: string;
  type: string;
  placeholder: string;
}
const InputWithLabel = ({
  htmlFor,
  label,
  type,
  placeholder,
}: InputWithLabelProps) => {
  return (
    <div className="my-4 flex flex-col gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input id={htmlFor} type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputWithLabel;
