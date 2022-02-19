import path from 'path';
import { FORMAT_ENUM } from '../constants/images';
import getFileWithExtension from '../utils/get-file-with-extension';
import readFilesNames from '../utils/read-files-names';

describe('Utils', () => {
  it('Read File Names from resources', () => {
    const filesNames = readFilesNames('../assets/full');
    expect(filesNames.length).toBeGreaterThan(1);
  });

  it('Get file name with extension', () => {
    const filesNames = readFilesNames('../assets/full');
    const filename = filesNames[0];

    const fileNameWithExtension = getFileWithExtension(filename);

    expect(FORMAT_ENUM).toContain(
      path.extname(fileNameWithExtension as string).replace('.', '')
    );
  });
});
