import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Alert,
    KeyboardAvoidingView
} from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { withNavigation } from 'react-navigation';


import MenuComponent from '../MenuComponent';

import { db } from './../../../config';

let menuRef = db.ref('/menu');

export default class Tab extends Component {
  state = {
      items: [],
      tableData: [],
      tableHead: ['Drink', 'Price'],
      priceSum: 0,
  }

//   makeTable() {
//     let prices = [];
//     Alert.alert('test2');
//     if(this.state.items.length > 0){
//         this.tableData = this.state.items.map((item) => {
//             prices.push(item.price);
//             return [item.name,item.price];
//         })
//         Alert.alert('test', JSON.stringify(this.tableData));
//         this.state.priceSum = prices => prices.reduce((a,b) => a + b, 0);
//     }
    
// }
 
  componentDidMount() {
    menuRef.on('value', (snapshot) => {
      let data = snapshot.val();
      let items = Object.values(data);
      let prices = [];
      let tableData = [];
      items.forEach((item) => {
        prices.push(parseFloat(item.price.substring(1)));
        tableData.push([item.name,item.price]);
      })
      const priceSum = prices.reduce((a,b) => a + b, 0);
      this.setState({ 
        items,
        prices,
        tableData,
        priceSum
      });
    });
  }

    closeTab = () => {
        Alert.alert(`The current tab has been closed.`);
        this.props.navigation.navigate('Home');
    } 

    addToTab = () => {
      this.props.navigation.navigate('Menu');
  } 

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style = { styles.container }>
                <View style={ styles.titleContainer }>
                    <Text style={styles.title}>
                        Tab: Rick Han
                    </Text>
                </View>
                <View style={styles.menuContainer}>
                  <View style={styles.innerContainer}>
                    <Table borderStyle={{borderColor: 'transparent'}}>
                      <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
                      {
                      this.state.tableData.map((rowData, index) => (
                          <TableWrapper key={index} style={styles.row}>
                          {
                              rowData.map((cellData, cellIndex) => (
                              <Cell key={cellIndex} data={cellIndex === 2 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                              ))
                          }
                          </TableWrapper>
                      ))
                      }
                    </Table>
                  </View>
                </View>
                <View style={ styles.btnContainer }>
                    <TouchableOpacity onPress={() => this.addToTab()}>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>ADD DRINK TO TAB</Text>
                        </View>
                    </TouchableOpacity>
                  </View>
                <View style={ styles.titleContainer2 }>
                      <Text style={styles.title}>Total: {this.state.priceSum}</Text>
                  </View>
                  <View style={ styles.btnContainer }>
                    <TouchableOpacity onPress={() => this.closeTab()}>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>CLOSE TAB</Text>
                        </View>
                    </TouchableOpacity>
                  </View>
                
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1c1a26',
      width: '100%',
      height: '100%',
      // justifyContent: "center",
      paddingTop: 20,
      alignItems: "center",
  },

    titleContainer: {
        // padding: 20,
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    titleContainer2: {
      paddingBottom: 20,
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center'
  },

    menuContainer: {
      // flexGrow: 1,
      width: '100%',
      minHeight: '40%',
    },
  
    title: {
        color: '#FFF',
        marginTop: 10,
        textAlign: 'center',
        fontSize: 30,
    },
  
    btnContainer: {
      // marginTop:
      display:'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
  },

    btn: { 
        width: 200, 
        height: 30, 
        backgroundColor: '#30304a',  
        borderRadius: 2, 
        color: 'white',
        justifyContent: 'center',
        padding: 20,
        margin: 5,
    },
  
    btnText: { 
        textAlign: 'center', 
        color: '#fff' 
    },
    innerContainer: { 
        flex: 1, 
        padding: 16, 
    },

    head: { 
        height: 40, 
    },

    text: { 
        margin: 6, 
        color: '#fff', 
        fontSize: 18 
    },

    row: { 
        flexDirection: 'row', 
        backgroundColor: '#30304a', 
        height: 50 
    },
})
