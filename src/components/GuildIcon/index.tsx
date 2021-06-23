import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
  const uri = 'https://www.pngkit.com/png/full/17-179788_discord-logo-01-discord-logo-png.png'
  return (
    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode='cover'
    />



  )
}