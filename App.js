import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import * as Google from 'expo-google-app-auth'
//import { androidClientId, AND_CLIENT_ID } from 'react-native-dotenv';


export default function LoginScreen () {

  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        behavior: 'web',
        //iosClientId: IOS_CLIENT_ID,
        androidClientId:"356191727126-71r563l43938k622crb81jtpjdbro4pp.apps.googleusercontent.com",
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  } const signInWithGoogle = () => {
    signInWithGoogleAsync()
    }

    return (
      <View style={styles.container}>
        <Button onPress={() => signInWithGoogle()} title="Sign in with Google" />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
