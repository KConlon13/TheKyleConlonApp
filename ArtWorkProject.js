import React, { Component } from 'react';
// import { Icon, Button, Container, Content, Left } from 'native-base';
import { StyleSheet, Text, View, Linking, TouchableOpacity, ActivityIndicator, ActionSheetIOS } from 'react-native';
import { Avatar, Button, Icon, ButtonGroup, Image, SocialIcon, Card} from 'react-native-elements';

class ArtWorkProject extends Component {

    githubClickHandler=()=>{
        ActionSheetIOS.showActionSheetWithOptions(
            {
              options: ['Cancel', 'FrontEnd Github', 'BackEnd Github'],
              FrontEndButtonIndex: 1,
              BackEndButtonIndex: 2,
              cancelButtonIndex: 0,
            },
            (buttonIndex) => {
              if (buttonIndex === 1) {
                Linking.openURL("https://github.com/KConlon13/ArtWorkFrontend")
              } else if (buttonIndex === 2) {
                  Linking.openURL("https://github.com/KConlon13/ArtWorkBackEnd")
              } 
            },
          );
    }

    render(){
        return (
            <View>
                <Text style={styles.videoTitle} onPress={()=>Linking.openURL("https://www.youtube.com/watch?v=vrLMXdY-g58")}>ArtWork</Text>
                <View style={{ borderWidth: .2, borderColor: "#E1E1E1", height: 185.8, width: 372}}>
                <Image source={require("./ArtWorkScreenshot.png")}  containerStyle={{ width: 370, height: 185, display: "block", marginLeft: 2, marginRight: 2 }} PlaceholderContent={ <ActivityIndicator /> } placeholderStyle={{ height: "100%", width: "100%" }} />
                </View>
                <View style={styles.githubDemoLine}>
                <Text style={styles.githubDemoLink} onPress={()=>this.githubClickHandler()}>Github</Text>
                    <Text style={styles.githubDemoDividerLine}> | </Text>
                    <Text style={styles.githubDemoLink} onPress={()=>Linking.openURL("https://www.youtube.com/watch?v=vrLMXdY-g58")} >Demo</Text>
                </View>
                <Text style={styles.projectBio}>Bringing mural-needing businesses and money-needing artists together. ArtWork is a platform for businesses to find the perfect artist to paint the officespace mural of their corporate dreams. Artists sign up to be featured on the site for businesses to peruse through, and in return find themselves more clients for mural work.</Text>
                <Card title="What I Used" titleStyle={{ color: "black"}} containerStyle={{ borderColor: "#31CCC8", marginTop: 10}} >
                    <View style={{ alignItems: "center" }}>
                        <Text style={styles.videoList}>React.js</Text>
                        <Text style={styles.videoList}>Javascript</Text>
                        <Text style={styles.videoList}>Ruby</Text>
                        <Text style={styles.videoList}>Rails</Text>
                        <Text style={styles.videoList}>HTML & CSS</Text>
                        <Text style={styles.videoList}>Semantic UI Framework</Text>
                    </View>
                </Card>
                <Text style={styles.dividerLine}>________________________</Text>
            </View>
        )
    }
}  

const styles = ({
    videoTitle: {
        fontSize: 25,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        marginTop: "5%",
        marginBottom: "4%"
    },
    dividerLine: {
        textAlign: "center",
        color: "#E1E1E1",
        paddingTop: "3%"
    },
    videoSubTitle: {
        fontSize: 19,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        marginBottom: "3%"
    },
    videoList: {
        fontSize: 14,
        color: "black",
        textAlign: "center",
    },
    githubDemoLine: {
        flexDirection: "row",
        marginLeft: "auto",
        marginRight: "auto",
    },
    githubDemoLink: {
        color: "#31CCC8",
        fontWeight: "bold",
        marginTop: "4%",
        marginBottom: "2%",
        fontSize: 18
    },
    githubDemoDividerLine: {
        marginTop: "4%",
        marginBottom: "4%",
        fontSize: 20
    },
    projectBio: {
        textAlign: "center",
        marginTop: "0%",
        marginBottom: "2%",
        paddingRight: "5%",
        paddingLeft: "5%",
        fontSize: 15
    }
})

export default ArtWorkProject;