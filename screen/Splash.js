import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

const Splash = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate('Home')
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={require('../img/logo.png')} style={styles.logo} />
        <Text style={[styles.customText, { marginTop: 10 }]}>ระบบแนะนำการออกกำลังกาย</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CBB3DB",
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 10,
  },
  customText: {
    fontSize: 30,
    color: "#516D91",
    fontFamily: 'Pridi-Bold',
  },
});

export default Splash;
