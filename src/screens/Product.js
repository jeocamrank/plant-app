import React, { useState, useRef } from 'react';
import { Animated, Dimensions, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Button, Input, Block, Text, Divider } from '../components';
import { theme, mocks } from '../constants';

const { width, height } = Dimensions.get('window');

export default function Product({ navigation }) {
  const [product] = useState(mocks.products[0]);
  const searchFocus = useRef(new Animated.Value(0.6)).current;

  const handleSearchFocus = (status) => {
    Animated.timing(searchFocus, {
      toValue: status ? 0.8 : 0.6,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  const renderGallery = () => {
    return (
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        {product.images.map((item, index) => (
          <Image
            key={`image-${index}`}
            source={item}
            resizeMode="contain"
            style={{ width, height: height / 2.8 }}
          />
        ))}
      </ScrollView>
    );
  };

  const renderProductInfo = () => {
    return (
      <Block style={styles.product}>
        <Text h2 bold>{product.name}</Text>
        <Block flex={false} row margin={[theme.sizes.base, 0]}>
          {product.tags.map(tag => (
            <Text key={`tag-${tag}`} caption gray style={styles.tag}>
              {tag}
            </Text>
          ))}
        </Block>
        <Text gray light height={22}>{product.description}</Text>

        <Divider margin={[theme.sizes.padding * 0.9, 0]} />

        <Block>
          <Text semibold>Gallery</Text>
          <Block row margin={[theme.sizes.padding * 0.9, 0]}>
            {product.images.slice(1, 3).map((image, index) => (
              <Image
                key={`gallery-${index}`}
                source={image}
                style={styles.image}
              />
            ))}
            <Block
              flex={false}
              card
              center
              middle
              color="rgba(197,204,214,0.20)"
              style={styles.more}
            >
              <Text gray>+{product.images.slice(3).length}</Text>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  };

  return (
    <Block style={styles.backgroundcolor}>
      <Block flex={false} row center space="between" style={styles.header}>
        <Text h1 bold>
          Product
        </Text>
        <Block animated middle flex={searchFocus} style={styles.search}>
          <Input
            placeholder="Search"
            placeholderTextColor={theme.colors.gray2}
            style={styles.searchInput}
            onFocus={() => handleSearchFocus(true)}
            onBlur={() => handleSearchFocus(false)}
          />
        </Block>
      </Block>

      <ScrollView showsVerticalScrollIndicator={false}>
        {renderGallery()}
        {renderProductInfo()}
      </ScrollView>
    </Block>
  );
}

const styles = StyleSheet.create({
  backgroundcolor: {
    backgroundColor: 'white',
  },
  header: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base * 2,
  },
  search: {
    height: theme.sizes.base * 2,
    width: width - theme.sizes.base * 2,
  },
  searchInput: {
    fontSize: theme.sizes.caption,
    height: theme.sizes.base * 2,
    backgroundColor: 'rgba(142, 142, 147, 0.06)',
    borderColor: 'rgba(142, 142, 147, 0.06)',
    paddingLeft: theme.sizes.base / 1.333,
    paddingRight: theme.sizes.base * 1.5,
  },
  product: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingVertical: theme.sizes.padding,
  },
  tag: {
    borderColor: theme.colors.gray2,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: theme.sizes.base,
    paddingHorizontal: theme.sizes.base,
    paddingVertical: theme.sizes.base / 2.5,
    marginRight: theme.sizes.base * 0.625,
  },
  image: {
    width: width / 3.26,
    height: width / 3.26,
    marginRight: theme.sizes.base,
  },
  more: {
    width: 55,
    height: 55,
  },
});
