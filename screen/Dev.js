import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';

const Dev = ({ navigation }) => {
    const onPress = () => {
        navigation.navigate('Home')
    };
    const onPressHeart = () => {
        navigation.navigate('Reason')
    };

    return (
        <View style={styles.container}>

            <ScrollView>

                <View style={styles.details}>
                    <Image source={require('../img/dev/golf.jpg')} style={[styles.img, { alignSelf: 'center' }]} />
                    <Text style={[styles.customText, { marginTop: 5 }]}>

                        <Text style={styles.boldText}>64313083 ปฏิพล แก้วม่วง </Text>
                    </Text>

                </View>

                <View style={styles.details}>
                    <Image source={require('../img/dev/dream.jpg')} style={[styles.img, { alignSelf: 'center' }]} />
                    <Text style={[styles.customText, { marginTop: 5 }]}>
                        <Text style={styles.boldText}>64310785  จารุดา ไชยพร </Text>
                    </Text>

                </View>

                <View style={styles.details}>
                    <Image source={require('../img/dev/fill.jpg')} style={[styles.img, { alignSelf: 'center' }]} />
                    <Text style={[styles.customText, { marginTop: 5 }]}>
                        <Text style={styles.boldText}>64313939  พิชัย คงแสง </Text>
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


                    <Image source={require('../img/icon/human.png')} style={styles.icon} />


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
        width: 300,
        height: 240,
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
        margin: 20,
        height: 150,
        width: 150,
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

export default Dev