import React, { Component } from 'react';
import {  View, Text, Image, Alert, Platform, TextInput, FlatList} from 'react-native';
import Button from 'react-native-button'

export default class MovieComponent extends Component {
  constructor(){
    super()
    this.state={
      movieName : null,
      releaseYear : null
    }
  }
  render() {
    let { movies }= this.props
    return (
      <View
        style={{
          flex: 1,
          marginTop: Platform.OS === 'ios' ? 34 : 0
        }}
      >
        <Text
          style={{
            margin: 10,
            fontWeight: 'bold',
            color: 'forestgreen',
            fontSize: 20
          }}
        > 
          Redux Saga Tutorial - Movies List 
        </Text>
        <Text
          style={{
            margin: 10,
            color: 'black',
            fontSize: 20
          }}
        > 
          New Movie information
        </Text>
        <View
          style={{
            height: 100,
            margin: 10
          }}
        >
          <TextInput
            placeholder={'Enter new movie name'}
            onChangeText={ (movieName) => this.setState({movieName}) }
            value={this.state.movieName}
            style={{
              flex: 1,
              margin: 5,
              padding: 10,
              borderColor: 'gray',
              borderWidth: 1
            }}
          />
          <TextInput
            placeholder={'Release year'}
            onChangeText={ (releaseYear) => this.setState({releaseYear}) }
            value={this.state.releaseYear}
            style={{
              flex: 1,
              margin: 5,
              padding: 10,
              borderColor: 'gray',
              borderWidth: 1,
              width: 120
            }}
          />
        </View>
        <View
          style={{
            height: 70,
            flexDirection: 'row'
          }}
        >
          <Button
            containerStyle={{
              padding: 10,
              margin: 10,
              width: 150,
              height: 45,
              borderRadius: 10,
              backgroundColor: 'darkviolet'
            }}
            style={{
              fontSize: 18,
              color: 'white'
            }}
            onPress={
              () => this.props.onGetMovies()
            }
          >
            Fetch Movies
          </Button>
          <Button
            containerStyle={{
              padding: 10,
              margin: 10,
              width: 150,
              height: 45,
              borderRadius: 10,
              backgroundColor: 'darkviolet'
            }}
            style={{
              fontSize: 18,
              color: 'white'
            }}
            onPress={
              () => this.props.onAddMovie()
            }
          >
            Add Movies
          </Button>
        </View>
        {console.log('DI DEPAN', movies)}
        <FlatList
          data={movies}
          keyExtractor={ (item, i) => i.toString() }
          renderItem={( item ) =>
            <Text
              style={{
                padding: 10,
                fontWeight: 'bold',
                fontSize: 17,
                color: 'white',
                backgroundColor: ( item.index % 2 === 0 ? 'dodgerblue' : 'mediumseagreen')
              }}
            >
              { item.index + 1 }, releaseYear = {item.item.name}
            </Text>
          }
        />
      </View>
    );
  }
}
