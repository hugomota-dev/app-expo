import { Slot, useRouter, useSegments } from 'expo-router';
import { AuthProvider, useAuth } from '../src/context/AuthContext';
import React, { useEffect } from 'react';

// Componente que lida com a lógica de redirecionamento
function InitialLayout() {
  const { token, initialized } = useAuth(); // 'initialized' é um novo estado no AuthContext
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    // Só prosseguir após o AuthContext ter tentado carregar o token do storage
    if (!initialized) return;

    const inAuthGroup = segments[0] === '(auth)';

    if (token && !inAuthGroup) {
      // Se tem token e não está nas rotas autenticadas, redireciona para home
      router.replace('/(auth)/home');
    } else if (!token && inAuthGroup) {
      // Se não tem token e está nas rotas autenticadas, redireciona para o login
      router.replace('/');
    }
  }, [token, segments, initialized, router]);

  return <Slot />;
}

// Layout principal que provê o AuthProvider
export default function RootLayout() {
  return (
    <AuthProvider>
      <InitialLayout />
    </AuthProvider>
  );
}