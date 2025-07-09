import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CatalogScreen = ({ navigation }: any) => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const hijabCategories = [
    { id: 1, name: 'Hijab Segi Empat', screen: 'SegiEmpat', color: '#FFE5E5', emoji: '🔸' },
    { id: 2, name: 'Hijab Pashmina Kaos', screen: 'PashminaKaos', color: '#E5F3FF', emoji: '🧶' },
    { id: 3, name: 'Hijab Sport', screen: 'Sport', color: '#FFF0E5', emoji: '⚽' },
    { id: 4, name: 'Hijab Bergo', screen: 'Bergo', color: '#F0FFE5', emoji: '🧕' },
    { id: 5, name: 'Hijab Syar\'i', screen: 'Syari', color: '#F5E5FF', emoji: '🕌' },
    { id: 6, name: 'Hijab Khimar', screen: 'Khimar', color: '#FFE5F0', emoji: '👑' },
    { id: 7, name: 'Hijab Turban', screen: 'Turban', color: '#E5FFFF', emoji: '👒' },
    { id: 8, name: 'Hijab Hoodie', screen: 'Hoodie', color: '#FFFFE5', emoji: '🧥' },
    { id: 9, name: 'Hijab Layer', screen: 'Layer', color: '#E5FFE5', emoji: '📚' },
    { id: 10, name: 'Pashmina Voal', screen: 'PashminaVoal', color: '#FFE5E5', emoji: '🌸' },
    { id: 11, name: 'Pashmina Ceruty', screen: 'PashminaCeruty', color: '#E5E5FF', emoji: '✨' },
    { id: 12, name: 'Pashmina Crinkle', screen: 'Crinkle', color: '#F0E5FF', emoji: '〰️' },
    { id: 13, name: 'Pashmina Satin', screen: 'Satin', color: '#E5FFF0', emoji: '💎' },
    { id: 14, name: 'Pashmina Plisket', screen: 'Plisket', color: '#FFF5E5', emoji: '📄' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Katalog Hijab</Text>
        <Text style={styles.headerSubtitle}>Pilih kategori hijab yang Anda inginkan</Text>
      </View>

      <View style={styles.categoriesContainer}>
        {hijabCategories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryItem,
              { backgroundColor: category.color },
              selectedCategory === category.id && styles.selectedCategory
            ]}
            onPress={() => {
              setSelectedCategory(category.id);
              navigation.navigate(category.screen);
            }}
          >
            <View style={styles.categoryContent}>
              <Text style={styles.categoryEmoji}>{category.emoji}</Text>
              <Text style={styles.categoryName}>{category.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Total Kategori Hijab</Text>
        <Text style={styles.infoNumber}>14</Text>
        <Text style={styles.infoText}>
          Temukan berbagai jenis hijab sesuai dengan kebutuhan dan gaya Anda
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#FF6B6B',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  headerSubtitle: {
    color: 'white',
    fontSize: 14,
    opacity: 0.9,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: '48%',
    height: 120,
    marginBottom: 15,
    borderRadius: 12,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectedCategory: {
    borderWidth: 3,
    borderColor: '#FF6B6B',
    transform: [{ scale: 0.95 }],
  },
  categoryContent: {
    alignItems: 'center',
  },
  categoryEmoji: {
    fontSize: 28,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  infoSection: {
    backgroundColor: 'white',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  infoNumber: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FF6B6B',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default CatalogScreen;
