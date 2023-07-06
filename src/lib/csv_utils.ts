import { createObjectCsvWriter } from 'csv-writer';

const shuffleArray = function (array: {key:string, value:string}[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function exportAlbumMapToCSV(map: Map<string, any>, filePath: string): void {
  const csvWriter = createObjectCsvWriter({
    path: filePath,
    header: [
      { id: 'key', title: 'Album' },
      { id: 'value', title: 'Href' },
    ],
    alwaysQuote: true,
  });

  const records = shuffleArray(Array.from(map, ([key, value]) => ({ key, value })));

  csvWriter.writeRecords(records)
    .then(() => console.log('CSV file was written successfully'))
    .catch((error) => console.error('Error writing CSV file:', error));
}




