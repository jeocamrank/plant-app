import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";
import { FIREBASE_AUTH } from '../constants/firebase';
import { signInWithEmailAndPassword, isVerifiedEmail, onAuthStateChanged } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const auth = FIREBASE_AUTH;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (!user.emailVerified) {
          Alert.alert('Email is not verified. Please check your email and verify your account.');
        } else {
          navigation.navigate('Browse');
        }
      }
    });

    return () => unsubscribe();
  }, [navigation]);

  const handleLogin = async () => {
  setLoading(true);
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);
    
    const user = auth.currentUser;
    
    if (user) {
      if (user.emailVerified) {
        navigation.navigate('Browse');
      } else {
        await sendEmailVerification(user);
        Alert.alert('Email is not verified. Please check your email and verify your account.');
      }
    }
  } catch (error) {
    console.log(error);
    Alert.alert('Sign in failed: ' + error.message);
  } finally {
    setLoading(false);
  }
};

  const hasErrors = (key) => (errors.includes(key) ? styles.hasErrors : null);

  return (
    <KeyboardAvoidingView style={styles.login} behavior="positon">
      <Block padding={[0, theme.sizes.base * 2]}>
        <Text h1 bold>
          Login
        </Text>
        <Block middle>
          <Input
            label="Email"
            error={hasErrors('email')}
            style={[styles.input, hasErrors('email')]}
            defaultValue={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            secure
            label="Password"
            error={hasErrors('password')}
            style={[styles.input, hasErrors('email')]}
            defaultValue={password}
            onChangeText={(text) => setPassword(text)}
            iconColor={theme.colors.gray}
          />
          <Button gradient onPress={() => handleLogin()}>
            {loading ? (
            <ActivityIndicator size='small' color='white' />
            ) : (
            <Text bold white center>Login</Text>
            )}
          </Button>
          <Button onPress={() => navigation.navigate('Forgot')}>
            <Text gray caption center style={{ textDecorationLine: 'underline' }}>
              Forgot your password?
            </Text>
          </Button>
        </Block>
      </Block>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  login: {
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
});
