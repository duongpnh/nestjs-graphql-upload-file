import { HttpStatus } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
// import { FileUpload } from './dto/FileUpload';
// import { GraphQLUpload } from './dto/GraphQLUpload';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { Stream } from 'stream';

const stream2buffer = async (stream: Stream): Promise<Buffer> => {
  return new Promise<Buffer>((resolve, reject) => {
    const _buf = Array<any>();

    stream.on('data', (chunk) => _buf.push(chunk));
    stream.on('end', () => resolve(Buffer.concat(_buf)));
    stream.on('error', (err) => reject(`error converting stream - ${err}`));
  });
};

@Resolver()
export class UserResolver {
  @Query(() => Int)
  getItems(): HttpStatus {
    return HttpStatus.OK;
  }

  @Mutation(() => Int)
  async uploadFiles(
    @Args('file', { type: () => GraphQLUpload })
    file: FileUpload,
  ): Promise<HttpStatus> {
    const { createReadStream } = file;

    try {
      const data = createReadStream();

      const r = await stream2buffer(data);
    } catch (e) {
      console.log({ e });
    }

    return HttpStatus.OK;
  }
}
