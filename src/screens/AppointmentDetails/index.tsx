import React from 'react';
import { ImageBackground, Text, View, FlatList } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons'

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';

import BannerSvg from '../../assets/banner.png'
import { theme } from '../../global/styles/theme';

import { styles } from './styles';
import { ListHeader } from '../../components/ListHeader';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';

export function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'Marcos Leal',
      avatar_url: 'https://github.com/MarcosLealDev.png',
      status: 'offline'
    },
    {
      id: '2',
      username: 'Rodrigo Seila',
      avatar_url: 'https://github.com/rodrigorgtic.png',
      status: 'online'
    }
  ]
  return (
    <Background>
      <Header
        title="Details"
        action={
          <BorderlessButton>
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />
      <ImageBackground
        source={BannerSvg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            LendLand
          </Text>

          <Text style={styles.subtitle}>
            Texto da hora ! Tudo pra descrever isto aqui !
          </Text>
        </View>
      </ImageBackground>

      <ListHeader
        title="Players"
        subtitle="Total 3"
      />

      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}

      />

      <View style={styles.footer}>
        <ButtonIcon title="Enter the game" />
      </View>

    </Background>
  )
}