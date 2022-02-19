import readFilesNames from "../utils/read-files-names";

describe('Utils', () => {

    it('Read File Names from resources', () => {
        const filesNames = readFilesNames('../assets/full');
        expect(filesNames.length).toBeGreaterThan(1);
    })
})