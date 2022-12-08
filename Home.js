import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {
//Daily

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/o-BREAKING-NEWS-facebook.jpg.crdownload')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                    
                        <Text style={styles.titleText}></Text>
                        <Text style={styles.titleText}>News</Text>
                    </View>

                  
                    }>
                      
                  

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Soccer")
                    }>
                        <Text style={styles.routeText}>Go To The News</Text>
                   
                    </TouchableOpacity>

                 
                      
                    
                   
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.12,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 100,
        backgroundColor: "orange"
    },
    titleBar: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 64,
        fontWeight: "bold",
        color: "red"
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: 'black',
        justifyContent: "center",
        alignItems: "center"
    },
    routeImage: {
        position: "absolute",
        top: -20,
        right: -15,
        height: 120,
        width: 90,
        resizeMode: "contain"
    }
});