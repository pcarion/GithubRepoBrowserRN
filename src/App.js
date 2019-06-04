/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { NativeRouter, Route, Link } from 'react-router-native';

import Home from './pages/Home';

const About = () => <Text style={styles.header}>About</Text>;

const Topic = ({ match }) => (
  <Text style={styles.topic}>{match.params.topicId}</Text>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: 'center',
    fontSize: 15
  }
});

const Topics = ({ match }) => (
  <View>
    <Text style={styles.header}>Topics</Text>
    <View>
      <Link
        to={`${match.url}/rendering`}
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Rendering with React</Text>
      </Link>
      <Link
        to={`${match.url}/components`}
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Components</Text>
      </Link>
      <Link
        to={`${match.url}/props-v-state`}
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Props v. State</Text>
      </Link>
    </View>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <Text style={styles.topic}>Please select a topic.</Text>}
    />
  </View>
);

const App = () => (
  <NativeRouter>
    <SafeAreaView style={styles.container}>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </SafeAreaView>
  </NativeRouter>
);

export default App;
