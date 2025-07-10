import React, { useEffect, useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { HijabImages } from '../assets';

interface UserData {
  nama: string;
  nim: string;
  kelas: string;
  foto?: string;
}

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [imageError, setImageError] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  // Fixed credentials for API photo fetch
  const API_NIM = '23040148';
  const API_PASSWORD = '3603116903040001';

  useEffect(() => {
    // Auto fetch profile saat component mount
    fetchProfile(API_NIM, API_PASSWORD);
    return () => {
      // Cleanup
      setIsLoading(false);
      setImageError(false);
    };
  }, []);

  const fetchProfile = async (nim: string, kelas: string) => {
    try {
      console.log('Fetching profile for NIM:', nim, 'Kelas:', kelas);
      setImageError(false); // Reset error state

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch(
        `https://cloud-jalurlangitv2.ikraf.or.id/api/applms/tarik_data?password=${kelas}&nim=${nim}`,
        {
          method: 'GET',
          headers: {
            Authorization: 'Basic ' + btoa('adminx:adminx123'),
          },
          signal: controller.signal,
        }
      );

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      console.log('API Response:', json);

      // Handle different response structures
      if (json.status && json.foto) {
        console.log('Foto URL ditemukan:', json.foto);
        setAvatarUrl(json.foto);
        setUserData({
          nama: json.nama || 'Unknown',
          nim: json.nim || nim,
          kelas: json.kelas || kelas,
          foto: json.foto
        });
      } else if (json.success && json.data) {
        // Alternative response structure
        console.log('Data ditemukan:', json.data);
        setUserData(json.data);
        if (json.data.foto) {
          setAvatarUrl(json.data.foto);
        }
      } else {
        console.warn('Tidak ada foto ditemukan dalam response');
        setAvatarUrl(null);
        setImageError(true);
        // Still set user data if available
        if (json.nama || json.nim) {
          setUserData({
            nama: json.nama || 'Unknown',
            nim: json.nim || nim,
            kelas: json.kelas || kelas
          });
        }
      }
    } catch (error: any) {
      if (error.name === 'AbortError') {
        console.log('Request timeout');
      } else {
        console.error('Gagal ambil foto:', error);
      }
      setAvatarUrl(null);
      setImageError(true);
    }
  };

  const renderHeaderImage = () => {
    if (!avatarUrl || imageError) {
      return (
        <Image 
          source={HijabImages.icon} 
          style={styles.logo}
          defaultSource={HijabImages.icon}
        />
      );
    }

    return (
      <Image 
        source={{ uri: avatarUrl }} 
        style={styles.logo}
        defaultSource={HijabImages.icon}
        onError={() => {
          console.log('Error loading profile image');
          setImageError(true);
        }}
      />
    );
  };

  const handleAuth = async () => {
    if (isLogin) {
      // Login logic (simulasi)
      if (email === '' || password === '') {
        Alert.alert('Error', 'Mohon isi email dan password');
        return;
      }
      
      setIsLoading(true);
      
      // Simulasi loading untuk UX yang lebih baik
      setTimeout(() => {
        setIsLoading(false);
        
        // Validasi login dengan kredensial yang benar
        if (email === 'nama@gmail.com' && password === '123') {
          // Langsung navigasi ke MainTabs
          navigation.navigate('MainTabs');
        } else {
          Alert.alert('Error', 'Email atau password salah. Gunakan nama@gmail.com dengan password 123');
        }
      }, 1000);
    } else {
      // Register logic (simulasi)
      if (name === '' || email === '' || password === '') {
        Alert.alert('Error', 'Mohon isi semua field');
        return;
      }
      
      if (password.length < 6) {
        Alert.alert('Error', 'Password minimal 6 karakter');
        return;
      }
      
      // Simulasi register berhasil
      Alert.alert(
        'Registrasi Berhasil',
        'Akun Anda telah dibuat! Silakan login.',
        [{ text: 'OK', onPress: () => setIsLogin(true) }]
      );
    }
  };

  const handleGuestLogin = () => {
    Alert.alert(
      'Login sebagai Tamu',
      'Anda akan masuk sebagai tamu. Beberapa fitur mungkin terbatas.',
      [
        { text: 'Batal', style: 'cancel' },
        { text: 'Lanjutkan', onPress: () => navigation.navigate('MainTabs') }
      ]
    );
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          {renderHeaderImage()}
          <Text style={styles.appTitle}>HijabEase</Text>
          <Text style={styles.appSubtitle}>Temukan gaya hijab yang sempurna</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>
            {isLogin ? 'Masuk ke Akun Anda' : 'Buat Akun Baru'}
          </Text>

          {!isLogin && (
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Nama Lengkap</Text>
              <TextInput
                style={styles.input}
                placeholder="Masukkan nama lengkap"
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
              />
            </View>
          )}

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          {/* User Data Display */}
          {/* {userData && (
            <View style={styles.userDataContainer}>
              <Text style={styles.userDataTitle}>Data Pengguna dari API:</Text>
              {avatarUrl && !imageError && (
                <Image
                  source={{ uri: avatarUrl }}
                  style={styles.userPhoto}
                  resizeMode="cover"
                  onError={() => setImageError(true)}
                />
              )}
              <Text style={styles.userDataText}>Nama: {userData.nama}</Text>
              <Text style={styles.userDataText}>NIM: {userData.nim}</Text>
              <Text style={styles.userDataText}>Kelas: {userData.kelas}</Text>
              {imageError && (
                <Text style={styles.errorText}>Foto tidak dapat dimuat</Text>
              )}
            </View>
          )} */}

          <TouchableOpacity 
            style={[styles.authButton, isLoading && styles.authButtonDisabled]} 
            onPress={handleAuth}
            disabled={isLoading}
          >
            <Text style={styles.authButtonText}>
              {isLoading ? 'Memproses...' : (isLogin ? 'Masuk' : 'Daftar')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.switchButton} 
            onPress={() => setIsLogin(!isLogin)}
          >
            <Text style={styles.switchButtonText}>
              {isLogin 
                ? 'Belum punya akun? Daftar disini' 
                : 'Sudah punya akun? Masuk disini'
              }
            </Text>
          </TouchableOpacity>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>atau</Text>
            <View style={styles.dividerLine} />
          </View>

          <TouchableOpacity style={styles.guestButton} onPress={handleGuestLogin}>
            <Text style={styles.guestButtonText}>👤 Masuk sebagai Tamu</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.demoButton} onPress={() => {
            setEmail('nama@gmail.com');
            setPassword('123');
            // Langsung navigasi ke MainTabs
            navigation.navigate('MainTabs');
          }}>
            <Text style={styles.demoButtonText}>🎯 Login Demo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickLoginButton} onPress={() => {
            setEmail('nama@gmail.com');
            setPassword('123');
          }}>
            <Text style={styles.quickLoginButtonText}>⚡ Isi Kredensial</Text>
          </TouchableOpacity>

          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialButtonText}>📱 Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialButtonText}>📘 Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Dengan melanjutkan, Anda menyetujui{'\n'}
            <Text style={styles.linkText}>Syarat & Ketentuan</Text> dan{' '}
            <Text style={styles.linkText}>Kebijakan Privasi</Text>
          </Text>
          
          {/* API Info */}
          <View style={styles.apiInfo}>
            <Text style={styles.apiInfoText}>
              Foto profil diambil dari API eksternal
            </Text>
            <Text style={styles.apiInfoText}>
              NIM: {API_NIM} | Password: {API_PASSWORD}
            </Text>
            {userData && (
              <Text style={styles.apiInfoText}>
                Status: Data berhasil dimuat {avatarUrl ? '✅' : '❌ (tanpa foto)'}
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 30,
    backgroundColor: '#FF6B6B',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  appSubtitle: {
    fontSize: 14,
    color: 'white',
    opacity: 0.9,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 20,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: 'white',
  },
  authButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  authButtonDisabled: {
    backgroundColor: '#cccccc',
    opacity: 0.6,
  },
  authButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  switchButton: {
    alignItems: 'center',
    marginBottom: 20,
  },
  switchButtonText: {
    color: '#FF6B6B',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e0e0e0',
  },
  dividerText: {
    marginHorizontal: 15,
    color: '#666',
    fontSize: 14,
  },
  guestButton: {
    backgroundColor: '#6c757d',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  guestButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  demoButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  demoButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  quickLoginButton: {
    backgroundColor: '#17a2b8',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  quickLoginButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  socialButton: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  socialButtonText: {
    color: '#333',
    fontSize: 14,
    fontWeight: '600',
  },
  footer: {
    paddingHorizontal: 30,
    paddingBottom: 30,
    paddingTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    lineHeight: 18,
  },
  linkText: {
    color: '#FF6B6B',
    textDecorationLine: 'underline',
  },
  userDataContainer: {
    backgroundColor: '#f0f8f0',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  userDataTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF6B6B',
    marginBottom: 12,
    textAlign: 'center',
  },
  userPhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#FF6B6B',
  },
  userDataText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 12,
    color: '#FF6B6B',
    textAlign: 'center',
    marginTop: 8,
    fontStyle: 'italic',
  },
  apiInfo: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignItems: 'center',
  },
  apiInfoText: {
    fontSize: 11,
    color: '#666',
    textAlign: 'center',
    marginBottom: 2,
  },
});

export default LoginScreen;
