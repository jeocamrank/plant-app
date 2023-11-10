import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

const VALID_EMAIL = "tung@gmail.com";
const VALID_PASSWORD = "tungdeptraivl";

export default function Login() {
  const [email, setEmail] = useState(VALID_EMAIL);
  const [password, setPassword] = useState(VALID_PASSWORD);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    const errors = [];

    Keyboard.dismiss();
    setLoading(true);

    if(email !== VALID_EMAIL) {
      errors.push('email');
    }
    if(email !== VALID_PASSWORD) {
      errors.push('password');
    }

    setErrors(errors);
    setLoading(false);

    if(!errors.length) {
      navigation.navigate('Browse');
    }
  }

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
