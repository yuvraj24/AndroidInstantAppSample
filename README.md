# Android Instant App Sample

## To test your instant app experience on a local machine using Android Studio, complete the following steps:

1. If you have an installed version of your app on your test device, uninstall it.
2. In Android Studio, click on Edit Configurations & from the installation options that appear on the General tab of the Run/Debug Configurations dialog, enable the Deploy as instant app checkbox.
<img width="1039" alt="Screenshot 2023-12-04 at 11 35 39 AM" src="https://github.com/yuvraj24/android-instantapp-sample/assets/24696317/7c6e0510-92c8-47f5-9c30-d31812e1f4f7">
<br>
<br>
<img width="1039" alt="Screenshot 2023-12-04 at 11 29 54 AM" src="https://github.com/yuvraj24/android-instantapp-sample/assets/24696317/097c349e-79a8-4b93-9eb5-aa9e3eaa3221">
<br>
<br>
3. Select Run > Run in the menu bar, or click Run    in the toolbar, then choose the device where you'd like to test your app's instant experiences. Your app's instant experience loads on the test device that you've chosen.



## To test the actual native app experience on your test device, complete the following steps:

1. If you have an instant app version of your app on your test device, uninstall it.
2. In Android Studio, click on Edit Configurations & from the installation options that appear on the General tab of the Run/Debug Configurations dialog, disable the Deploy as instant app checkbox.
<img width="1039" alt="Screenshot 2023-12-04 at 11 35 39 AM" src="https://github.com/yuvraj24/android-instantapp-sample/assets/24696317/7c6e0510-92c8-47f5-9c30-d31812e1f4f7">
<br>
<br>
<img width="1039" alt="Screenshot 2023-12-04 at 11 41 22 AM" src="https://github.com/yuvraj24/android-instantapp-sample/assets/24696317/512733f8-3d07-41aa-99aa-5bd8be12f0c4">
<br>
<br>
3. Select Run > Run in the menu bar, or click Run    in the toolbar, then choose the device where you'd like to test your actual native app's experiences. Your app's experience loads on the test device that you've chosen.

## Instant App

We are using the react-native-modal & react-native-webview npm package to load video KYC agent URL,
https://www.npmjs.com/package/react-native-modal
<br>
https://www.npmjs.com/package/react-native-webview

By default, the app is configured to open the WEBRTC video and audio sample URL in Webview.
https://webrtc.github.io/samples/src/content/devices/input-output
<br>
<br>
<img width="300" alt="Screenshot 2023-12-04 at 12 08 39 AM" src="https://github.com/yuvraj24/android-instantapp-sample/assets/24696317/d2a2fdbf-e476-4070-b4ba-24bb63e58515">

