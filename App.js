/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useLayoutEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Button, Text, View, TextInput} from 'react-native';

function Feed() {
  const [strtxt1, settext1] = useState('type something');
  const [strtxt2, settext2] = useState('type something');

  useEffect(() => {
    console.log('Feed Create');
    return function () {
      console.log('Feed Destroy');
    };
  }, []);

  return (
    <View>
      <Text>Feed Screen</Text>
      <TextInput
        editable={true}
        value={strtxt1}
        onChangeText={txt => {
          settext1(txt);
        }}
      />
      <TextInput
        editable={true}
        value={strtxt2}
        onChangeText={txt => {
          settext2(txt);
        }}
      />
    </View>
  );
}

function Article() {
  return (
    <View>
      <Text>Article Screen</Text>
      <TextInput editable={true} value={'type something'} />
      <TextInput editable={true} value={'type something'} />
    </View>
  );
}

function Another() {
  return (
    <View>
      <Text>Another Screen</Text>
      <TextInput editable={true} value={'type something'} />
      <TextInput editable={true} value={'type something'} />
    </View>
  );
}

function OneMore() {
  return (
    <View>
      <Text>OneMore Screen</Text>
      <TextInput editable={true} value={'type something'} />
      <TextInput editable={true} value={'type something'} />
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
      <Drawer.Screen name="Another" component={Another} />
      <Drawer.Screen name="OneMore" component={OneMore} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
