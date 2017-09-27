/* @flow */

export type Message = {
  message: string
};

type OpenTokViewProps = {
  listeners: {
    [listenerName: string]: Object
  }
};

export type PublisherViewProps = OpenTokViewProps & {
  onPublishStart: () => void,
  onPublishStop: () => void,
  onPublishError: () => void,
  camera: boolean
};

export type SubscriberViewProps = OpenTokViewProps & {
  onSubscribeStart: () => void,
  onSubscribeStop: () => void,
  onSubscribeError: () => void
};
