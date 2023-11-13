// @generated by protoc-gen-es v1.4.2
// @generated from file chat/v1/chat.proto (package chat.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message chat.v1.ChatRoomState
 */
export const ChatRoomState = proto3.makeMessageType(
  "chat.v1.ChatRoomState",
  () => [
    { no: 1, name: "chats", kind: "message", T: Message, repeated: true },
  ],
);

/**
 * @generated from message chat.v1.Message
 */
export const Message = proto3.makeMessageType(
  "chat.v1.Message",
  () => [
    { no: 1, name: "from_user", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "string", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message chat.v1.CreateRequest
 */
export const CreateRequest = proto3.makeMessageType(
  "chat.v1.CreateRequest",
  [],
);

/**
 * @generated from message chat.v1.CreateResponse
 */
export const CreateResponse = proto3.makeMessageType(
  "chat.v1.CreateResponse",
  [],
);

/**
 * @generated from message chat.v1.GetAllRequest
 */
export const GetAllRequest = proto3.makeMessageType(
  "chat.v1.GetAllRequest",
  [],
);

/**
 * @generated from message chat.v1.GetAllResponse
 */
export const GetAllResponse = proto3.makeMessageType(
  "chat.v1.GetAllResponse",
  () => [
    { no: 1, name: "chats", kind: "message", T: Message, repeated: true },
  ],
);

