import { HttpStatus } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload';

@Resolver()
export class UserResolver {
  @Query(() => Int)
  getItems(): HttpStatus {
    return HttpStatus.OK;
  }

  @Mutation(() => Int)
  uploadFiles(
    @Args('file', { type: () => GraphQLUpload })
    file: Promise<FileUpload>,
  ): HttpStatus {
    console.log({ file });

    return HttpStatus.OK;
  }
}
