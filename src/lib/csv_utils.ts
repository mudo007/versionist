import { createObjectCsvWriter } from 'csv-writer';

export function exportAlbumMapToCSV(map: Map<string, any>, filePath: string): void {
  const csvWriter = createObjectCsvWriter({
    path: filePath,
    header: [
      { id: 'key', title: 'Album' },
      { id: 'value', title: 'Href' },
    ],
    alwaysQuote: true,
  });

  const records = Array.from(map, ([key, value]) => ({ key, value }));

  csvWriter.writeRecords(records)
    .then(() => console.log('CSV file was written successfully'))
    .catch((error) => console.error('Error writing CSV file:', error));
}
