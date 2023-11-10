import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Block, Text } from "../components";
import { theme } from '../constants';

export default function Browse() {
  return (
    <Block>
      <Block flex={false} row center space='between' style={styles.header}>
      <Text h1 bold>Browse </Text>
      <Button>
        <Image
          // source={}
          style={styles.avatar}
        />
      </Button>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
  }
});
