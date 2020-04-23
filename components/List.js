import React from 'react';
import {View, Text, FlatList} from 'react-native';

class List extends React.Component{
    constructor(){
        super();
        this.state = {
            // students: [
            //     {
            //         id:1,
            //         name:'John',
            //         faculty:'Computer Science'
            //     },
            //     {id:2,
            //         name:'Jane',
            //         faculty:'Bussiness'},
            //     {id:3,
            //         name:'Bob',
            //         faculty:'Nurse'},
            //     {id:4,
            //         name:'Mike',
            //         faculty:'Computer Science'},
            // ],
            users: [],
            refreshing: false
        }
    }

    renderItem = (student) => <Text key={student.id}>{student.name}</Text>

    onRefresh = () => {
        this.setState({refreshing: true})
        const data = this.state.students.concat({id: 5, name: 'Jordan', faculty: 'bussiness'})
        this.setState({
            refreshing: false,
            students: data
        })
    }

    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>response.json())
        .then(json => this.setState({users: json}))
    }

    render(){
        // const listStudents = this.state.students.map(this.renderItem)
        return(
            <View>
                {/* {listStudents} */}
                <FlatList
                    data={this.state.students}
                    keyExtractor={item => item.id.toString()}
                    renderItem={(({item})=> <Text>{item.name}</Text>)}
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                />
            </View>
        )
    }
}

export default List;