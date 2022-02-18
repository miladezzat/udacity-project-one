import path from 'path';
import sharp from 'sharp';
import { promises as fsPromises} from 'fs';
import { FULL_FOLDER_PATH, THUMB_FOLDER_PATH } from '../constants/images';
import cache from '../utils/cache';
import getFileExtension from '../utils/get-file-extension';
import { IProcessingImage } from './images.interface';


const processingImage = async (args: IProcessingImage) => {
    const { filename, width, height } = args;

    const name = getFileExtension(filename) as string

    const imagePath: string = path.resolve(
        __dirname,
        `../${FULL_FOLDER_PATH}/${name}`
    );
    
    const thumbPath: string = path.resolve(
        __dirname,
        `../${THUMB_FOLDER_PATH}/${name}`
    );

    const isExist = cache.isExist(name);    

    if (isExist) {
        return fsPromises.readFile(thumbPath);
    }

    const resizeOptions: {
        width?: number;
        height?: number;
    } = {};

    if (width) {
        resizeOptions.width = +width;
    }

    if (height) {
        resizeOptions.height = +height;
    }

    await sharp(imagePath).resize(resizeOptions).toFile(thumbPath);

    return fsPromises.readFile(thumbPath);

};

export default processingImage;
