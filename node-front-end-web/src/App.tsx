import { Button } from 'flowbite-react';
import { ChangeEvent, useCallback, useRef, useState } from 'react';
import { FileUpload } from './components';

type FileReaderResultType = string | ArrayBuffer | null | undefined;

function App() {
  const currentFile = useRef<File | undefined>(undefined);
  const [csvReadAsText, setCsvReadAsText] = useState<FileReaderResultType>(undefined);

  const handleChangePrecificationFile = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;

    const file = e.target.files[0];
    const reader = new FileReader();

    currentFile.current = file;
    reader.onload = ({ target }) => setCsvReadAsText(target?.result);
    reader.readAsText(file);
  }, []);

  const handleClickValidate = useCallback(() => {
    console.log('validating...', currentFile.current, csvReadAsText);
  }, [csvReadAsText]);

  const isValidateButtonDisabled = !csvReadAsText;

  return (
    <div>
      <FileUpload
        helperText="Arraste ou clique aqui para enviar o arquivo de precificação."
        label="Arquivo de precificação"
        id="precification_file"
        name="precification_file"
        accept=".csv"
        multiple={false}
        onChange={handleChangePrecificationFile}
      />
      <Button onClick={handleClickValidate} disabled={isValidateButtonDisabled}>
        Validar
      </Button>
    </div>
  );
}

export default App;
