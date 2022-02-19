import processingImage from '../../services/images';
import readFilesNames from '../../utils/read-files-names';

describe('Image services', () => {
  it('Should processing image without Error', async () => {
    expect(async () => {
      await processingImage({ filename: 'palmtunnel' });
      const files = readFilesNames();
      expect(files).toContain('palmtunnel');
    }).not.toThrow();
  });

  it('Should processing image, with width and height options without Error', async () => {
    expect(async () => {
      await processingImage({
        filename: 'palmtunnel',
        width: 200,
        height: 200,
      });
      const files = readFilesNames();
      expect(files).toContain('palmtunnel');
    }).not.toThrow();
  });
});
