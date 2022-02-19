import fs from 'fs';
import path from 'path';
import { THUMB_FOLDER_PATH } from '../constants/images';

const readFilesNames = (filePath: string = THUMB_FOLDER_PATH): string[] => {
  const absolutePath: string = path.resolve(__dirname, `../${filePath}`);
  fs.mkdirSync(absolutePath, { recursive: true });

  const fileNamesWithExtensions = fs.readdirSync(absolutePath);

  const filesNames: string[] = fileNamesWithExtensions.map(
    (fileNameWithExtension: string) => {
      const fileName: string = fileNameWithExtension.replace(
        path.extname(fileNameWithExtension),
        ''
      );

      return fileName;
    }
  );

  return filesNames;
};

export default readFilesNames;
