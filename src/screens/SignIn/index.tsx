import React from 'react';
import { Text, View, Image, Alert, ActivityIndicator } from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import IllustrationImg from '../../assets/illustration.png';

import { useAuth } from '../../hooks/auth';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';


export function SignIn() {
  const { loading, signIn } = useAuth()

  async function handleSignIn() {
    try {
      await signIn()
    } catch (error) {
      Alert.alert(error);
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conect {'\n'}
            and Organize {'\n'}
            Your Games
          </Text>

          <Text style={styles.subtitle}>
            Get groups to play your favorite{'\n'}
            games with your friends
          </Text>

          {
            loading ? <ActivityIndicator color={theme.colors.primary} /> :
              <ButtonIcon
                title="Enter with Discord"
                onPress={handleSignIn}
              />
          }

        </View>
      </View>
    </Background>
  );
}