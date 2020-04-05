import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Alert
} from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';


export default class LoginForm extends Component {
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
     
    _alertIndex(drink) {
    Alert.alert(`Successfully added to your tab.`);
    }

    render() {
        const state = this.state;
        const element = (data, index) => (
            <TouchableOpacity onPress={() => this._alertIndex(index)}>
            <View style={styles.btn}>
                <Text style={styles.btnText}>Add to Order</Text>
            </View>
            </TouchableOpacity>
        );
        
        return (
            <View style={styles.container}>
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
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 16, 
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