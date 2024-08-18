async function convertFile(file: FileList): Promise<string | ArrayBuffer | null | void> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file[0]);
  });
}

export default convertFile;
