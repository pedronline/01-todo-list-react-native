import { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

import { styles } from './styles';

import logo from '../../../assets/logo.png';

import { Task } from '../../components/Task';

export function Home() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  function handleAddTask() {
    setTasks((prevState) => [task, ...prevState]);
    setTask('');
  }

  function handleRemoveTask(description: string) {
    Alert.alert('Remover', 'Remover Tarefa?', [
      {
        text: 'sim',
        onPress: () =>
          setTasks((prevState) =>
            prevState.filter((task) => task !== description)
          ),
      },
      {
        text: ' não',
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Image source={logo} style={styles.image} />

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onChangeText={setTask}
            value={task}
          />
          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.createdView}>
          <Text style={styles.created}>Criadas</Text>
          <Text style={styles.createdNumber}> {tasks.length}</Text>
        </View>
        <ScrollView>
          {tasks.length === 0 ? (
            <Text style={styles.clean}>Você não tem tarefas</Text>
          ) : (
            tasks.map((task) => (
              <Task
                description={task}
                onRemove={() => handleRemoveTask(task)}
              ></Task>
            ))
          )}
        </ScrollView>
      </View>
    </View>
  );
}
