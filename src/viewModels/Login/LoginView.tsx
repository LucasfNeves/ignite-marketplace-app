import { AppInputController } from '@/shared/components/AppInputController';
import { AuthFormHeader } from '@/shared/components/AuthFormHeader';
import { KeyBoardContainer } from '@/shared/components/KeyboardContainer';
import { router } from 'expo-router';
import { Text, View } from 'react-native';
import { useLoginViewModel } from './useLoginViewModel';
import { AppButton } from '@/shared/components/AppButton';

export function LoginView() {
  const { onSubmit, control } = useLoginViewModel();
  return (
    <KeyBoardContainer>
      <View className="flex-1 items-center justify-center px-[40px]">
        <View className="flex-1 w-full justify-center items-center">
          <AuthFormHeader title="Crie sua conta" subTitle="Informe seus dados de acesso" />
          <AppInputController
            leftIcon="mail-outline"
            label="E-MAIL"
            control={control}
            placeholder="mail@example.com"
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

          <AppButton className="mt-6" leftIcon="arrow-forward" variant="primary" onPress={onSubmit}>
            Entrar
          </AppButton>
        </View>

        <View className="flex-2 pb-16">
          <Text className="text-basemb-6 text-gray-300">Ainda não tem uma conta?</Text>
          <AppButton
            leftIcon="arrow-forward"
            variant="secondary"
            onPress={() => router.push('/register')}
          >
            Registro
          </AppButton>
        </View>
      </View>
    </KeyBoardContainer>
  );
}
