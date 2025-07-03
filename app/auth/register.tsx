// Depricated
import Form from '@/components/Auth/Form';
import LinkToChangeForm from '@/components/Auth/LinkToChangeForm';
import Header from '@/components/Shared/Header';
import { FormType } from '@/types/formType';
import { IUserData } from '@/types/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

import React from 'react';
import { StyleSheet, View } from 'react-native';


const Register = () => {
  const router = useRouter();
  const onRegister = async (userData: IUserData) => {
    const userStr = await AsyncStorage.getItem(userData.email);
    if (userStr) {
      return;
    }

    await AsyncStorage.setItem(userData.email, JSON.stringify(userData));
    router.push({
      pathname: '/home',
      params: { userParam: JSON.stringify(userData) }
    });
  };

  return (
    <View style={styles.pageBox}>
      <View style={styles.container}>
        <Header caption='Create An Account' />
        <Form formType={FormType.REGISTER} onFormSubmit={onRegister} />
        <LinkToChangeForm
          textPrompt='Already has an account? Click here to login'
          onPress={() => router.push('/auth/login')}
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
  topImg: {
    position: 'absolute',
    top: 0,
    right: 0,
  },

});