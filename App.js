import React, {Component, Fragment} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, ActivityIndicator} from 'react-native';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import LocationItem from './components/LocationItem';

export default class App extends Component {

  state={
    textInputValue: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <GoogleAutoComplete 
          apiKey={'AIzaSyAcOSXxgZOASLOWqBCyGvztaH9Pe_hgLGU'}
          debounce={500}
          minLength={3}
          language={"pt"}
          queryTypes={['establishment']}>
          
          {({ handleTextChange, locationResults, fetchDetails, isSearching, inputValue, clearSearchs }) => (
            <Fragment>
              <View style={styles.inputWrapper}>
                <TextInput 
                ref={input => this.inputText = input}
                  style={styles.textInput} 
                  placeholder={"Search a places"}
                  onChangeText={handleTextChange}
                  value={inputValue}
                />
                <Text style={styles.textButton} onPress={() => {
                  clearSearchs();
                  this.inputText.clear();
                }}>
                  Clear
                </Text>
              </View>
              {isSearching && <ActivityIndicator size={'large'} color={"blue"} />}
              <ScrollView>
                {locationResults.map(place => (
                  <LocationItem 
                    {...place}
                    key={place.id}
                    fetchDetails={fetchDetails}
                  />
                ))}
              </ScrollView>
            </Fragment>
          )}

        </GoogleAutoComplete>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    height: 40,
    width: 250,
    borderWidth: 1,
    paddingHorizontal: 16
  },
  inputWrapper: {
    flexDirection: 'row',
    marginTop: 80
  },
  textButton: {
    alignSelf: 'center',
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 15
  }
});
