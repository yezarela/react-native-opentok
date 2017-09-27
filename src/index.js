/* @flow */
import React from 'react';
import { NativeModules, NativeAppEventEmitter } from 'react-native';
import SubscriberView from './components/SubscriberView';
import PublisherView from './components/PublisherView';

import type { Message, PublisherViewProps, SubscriberViewProps} from './types';

const listeners = {};
let isInitialized = false;

const Session = {
  sendMessage: NativeModules.RNOpenTokSession.sendMessage,
  onMessageReceived(callback: (e: Message) => void) {
    if (!listeners.onMessageReceived) {
      listeners.onMessageReceived = NativeAppEventEmitter.addListener(
        'onMessageReceived',
        (e: Message) => callback(e)
      );
    }
  },
  stopListener() {
    if (listeners.onMessageReceived) {
      listeners.onMessageReceived.remove();
      // Reflect.deleteProperty(this.props.listeners, 'onMessageReceived');
    }
  },
};

export default {
  initSession: (sessionId: string) => {
    if (!isInitialized) {
      NativeModules.RNOpenTok.initSession(sessionId);
      isInitialized = true;
    } else {
      NativeModules.RNOpenTok.changeSession(sessionId);
    }
  },

  connectWithToken: (token: string) => {
    NativeModules.RNOpenTok.connectWithToken(token);
  },

  disconnectSession: (): void => {
    NativeModules.RNOpenTok.disconnect();
  },

  Session,
  SubscriberView: (props: SubscriberViewProps) => <SubscriberView listeners={listeners} {...props} />,
  PublisherView: (props: PublisherViewProps) => <PublisherView listeners={listeners} {...props} />,
};
