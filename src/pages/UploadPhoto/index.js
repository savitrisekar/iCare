import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILNullPhoto, IconAddPhoto} from '../../assets';
import {Button, Header, Link} from '../../components';

const UploadPhoto = ({navigation}) => {
  return (
    <View>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View>
        <Image source={ILNullPhoto} style={styles.avatar} />
        <IconAddPhoto />
      </View>
      <Text>Zen Wistaria</Text>
      <Text>Sr. UX Researcher </Text>
      <Button title="Upload and Continue" />
      <Link title="Skip for this" />
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({});
