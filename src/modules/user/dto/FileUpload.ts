import { WriteStream } from 'fs-capacitor';
import { Stream } from 'stream';

export interface FileUpload {
  filename: string;
  mimetype: string;
  encoding: string;
  capacitor: WriteStream;
  createReadStream: Stream;
}
