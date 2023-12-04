# Android Instant App Sample

## To test your instant app experience on a local machine using Android Studio, complete the following steps:

- If you have an installed version of your app on your test device, uninstall it.
- Run the **yarn react-native start** command from the instant_app folder in the terminal which will start the metro bundler that connects your device and js code.
- In Android Studio, click on Edit Configurations & from the installation options that appear on the General tab of the Run/Debug Configurations dialog, enable the Deploy as instant app checkbox.
<img width="1039" alt="Screenshot 2023-12-04 at 11 35 39 AM" src="https://github.com/yuvraj24/android-instantapp-sample/assets/24696317/7c6e0510-92c8-47f5-9c30-d31812e1f4f7">
<br>
<br>
<img width="1039" alt="Screenshot 2023-12-04 at 11 29 54 AM" src="https://github.com/yuvraj24/android-instantapp-sample/assets/24696317/097c349e-79a8-4b93-9eb5-aa9e3eaa3221">
<br>
<br>

- Select Run > Run in the menu bar, or click Run    in the toolbar, then choose the device where you'd like to test your app's instant experiences. Your app's instant experience loads on the test device that you've chosen.

## To test the actual native app experience on your test device, complete the following steps:

- If you have an instant app version of your app on your test device, uninstall it.
- Run the **yarn react-native start** command from the instant_app folder in the terminal which will start the metro bundler that connects your device and js code.
- In Android Studio, click on Edit Configurations & from the installation options that appear on the General tab of the Run/Debug Configurations dialog, disable the Deploy as instant app checkbox.
<img width="1039" alt="Screenshot 2023-12-04 at 11 35 39 AM" src="https://github.com/yuvraj24/android-instantapp-sample/assets/24696317/7c6e0510-92c8-47f5-9c30-d31812e1f4f7">
<br>
<br>
<img width="1039" alt="Screenshot 2023-12-04 at 11 41 22 AM" src="https://github.com/yuvraj24/android-instantapp-sample/assets/24696317/512733f8-3d07-41aa-99aa-5bd8be12f0c4">
<br>
<br>

- Select Run > Run in the menu bar, or click Run    in the toolbar, then choose the device where you'd like to test your actual native app's experiences. Your app's experience loads on the test device that you've chosen.

## Emulator / Physical Device
- Ensure that metro bundler is running and active.
- There is a network_security_config.xml file at below path, where we need to add all the domain ip address for for which access will be allowed.<br>
**Path : instant_app/android/app/src/main/res/xml/network_security_config.xml**
- For Emulator, local IP is already added which will automatically try to sync with metro bundler.
- For Physical device, add your device's IP address to which your deivce is connected to for internet.

## Instant App

- We are using the react-native-modal & react-native-webview npm package to load video KYC agent URL,
https://www.npmjs.com/package/react-native-modal
<br>https://www.npmjs.com/package/react-native-webview

- For the error log of camera not loading refer below screenshot,
<img width="1714" alt="Screenshot 2023-12-04 at 12 52 40 PM" src="https://github.com/yuvraj24/android-instantapp-sample/assets/24696317/ce94be90-c2e5-465d-b96b-b4373a3485e5">
<br><br>

- By default, the app is configured to open the WEBRTC video and audio sample URL in Webview which can be changed by add any url in input field.
https://webrtc.github.io/samples/src/content/devices/input-output
<br>
<img width="400" alt="Screenshot 2023-12-04 at 12 08 39 PM" src="https://github.com/yuvraj24/android-instantapp-sample/assets/24696317/d2a2fdbf-e476-4070-b4ba-24bb63e58515">
&nbsp;&nbsp;&nbsp;&nbsp;
<img width="400" alt="Screenshot 2023-12-04 at 12 56 39 PM" src="https://github.com/yuvraj24/android-instantapp-sample/assets/24696317/8aa9bddd-d541-4115-a398-e941407ffcdd">


