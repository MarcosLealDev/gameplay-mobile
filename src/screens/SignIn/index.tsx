import React, { useState } from 'react';
import { Text, View, Image, StatusBar } from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png';

import { styles } from './styles';

export function SignIn() {


  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          Your Games {`\n`}
          Easily {`\n`}
        </Text>

        <Text style={styles.subtitle}>
          Get groups to play your favorite{`\n`}
          games with your friends
        </Text>

        <ButtonIcon
          title="Enter with Dicord"
          activeOpacity={0.7}
        />

      </View>
    </View>
  );
}