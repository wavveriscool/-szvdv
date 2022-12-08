import React, { Component } from 'react';
import { Text, View, Alert,Image,ScrollView,  ImageBackground, StyleSheet, SafeAreaView, Platform, StatusBar,TouchableOpacity,  } from 'react-native';

import axios from 'axios';

export default class CricketScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
           apod: []
        };
    }

    componentDidMount() {
        this.getAPOD()

    }

    getAPOD = () => {
        axios
            .get("https://www.espn.com/nfl/")
            .then(response => {
                this.setState({ apod: response.data })
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }



           
     
   

    

   render() {
        const url = this.state.apod.url
        if (Object.keys(this.state.apod).length === 0) {
            return (
                <View
                    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text>Go To 'https://www.espn.com/nfl/' If Link Not Working</Text>
                </View>
            )
        }
        else {
            return (
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea} />
                    <ImageBackground source={require('../assets/R (3).png')} style={styles.backgroundImage}>
                        <View style={{ flex: 0.15, justifyContent: "center", textAlign: "center" }}>
                            <Text style={styles.routeText}>Soccer</Text>
                        </View>
                        <ScrollView style={styles.listContainer}>
                            <TouchableOpacity
                                onPress={() => Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load page", err))}
                            >
                                <Image source={{ "uri": url }} style={{ width: "100%", height: 300, borderRadius: 10 }}></Image>
                            </TouchableOpacity >
                            <View style={{ padding: 20 }}>
                                <Text style={styles.titleText}>{this.state.apod.title}</Text>
                                <Text style={styles.explanationText}>{this.state.apod.explanation}</Text>
                            </View>
                        </ScrollView>
                    </ImageBackground>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        justifyContent: "center",
        alignContent: "center",
    },
    contentCard: {
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        elevation: 10,
        backgroundColor: 'white'
    },
    itemImage: {
        width: "100%",
        height: 200,
        marginBottom: 15,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5
    }
})