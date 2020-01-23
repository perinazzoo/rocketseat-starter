import React, {Component} from 'react';
import api from '../services/api';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Gato Makonha',
  };

  state = {
    membersInfo: {},
    docs: [],
    page: 1,
  };

  componentDidMount() {
    this.loadMembers();
  }

  loadMembers = async (page = 1) => {
    const response = await api.get(`/members?page=${page}`);

    const {docs, ...membersInfo} = response.data;

    this.setState({docs: [...this.state.docs, ...docs], membersInfo, page});
  };

  loadMore = () => {
    const {page, membersInfo} = this.state;

    if (page === membersInfo) return;

    const pageNumber = page + 1;

    this.loadMembers(pageNumber);
  };

  renderItem = ({item}) => (
    <View style={styles.memberContainer}>
      <Text style={styles.memberName}>{item.name}</Text>
      <Text style={styles.memberAge}>{`Idade: ${item.age}`}</Text>
      <Text
        style={styles.memberState}>{`Reside no estado: ${item.estado}`}</Text>

      <TouchableOpacity
        style={styles.memberButton}
        onPress={() => {
          this.props.navigation.navigate('Twitter', {member: item});
        }}>
        <Text style={styles.memberButtonText}>Veja no Twitter</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.list}
          data={this.state.docs}
          keyExtractor={item => item._id}
          renderItem={this.renderItem}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.3}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  list: {
    padding: 20,
  },
  memberContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    borderColor: '#DDD',
  },
  memberName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  memberAge: {
    fontSize: 16,
    color: '#999',
    marginTop: 5,
    lineHeight: 24,
  },
  memberState: {
    fontSize: 16,
    color: '#999',
    marginTop: 5,
    lineHeight: 15,
  },
  memberButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#b110b1',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  memberButtonText: {
    fontSize: 16,
    color: '#b110b1',
    fontWeight: 'bold',
  },
});
