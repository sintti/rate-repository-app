import AsyncStorage from '@react-native-community/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }
  
  async getAccessToken() {
    const tokenFromStorage = await AsyncStorage.getItem(
      `${this.namespace}:auth`
    );

    return tokenFromStorage ? JSON.parse(tokenFromStorage) : [];
  }
  
  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(
      `${this.namespace}:auth`,
      JSON.stringify(accessToken)
    );
  }
  
  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:auth`);
  }
}

export default AuthStorage;