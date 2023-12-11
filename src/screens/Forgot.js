import React, { useState } from 'react';
import { Alert, ActivityIndicator, Keyboard, KeyboardAvoidingView, StyleSheet } from 'react-native';

import { Button, Block, Input, Text } from '../components';
import { theme } from '../constants';
import { FIREBASE_AUTH } from '../constants/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

export default function Forgot({ navigation }) {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const handleForgot = async () => {
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);  // Gửi email đặt lại mật khẩu
      Alert.alert('Password reset email sent. Please check your email.');
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
      Alert.alert('Forgot password failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

  return (
    <KeyboardAvoidingView style={styles.forgot} behavior="padding">
      <Block padding={[0, theme.sizes.base * 2]}>
        <Text h1 bold>
          Forgot
        </Text>
        <Block middle>
          <Input
            label="Email"
            error={hasErrors('email')}
            style={[styles.input, hasErrors('email')]}
            defaultValue={email}
            onChangeText={text => setEmail(text)}
          />
          <Button gradient onPress={() => handleForgot()}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text bold white center>
                Forgot
              </Text>
            )}
          </Button>

          <Button onPress={() => navigation.navigate('Login')}>
            <Text gray caption center style={{ textDecorationLine: 'underline' }}>
              Back to Login
            </Text>
          </Button>
        </Block>
      </Block>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  forgot: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  },
})
