// @generated by protoc-gen-es v1.4.2
// @generated from file chat/v1/chat.proto (package chat.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message chat.v1.ChatState
 */
export declare class ChatState extends Message<ChatState> {
  /**
   * @generated from field: repeated string chats = 1;
   */
  chats: string[];

  constructor(data?: PartialMessage<ChatState>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "chat.v1.ChatState";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChatState;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChatState;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChatState;

  static equals(a: ChatState | PlainMessage<ChatState> | undefined, b: ChatState | PlainMessage<ChatState> | undefined): boolean;
}

/**
 * @generated from message chat.v1.GetAllRequest
 */
export declare class GetAllRequest extends Message<GetAllRequest> {
  constructor(data?: PartialMessage<GetAllRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "chat.v1.GetAllRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAllRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAllRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAllRequest;

  static equals(a: GetAllRequest | PlainMessage<GetAllRequest> | undefined, b: GetAllRequest | PlainMessage<GetAllRequest> | undefined): boolean;
}

/**
 * @generated from message chat.v1.GetAllResponse
 */
export declare class GetAllResponse extends Message<GetAllResponse> {
  /**
   * @generated from field: repeated string chats = 1;
   */
  chats: string[];

  constructor(data?: PartialMessage<GetAllResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "chat.v1.GetAllResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAllResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAllResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAllResponse;

  static equals(a: GetAllResponse | PlainMessage<GetAllResponse> | undefined, b: GetAllResponse | PlainMessage<GetAllResponse> | undefined): boolean;
}

/**
 * @generated from message chat.v1.PostRequest
 */
export declare class PostRequest extends Message<PostRequest> {
  /**
   * @generated from field: string message = 1;
   */
  message: string;

  constructor(data?: PartialMessage<PostRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "chat.v1.PostRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PostRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PostRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PostRequest;

  static equals(a: PostRequest | PlainMessage<PostRequest> | undefined, b: PostRequest | PlainMessage<PostRequest> | undefined): boolean;
}

/**
 * @generated from message chat.v1.PostResponse
 */
export declare class PostResponse extends Message<PostResponse> {
  constructor(data?: PartialMessage<PostResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "chat.v1.PostResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PostResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PostResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PostResponse;

  static equals(a: PostResponse | PlainMessage<PostResponse> | undefined, b: PostResponse | PlainMessage<PostResponse> | undefined): boolean;
}

