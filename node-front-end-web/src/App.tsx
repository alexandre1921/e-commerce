import { FileUpload } from "./components";

function App() {
  return (
    <div>
      <FileUpload
        helperText="Arraste ou clique aqui para enviar o arquivo de precificação."
        label="Arquivo de precificação"
        id="precification_file"
        name="precification_file"
      />
    </div>
  );
}

export default App;
