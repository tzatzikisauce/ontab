import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Alert,
    SafeAreaView, 
    ScrollView,
} from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { db } from './../../../config';
import { withNavigation } from 'react-navigation';


let addItem = (name,price) => {
    db.ref('/menu').push({
      name: name,
      price: price,
    });
  };

export default class MenuTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['Drink', 'Price',''],
          tableData: [
            ["Gin and Tonic", '$6.25',''],
            ["Margarita", '$6.50',''],
            ["Tequila Shot", '$6',''],
            ["Cosmopolitan", '$8',''],
            ["Old Fashioned", '$8.95',''],
            ["Moscow Mule", '$7',''],
            ["Mojito", '$6.50',''],
            ["Whiskey Sour", '$6.50',''],
            ["Manhattan", '$6',''],
            ["Mimosa", '$7',''],
            ["Gimlet", '$7.50',''],
          ]
        }
      }
     
    handleSubmit = (name, price) => {
        addItem(name,price);
    };

    addDrink(drinkIndex) {
        let name = this.state.tableData[drinkIndex][0];
        let price = this.state.tableData[drinkIndex][1];
        this.handleSubmit(name,price);
        Alert.alert('Successfully added to your tab.');
        // this.props.navigation.navigate('Home');    
    }

    render() {
        const state = this.state;
        const element = (data, index) => (
            <TouchableOpacity onPress={() => this.addDrink(index)}>
            <View style={styles.btn}>
                <Text style={styles.btnText}>Add to Order</Text>
            </View>
            </TouchableOpacity>
        );
        
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Table borderStyle={{borderColor: 'transparent'}}>
                        <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                        {
                        state.tableData.map((rowData, index) => (
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
                </ScrollView>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 16, 
        height: "100%",
    },

    head: { 
        height: 40 
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

    btn: { 
        width: 100, 
        height: 30, 
        backgroundColor: '#6d6ca8',  
        borderRadius: 2 
    },

    btnText: { 
        textAlign: 'center', 
        color: '#fff' 
    }
    
})