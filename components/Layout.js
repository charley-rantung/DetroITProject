import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// const Layout = () => {
//     return(
//         <View>
//             <Text style={{fontSize: 25}}>Layout Component</Text>
//             <Text style={styles.textStyle}>Layout Component</Text>
//             <Text style={styles.textStyle, styles.redTextStyle}>This text is red</Text>
//         </View>
//     )
// }

const Layout = () => {
    return(
        <View style={styles.container}>
           <View style={styles.box1}></View>
           <View style={styles.box2}></View>
           <View style={styles.box3}></View>
        </View>
    )
}

// const styles = StyleSheet.create({
//     textStyle: {
//         fontSize: 25,
//         fontWeight: 'bold',
//         color: 'blue'
//     },
//     redTextStyle: {
//         color: 'red'
//     }
// })
const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center'
    },
    box1: {
        // flex: 1,
        height:50,
        width:50,
        backgroundColor:'royalblue'
    },
    box2: {
        // flex: 10,
        height:50,
        width:50,
        backgroundColor:'peru'
    },
    box3: {
        // flex:0.5,
        height:50,
        width:50,
        backgroundColor:'greenyellow'
    },
})
export default Layout;