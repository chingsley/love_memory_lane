import Form from '@/components/Auth/Form';
import LinkToChangeForm from '@/components/Auth/LinkToChangeForm';
import Header from '@/components/Shared/Header';
import { localStorage } from '@/storage';
import { FormType } from '@/types/formType';
import { IUserData } from '@/types/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';

const Register = () => {
  const router = useRouter();

  const onLogin = async (userData: Omit<IUserData, 'fullName'>) => {
    const userStr = await AsyncStorage.getItem(userData.email);
    console.log(localStorage.viewAllAsyncStorageData());
    if (!userStr) {
      Alert.alert('Incorrect Email');
      return;
    }

    const user: IUserData = JSON.parse(userStr);
    if (user.password !== userData.password) {
      Alert.alert('Incorrect Password');
      return;
    }

    console.log(userData.email, userData.password);
    router.push({
      pathname: '/home',
      params: { userParam: JSON.stringify(user) }
    });
  };

  return (
    <View style={styles.pageBox}>
      <View style={styles.container}>
        <Header caption='Sign In' />
        <Form formType={FormType.LOGIN} onFormSubmit={onLogin} />
        <LinkToChangeForm
          textPrompt="Don't have an account? Click here to register"
          onPress={() => router.push('/auth/register')}
        />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  pageBox: {
    height: '100%'
  },
  container: {
    // borderWidth: 2,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});