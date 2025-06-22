import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Index() {
  const [eventos, setEventos] = useState([
    { id: '1', nome: 'Conexão Acadêmica', data: '04 Novembro, 2025' },
    { id: '2', nome: 'Semana de Tecnologia', data: '10 Dezembro, 2025' }
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus Eventos</Text>

      <FlatList
        data={eventos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.data}>{item.data}</Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.vazio}>Nenhum evento registrado</Text>
        )}
      />

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Registrar novo evento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff', padding: 24
  },
  titulo: {
    fontSize: 24, fontWeight: 'bold', marginTop: 48, marginBottom: 24
  },
  item: {
    padding: 16, backgroundColor: '#eee', borderRadius: 8, marginBottom: 12
  },
  nome: {
    fontSize: 16, fontWeight: 'bold'
  },
  data: {
    fontSize: 14, color: '#666'
  },
  vazio: {
    color: '#888', textAlign: 'center', marginTop: 32
  },
  botao: {
    backgroundColor: '#003300', padding: 16, borderRadius: 8, alignItems: 'center', marginTop: 16
  },
  botaoTexto: {
    color: '#fff', fontSize: 16
  }
});

