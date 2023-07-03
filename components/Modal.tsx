import {
  Button,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';

interface MyModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MyModal({
  isModalOpen,
  setIsModalOpen,
}: MyModalProps): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Modal
        visible={isModalOpen}
        onRequestClose={() => setIsModalOpen(prev => !prev)}
        animationType="fade"
        style={styles.modal}
        statusBarTranslucent={true}
        transparent={true}>
        <TouchableWithoutFeedback onPress={() => setIsModalOpen(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>

        <View style={styles.modalContent}>
          <Text>Hello this is modal</Text>
          <Button
            title="close modal"
            onPress={() => setIsModalOpen(prev => !prev)}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 50,
    paddingVertical: 150,
  },
  innerModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    width: '100%',
    height: '100%',
  },

  modalContent: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    marginHorizontal: 50,
    marginVertical: 100,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
});
