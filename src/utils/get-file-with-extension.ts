import fs from 'fs';
import path from 'path';
import { FULL_FOLDER_PATH } from '../constants/images';

const getFileWithExtension = (fileName: string): unknown => {
  const absolutePath: string = path.resolve(
    __dirname,
    `../${FULL_FOLDER_PATH}`
  );

  const fileNamesWithExtensions = fs.readdirSync(absolutePath);

  return fileNamesWithExtensions.find((fileExtension) =>
    fileExtension.includes(fileName)
  );
};

export default getFileWithExtension;
