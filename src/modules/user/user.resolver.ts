import { HttpStatus } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { FileUpload } from './dto/FileUpload';

@Resolver()
export class UserResolver {
  @Query(() => Int)
  getItems(): HttpStatus {
    return HttpStatus.OK;
  }

  @Mutation(() => Int)
  uploadFiles(
    @Args('file', { type: () => GraphQLUpload })
    file: FileUpload,
  ): HttpStatus {
    console.log({ file });

    return HttpStatus.OK;
  }
}
