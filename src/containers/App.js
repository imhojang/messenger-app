import { connect } from 'react-redux';
import App from '../components/App';
import { getChats } from '../api';
import {
  initialization,
  onLoading,
  openChat,
  sendMessage,
  setCurrentMessageList,
} from '../actions';

const mapStateToProps = state => {
  return {
    chatList: state.chatListData,
    isLoading: state.isLoading,
    currentLocation: state.currentLocation,
    messageList: state.messageList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad() {
      dispatch(onLoading());
      getChats().then(data => {
        dispatch(initialization(data));
      });
    },
    setCurrentLocation(location) {
      dispatch(openChat(location));
    },
    sendMessageNow(message, messageTo, messageId) {
      dispatch(sendMessage(message, messageTo, messageId));
    },
    setMessageList(messageList) {
      dispatch(setCurrentMessageList(messageList));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
