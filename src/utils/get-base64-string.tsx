import convertFile from './convert-file';

async function getBase64String(fileList: FileList | null | undefined): Promise<string> {
  if (!fileList || fileList.length === 0) return '';

  let imageBase64Str = '';
  const convertedFile = await convertFile(fileList);
  if (typeof convertedFile === 'string') imageBase64Str = convertedFile;

  return imageBase64Str;
}

export default getBase64String;
