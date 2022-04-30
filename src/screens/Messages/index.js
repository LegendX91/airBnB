import React from "react";
import { View, ImageBackground, Text, Pressable } from "react-native";
import styles from "./styles";
import Fontisto from "react-native-vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";

const Messages = (props) => {
    
    const navigation = useNavigation();
    
    return (
        <View>
            <ImageBackground source={require("../../../assets/images/MessagesImg.jpg")} style={styles.image}>
                <Pressable style={styles.searchButton} onPress={() => navigation.navigate('Destination Search')}>
                    <Fontisto name="search" size={25} color={"#f15454"} style={{marginRight: 10}}/>
                    <Text style={styles.searchButtonText}>Where are you going?</Text>
                </Pressable>
                <Text style={styles.title}>Chat Now</Text>
                <Pressable style={styles.button} onPress={() => console.warn('Explore Btn clicked')}>
                    <Text style={styles.buttonText}>Contact Anyone</Text>
                </Pressable>
            </ImageBackground>
        </View>
    )
}

export default Messages;