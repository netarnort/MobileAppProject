import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native'
import React from 'react'

const Skip = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate('Home')
  };
  const onPressHeart = () => {
    navigation.navigate('Reason')
  };
  const onPressHuman = () => {
    navigation.navigate('Dev')
  };
  return (
    <View style={styles.container}>

      <ScrollView>

        <Image source={require('../img/details/skip.png')} style={styles.img} />

        <View style={styles.details}>

          <Text style={[styles.customText, { marginTop: 5 }]}>

            <Text style={styles.boldText}>รายละเอียด : </Text> 
            การกระโดดเชือกเป็นกิจกรรมที่เพลิดเพลินและมีประโยชน์มากมายต่อสุขภาพ. นอกจากนี้, ยังเป็นกิจกรรมที่ไม่ต้องใช้พื้นที่มากและสามารถทำทุกที่ทุกเวลา. 

          </Text>

        </View>
        <View style={styles.cal}>

          <Text style={[styles.customText, { marginTop: 5 }]}>

            <Text style={styles.boldText}>การเผาผลาญแคลอรี่ : </Text> 
            การกระโดดเชือกอาจเผาผลาญแคลอรี่ได้ถึง 600-800 แคลอรี่ต่อชั่วโมง, ขึ้นอยู่กับความหนักและความเร็ว.

          </Text>

        </View>

      </ScrollView>

      <View style={styles.lower}>
        <View style={styles.containericon}>

          <Pressable onPress={onPress}>
            <Image source={require('../img/icon/house.png')} style={styles.icon} />
          </Pressable>

          <Pressable onPress={onPressHeart}>
            <Image source={require('../img/icon/heart.png')} style={styles.icon} />
          </Pressable>

          <Pressable onPress={onPressHuman}>
            <Image source={require('../img/icon/human.png')} style={styles.icon} />
          </Pressable>


        </View>
      </View>

    </View>
  )
}

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

  details: {
    margin: 10,
    width: 380,
    height: 150,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#DDCEE8'
  },

  cal: {
    margin: 10,
    width: 380,
    height: 120,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#DDCEE8'
  },

  lower: {
    margin: 10,
    width: 270,
    height: 70,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'white'
  },

  img: {
    margin: 10,
    height: 300,
    width: 380,
    borderRadius: 20,
  },

  Headers: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  customText: {
    margin: 10,
    fontSize: 20,
    color: '#516D91',
    fontFamily: 'Pridi-Regular',
  },

  boldText: {
    fontWeight: 'bold',
  },

});

export default Skip