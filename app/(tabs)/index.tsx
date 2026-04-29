import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  Image, 
  useWindowDimensions, 
  ImageSourcePropType,
  SafeAreaView 
} from 'react-native';

// Interface untuk tipe data props Card
interface ProductProps {
  name: string;
  price: string;
  imageSource: ImageSourcePropType;
  hasBadge?: boolean;
}

export default function TechGearsStore() {
  const { width } = useWindowDimensions();
  
  // Menghitung lebar card: (Lebar Layar - (Padding kiri kanan + Gap tengah)) / 2
  const cardWidth = (width - 50) / 2;

  // Komponen Card Produk
  const ProductCard = ({ name, price, imageSource, hasBadge }: ProductProps) => (
    <View style={[styles.card, { width: cardWidth }]}>
      {/* Badge Melayang (Absolute) */}
      {hasBadge && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>OFF</Text>
        </View>
      )}
      
      {/* Gambar Produk Lokal */}
      <Image source={imageSource} style={styles.productImage} resizeMode="contain" />
      
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={1}>{name}</Text>
        <Text style={styles.productPrice}>{price}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* HEADER: Berada di tengah (Column) */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>TechGears Store</Text>
          <Text style={styles.headerSubtitle}>Premium Tech Gear Only</Text>
        </View>

        {/* PRODUCT GRID: Baris 1 */}
        <View style={styles.row}>
          <ProductCard 
            name="Gaming Mouse" 
            price="Rp 450.000" 
            hasBadge={true} 
            imageSource={require('../../assets/images/mouse.jpg')} 
          />
          <ProductCard 
            name="Keyboard" 
            price="Rp 1.200.000" 
            imageSource={require('../../assets/images/keyboard.jpg')} 
          />
        </View>

        {/* PRODUCT GRID: Baris 2 */}
        <View style={styles.row}>
          <ProductCard 
            name="Monitor 4K" 
            price="Rp 4.500.000" 
            imageSource={require('../../assets/images/monitor.png')} 
          />
          <ProductCard 
            name="USB-C Hub" 
            price="Rp 300.000" 
            imageSource={require('../../assets/images/headset.jpg')} 
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  // Header sesuai Mandatory Requirements
  header: {
    paddingVertical: 30,
    backgroundColor: '#1A1A1A',
    flexDirection: 'column', // Wajib column
    alignItems: 'center',    // Biar teks ke tengah
    justifyContent: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  headerSubtitle: {
    color: '#BBBBBB',
    marginTop: 5,
    fontSize: 14,
  },
  // Grid System menggunakan Row
  row: {
    flexDirection: 'row',     // Wajib row untuk baris produk
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 15,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 12,
    position: 'relative',     // Wajib untuk posisi Absolute Badge
    // Shadow agar rapi
    elevation: 4,             
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productImage: {
    width: '100%',
    height: 120,
    marginBottom: 10,
  },
  productInfo: {
    alignItems: 'flex-start',
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: 13,
    color: '#007AFF',
    marginTop: 4,
    fontWeight: '600',
  },
  // Badge Absolute sesuai Mandatory Requirements
  badge: {
    position: 'absolute',    // Wajib absolute
    top: 10,
    right: 10,
    backgroundColor: '#E74C3C',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    zIndex: 10,              // Memastikan badge di atas gambar
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '900',
  },
});
