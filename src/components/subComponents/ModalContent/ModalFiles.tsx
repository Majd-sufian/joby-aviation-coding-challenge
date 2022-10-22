import FileCard from "./FileCard";
import { File } from "../../../types";

interface ModalFilesProps {
  files: Array<File>;
}

const ModalFiles: React.FC<ModalFilesProps> = ({ files }) => {
  return (
    <div className="ModalFiles flex">
      <div className="files">
        <h2>Files</h2>
        <span>Select a Department</span>
        <div className="deparments__buttons flex column">
          <button>Process Engineering</button>
          <button className="secondary__button">Quality</button>
          <button>Programming</button>
          <button>Surface Treatment</button>
        </div>
      </div>

      <div className="files__list flex column">
        {files.map((file: File, idx) => (
          <FileCard key={idx} file={file} />
        ))}
      </div>
    </div>
  );
};

export default ModalFiles;
