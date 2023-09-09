import { FileInput, Label } from 'flowbite-react';
import { useFormikContext } from 'formik';
import { ChangeEvent, useCallback, useState } from 'react';

interface Props {
  helperText: string;
  id: string;
  name: string;
  label: string;
  color?: 'gray' | 'failure';
  multiple: boolean;
  accept: string;
}

export function FileUpload({ helperText, id, name, label, color = 'gray', multiple, accept }: Props) {
  const { setFieldValue } = useFormikContext();
  const [isErrored, setIsErrored] = useState(false);

  const handleChangeFile = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files?.[0]) {
        setIsErrored(true);
        return;
      }

      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = ({ target }) => {
        setFieldValue(name, target?.result);
        setIsErrored(false);
      };
      reader.readAsText(file);
    },
    [name, setFieldValue],
  );

  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor="file" color={color} value={label} />
      </div>
      <FileInput
        helperText={isErrored ? 'Erro ao enviar arquivo' : helperText}
        color={isErrored ? 'failure' : color}
        id={id}
        name={name}
        multiple={multiple}
        accept={accept}
        className="w-full"
        onChange={handleChangeFile}
      />
    </div>
  );
}
