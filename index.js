import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function MeusEventos() {
  const [eventos, setEventos] = useState([
    { nome: 'Conexão Acadêmica', data: '04 Novembro,,2025'},
    { nome: 'Conexão Acadêmica', data: '04 Novembro, 2025'},
    { nome: 'Conexão Acadêmica', data: '04 Novembro, 2025'},
    { nome: 'Conexão Acadêmica', data: '04 Novembro, 2025'},
    { nome: 'Conexão Acadêmica', data: '04 Novembro, 2025'},
    
  ]);
  const router = useRouter();
  const { nome, data } = useLocalSearchParams();

  useEffect(() => {
    if (nome && data) {
      setEventos((prev) => [...prev, { nome, data }]);
    }
  }, [nome, data]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Eventos</Text>

      <FlatList
        data={eventos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.eventCard}>
            <Text style={styles.eventTitle}>{item.nome}</Text>
            <Text style={styles.eventDate}>{item.data}</Text>
          </View>
        )}
        contentContainerStyle={{ gap: 12 }}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/add-event')}
      >
        <Text style={styles.buttonText}>Registrar novo evento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20, paddingBottom: 40 },
  title: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 16,
  textAlign: 'center',  // <-- centraliza o texto
},

  eventCard: {
    backgroundColor: '#F2F2F2',
    padding: 16,
    borderRadius: 12,
  },
  eventTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  eventDate: { fontSize: 14, color: '#666' },
  button: {
    backgroundColor: '#0B3D0B',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: '600' },
});
