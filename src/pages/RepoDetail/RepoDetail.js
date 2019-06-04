import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Text, View, ScrollView } from 'react-native';

import NavigationBar, { NAV_BAR_HEIGHT } from '../../components/NavigationBar';

class RepoDetail extends Component {
  onBackPress = () => {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    const { match, appState } = this.props;
    const { repoId } = match.params;

    const repo = appState.getRepoById(repoId);

    console.log('repo>', repo);
    console.log('@@@ NAV_BAR_HEIGHT:', NAV_BAR_HEIGHT);

    return (
      <View style={styles.container}>
        <NavigationBar
          title={repo.name}
          onLeftIconPress={this.onBackPress}
        />
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.welcome}>repo: {repo.name}!</Text>
        </ScrollView>
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
  contentContainer: {
    paddingVertical: 20
  },
  scrollView: {
    marginTop: NAV_BAR_HEIGHT,
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

