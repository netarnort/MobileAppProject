import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';

const Reason = ({ navigation }) => {
    const onPress = () => {
        navigation.navigate('Home')
    };
    const onPressHuman = () => {
        navigation.navigate('Dev')
    };
    return (
        <View style={styles.container}>

            <ScrollView>

            <Image source={require('../img/purpose.png')} style={[styles.img, { alignSelf: 'center' }]} />


                <View style={styles.details}>

                    <Text style={[styles.customText, { marginTop: 5 }]}>

                        <Text style={styles.boldText}>จุดประสงค์ : </Text>
                        มีจุดมุ่งหมายเพื่อพัฒนาแอปพริเคชันบน android สำหรับแนะนำการออกกำลักาย เพื่อส่งเสริมให้เกิดวิธีการที่น่าสนใจ และมีความสะดวกสบาย
                        สำหรับบุคคลทั่วไปที่ใส่ใจสุขภาพ

                    </Text>

                </View>

            </ScrollView>

            <View style={styles.lower}>
                <View style={styles.containericon}>

                    <Pressable onPress={onPress}>
                        <Image source={require('../img/icon/house.png')} style={styles.icon} />
                    </Pressable>


                    <Image source={require('../img/icon/heart.png')} style={styles.icon} />


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
        width: 300,
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

export default Reason