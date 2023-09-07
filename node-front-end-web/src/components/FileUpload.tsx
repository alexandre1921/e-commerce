import { FileInput, Label } from 'flowbite-react';
import { ChangeEvent } from 'react';

interface Props {
  helperText: string;
  id: string;
  name: string;
  label: string;
  multiple: boolean;
  accept: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function FileUpload({ helperText, id, name, label, multiple, accept, onChange }: Props) {
  return (
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="file" value={label} />
      </div>
      <FileInput helperText={helperText} id={id} name={name} multiple={multiple} accept={accept} onChange={onChange} />
    </div>
  );
}
