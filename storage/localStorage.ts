import AsyncStorage from '@react-native-async-storage/async-storage';

const viewAllAsyncStorageData = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    if (keys.length > 0) {
      const data = await AsyncStorage.multiGet(keys);
      for (const [key, value] of data) {
        console.log(`Key: ${key}, Value: ${value}`);
      }
    } else {
      console.log('AsyncStorage is empty.');
    }
  } catch (error) {
    console.error('Error viewing AsyncStorage data:', error);
  }
};

const clearAllData = async () => {
  try {
    await AsyncStorage.clear();
    console.log('AsyncStorage cleared successfully!');
  } catch (e) {
    console.error('Error clearing AsyncStorage:', e);
  }
};

export default {
  viewAllAsyncStorageData,
  clearAllData
};