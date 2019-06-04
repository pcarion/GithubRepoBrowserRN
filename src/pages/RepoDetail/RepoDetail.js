import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Text, View } from 'react-native';

class RepoDetail extends Component {
  render() {
    const { match, appState } = this.props;
    const { repoId } = match.params;

    const repo = appState.getRepoById(repoId);

    console.log('repo>', repo);

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>repoId {repoId}!</Text>
        <Text style={styles.welcome}>repo: {JSON.stringify(repo)}!</Text>
      </View>
    );
  }
}

RepoDetail.propTypes = {
  appState: PropTypes.object.isRequired,
};

export default RepoDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

