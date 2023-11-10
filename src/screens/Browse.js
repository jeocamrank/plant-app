import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

import { Card, Badge, Button, Block, Text } from '../components';
import { theme, mocks } from '../constants';

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
