import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { AppInputController } from '../../shared/components/AppInputController';
import { useRegisterViewModel } from './useRegisterViewModel';
import { AuthFormHeader } from '@/shared/components/AuthFormHeader';
import { router } from 'expo-router';
import { KeyBoardContainer } from '@/shared/components/KeyboardContainer';
import { AppButton } from '@/shared/components/AppButton';
import { Ionicons } from '@expo/vector-icons';

export function RegisterView() {
  const { onSubmit, control, handleSelectAvatar, avatarUri } = useRegisterViewModel();

  return (
    <KeyBoardContainer>
      <ScrollView className="flex-1" contentContainerClassName=" justify-center px-[40px]">
        <View className="flex-1 w-full">
          <AuthFormHeader title="Crie sua conta" subTitle="Informe seus dados de acesso" />

          <TouchableOpacity
            onPress={handleSelectAvatar}
            className="w-[120px] h-[120px] rounded-[12px] items-center justify-center bg-shape self-center mb-8"
          >
            {avatarUri ? (
              <Image source={{ uri: avatarUri }} className="w-full h-full rounded-[12px]" />
            ) : (
              <Ionicons name="cloud-upload-outline" size={32} color="#888" />
            )}
          </TouchableOpacity>
          <AppInputController
            leftIcon="person-outline"
            label="NOME"
            control={control}
            placeholder="Seu nome completo"
            name="name"
          />

          <AppInputController
            leftIcon="call-outline"
            label="TELEFONE"
            control={control}
            placeholder="(00) 0000-0000"
            name="phone"
          />

          <Text className="text-base mt-6 font-bold text-gray-500"> Acesso</Text>

          <AppInputController
            leftIcon="mail-outline"
            label="E-MAIL"
            control={control}
            placeholder="email@exemplo.com"
            name="email"
          />

          <AppInputController
            leftIcon="lock-closed-outline"
            label="SENHA"
            control={control}
            name="password"
            placeholder="Sua senha"
            secureTextEntry
          />
          <AppInputController
            leftIcon="lock-closed-outline"
            label="CONFIRMAR SENHA"
            control={control}
            name="confirmPassword"
            placeholder="Confirme sua senha"
            secureTextEntry
          />

          <AppButton className="mt-6" leftIcon="arrow-forward" variant="primary" onPress={onSubmit}>
            Registrar
          </AppButton>
        </View>

        <View className="flex-2 pb-16 mt-16">
          <Text className="text-basemb-6 text-gray-300">Já tem uma conta?</Text>
          <AppButton
            leftIcon="arrow-forward"
            variant="secondary"
            onPress={() => router.push('/login')}
          >
            Login
          </AppButton>
        </View>
      </ScrollView>
    </KeyBoardContainer>
  );
}
