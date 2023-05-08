import { View, Text, Button, Alert } from 'react-native';

import { styles } from './styles';
import { RadioButton } from 'react-native-paper';
import { useState } from 'react';

type Props = {
  description: string;
  onRemove: () => void;
};

export function Task({ description, onRemove }: Props) {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.container} key={description}>
      <RadioButton
        value="false"
        status={checked === true ? 'checked' : 'unchecked'}
        onPress={() => setChecked(!checked)}
      />
      <Text style={styles.description}>{description}</Text>
      <Button title="X" color="#262626" onPress={onRemove} />
    </View>
  );
}
