import { FileInput, Label } from "flowbite-react";

interface Props {
  helperText: string;
  id: string;
  name: string;
  label: string;
}

export function FileUpload({ helperText, id, name, label }: Props) {
  return (
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="file" value={label} />
      </div>
      <FileInput helperText={helperText} id={id} name={name} />
    </div>
  );
}
