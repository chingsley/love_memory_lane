// app / index.tsx

import { auth, db } from '@/config/firebaseConfig';
import { UserDetail, UserDetailContext } from '@/context/UserDetailContext';
import { useRouter } from 'expo-router';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const { userDetail, setUserDetail } = useContext(UserDetailContext);

  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const result = await getDoc(doc(db, 'users', user.email!));
          setUserDetail(result.data() as UserDetail);
          router.replace('/(tabs)/home');
        } else {
          router.replace('/(tabs)/home');
        }
      });

    return () => unsubscribe();
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text>app/Index.tsx</Text>
    </View>
  );
}


const styles = StyleSheet.create({});
