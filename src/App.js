/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { NativeRouter, Switch, Route, Link } from 'react-router-native';
import { githubRepoUser } from '../app.json';

import mkState from './state';

import Home from './pages/Home';
import RepoDetail from './pages/RepoDetail';

// the shared state between components
// we could have used a react context for that, but may be over kill
// as we have very few components
const appState = mkState(githubRepoUser);

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
  <SafeAreaView style={styles.container}>
    <NativeRouter>
      <Switch>
        <Route exact path="/" render={props => <Home {...props} appState={appState} />} />
        <Route path="/repoDetail/:repoId" render={props => <RepoDetail {...props} appState={appState} />} />
        <Route path="/about" render={props => <About {...props} appState={appState} />} />
        <Route render={props => <Home {...props} appState={appState} />} />
      </Switch>
    </NativeRouter>
  </SafeAreaView>
);

export default App;
