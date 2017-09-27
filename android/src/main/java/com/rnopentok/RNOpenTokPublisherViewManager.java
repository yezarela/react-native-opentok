package com.rnopentok;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;


public class RNOpenTokPublisherViewManager extends RNOpenTokViewManager<RNOpenTokPublisherView> {
  

    @Override
    public String getName() {
        return "RNOpenTokPublisherView";
    }

    @Override
    protected RNOpenTokPublisherView createViewInstance(ThemedReactContext reactContext) {
        return new RNOpenTokPublisherView(reactContext);
    }

    @ReactProp(name = "camera", defaultBoolean = true)
    public void setCamera(RNOpenTokPublisherView view, boolean camera) {
        view.switchCamera();
    }
}

