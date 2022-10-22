interface FileCardProps {
  file: any;
}

const FileCard: React.FC<FileCardProps> = ({ file }) => {
  return (
    <div className="file__card flex">
      <div className="file__image"></div>
      <div className="file__details">
        <div className="file__name__date flex">
          <span>{file.name}</span>
          <span>{file.date}</span>
        </div>
        <div className="file__description">{file.description}</div>
      </div>
    </div>
  );
};

export default FileCard;
