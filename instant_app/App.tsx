/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {WebView} from 'react-native-webview';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const [isModalVisible, setModalVisible] = useState(false);
  const [webviewURL, setWebviewURL] = useState(
    'https://webrtc.github.io/samples/src/content/devices/input-output/',
  );

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const backgroundStyle = {
    padding: 16,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          <Text style={styles.label}>Enter URL</Text>
          <TextInput
            style={styles.inputStyle}
            multiline
            onChangeText={setWebviewURL}
          />

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.btnStyle}
            onPress={toggleModal}>
            <Text style={styles.btnTextStyle}> Open Webview </Text>
          </TouchableOpacity>
          <Text style={styles.textNote}>Opens Default URL:</Text>
          <Text style={styles.btnTextStyle}>
            https://webrtc.github.io/samples/src/content/devices/input-output/
          </Text>
          <Modal style={styles.modalStyle} isVisible={isModalVisible}>
            <View style={styles.modelView}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.btnClose}
                onPress={toggleModal}>
                <Text style={styles.btnCloseText}> Close </Text>
              </TouchableOpacity>
              <WebView
                source={{uri: webviewURL}}
                style={styles.webviewStyle}
                mediaPlaybackRequiresUserAction={false}
                mediaCapturePermissionGrantType="grant"
                webviewDebuggingEnabled
                allowsInlineMediaPlayback
              />
            </View>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: '700',
    fontSize: 20,
    color: Colors.black,
  },
  inputStyle: {
    backgroundColor: Colors.white,
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 16,
    marginBottom: 20,
    fontSize: 16,
  },
  btnStyle: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#ff5c5c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTextStyle: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  modelView: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  modalStyle: {
    margin: 0,
  },
  btnClose: {
    height: 50,
    backgroundColor: '#BDBDBD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCloseText: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 18,
  },
  webviewStyle: {
    flex: 1,
  },
  textNote: {
    color: '#000000',
    fontWeight: '200',
    fontSize: 14,
  },
});

export default App;
