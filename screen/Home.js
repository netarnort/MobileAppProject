import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';

const Home = ({ navigation }) => {
  const onPress1 = () => {
    navigation.navigate('Arc')
  };
  const onPress2 = () => {
    navigation.navigate('Aero')
  };
  const onPress3 = () => {
    navigation.navigate('Bas')
  };
  const onPress4 = () => {
    navigation.navigate('Cyc')
  };
  const onPress5 = () => {
    navigation.navigate('Dance')
  };
  const onPress6 = () => {
    navigation.navigate('Run')
  };
  const onPress7 = () => {
    navigation.navigate('Skip')
  };
  const onPress8 = () => {
    navigation.navigate('Swim')
  };
  const onPress9 = () => {
    navigation.navigate('Weight')
  };
  const onPress10 = () => {
    navigation.navigate('Yoga')
  };
  const onPressHeart = () => {
    navigation.navigate('Reason')
  };
  const onPressHuman = () => {
    navigation.navigate('Dev')
  };


  return (

    <View style={styles.container}>

      <View style={styles.Headers}>
        <Text style={[styles.customText, { marginTop: 5, }]}>
          Categories
        </Text>
      </View>

      <ScrollView>
        <View style={styles.innerContainer1}>

          <Pressable onPress={onPress1}>
            <Image source={require('../img/arc.png')} style={styles.img} />
          </Pressable>

          <Pressable onPress={onPress2}>
            <Image source={require('../img/aerobic.png')} style={styles.img} />
          </Pressable>

        </View>
        <View style={styles.innerContainer2}>

          <Pressable onPress={onPress3}>
            <Image source={require('../img/bas.png')} style={styles.img} />
          </Pressable>

          <Pressable onPress={onPress4}>
            <Image source={require('../img/cyc.png')} style={styles.img} />
          </Pressable>

        </View>
        <View style={styles.innerContainer3}>

          <Pressable onPress={onPress5}>
            <Image source={require('../img/dance.png')} style={styles.img} />
          </Pressable>

          <Pressable onPress={onPress6}>
            <Image source={require('../img/run.png')} style={styles.img} />
          </Pressable>

        </View>
        <View style={styles.innerContainer4}>

          <Pressable onPress={onPress7}>
            <Image source={require('../img/skip.png')} style={styles.img} />
          </Pressable>

          <Pressable onPress={onPress8}>
            <Image source={require('../img/swim.png')} style={styles.img} />
          </Pressable>

        </View>
        <View style={styles.innerContainer5}>

          <Pressable onPress={onPress9}>
            <Image source={require('../img/weight.png')} style={styles.img} />
          </Pressable>

          <Pressable onPress={onPress10}>
            <Image source={require('../img/yoga.png')} style={styles.img} />
          </Pressable>

        </View>
      </ScrollView>

      <View style={styles.lower}>
        <View style={styles.containericon}>


          <Image source={require('../img/icon/house.png')} style={styles.icon} />


          <Pressable onPress={onPressHeart}>
            <Image source={require('../img/icon/heart.png')} style={styles.icon} />
          </Pressable>

          <Pressable onPress={onPressHuman}>
            <Image source={require('../img/icon/human.png')} style={styles.icon} />
          </Pressable>

        </View>
      </View>




    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#CBB3DB',
  },

  containericon: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    margin: 10,
    height: 50,
    width: 50,
  },


  lower: {
    margin: 10,
    width: 270,
    height: 70,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'white'
  },

  innerContainer: {
    flexDirection: 'row',
  },

  innerContainer1: {
    flexDirection: 'row',

  },
  innerContainer2: {
    flexDirection: 'row',
  },

  innerContainer3: {
    flexDirection: 'row',
  },

  innerContainer4: {
    flexDirection: 'row',
  },

  innerContainer5: {
    flexDirection: 'row',
  },

  img: {
    margin: 10,
    height: 185,
    width: 185,
  },

  Headers: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  customText: {
    fontSize: 40,
    color: '#516D91',
    fontFamily: 'Pridi-Bold',
  },

});

export default Home;
