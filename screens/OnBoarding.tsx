import React from 'react';
import { Text, View, Linking } from 'react-native';
import styles from '../Style';
import Button from '../components/Button'
import GoogleIcon from '../icon/GoogleIcon';
import AppleIcon from '../icon/AppleIcon';
import { useRouter, Link } from 'expo-router';
import TwitterIcon from '../icon/TwitterIcon';

const OnBoarding = () => {
  const router = useRouter()
  return (

    <View style={styles.container}>
      <View>
        <TwitterIcon width={48} height={48} style={styles.twitterLogoOnBoarding}/>
      </View>

      <View style={{ flex: 5, justifyContent: 'center' }}>
        <View>
          <Text style={styles.text}>See what’s {'\n'}happening in the {'\n'}world right now. </Text>
        </View>

        <View>
          <Button
            buttonStyle={styles.button}
            buttonTextStyle={styles.buttonText}
            icon={<GoogleIcon width={30} height={30} />}
            title="Continue with Google"
            onPress={() => alert('Button pressed')}
          />
        </View>

        <View>
          <Button
            buttonStyle={styles.button}
            buttonTextStyle={styles.buttonText}
            title="Continue with Apple"
            icon={<AppleIcon size={30} color={'black'} />}
            onPress={() => alert('Button pressed')}
          />
        </View>

        <View>
          <Text style={styles.orText}> or </Text>
        </View>

        <View>
          <Button
            buttonStyle={styles.buttonCreate}
            styleText={styles.createAccountText}
            title="Create an account"
            onPress={() => alert('Button pressed')}
            buttonTextStyle={false} />
        </View>

        <View style={styles.textLinkContainer}>
          <Text> By signing up you agree to the {''}
            <Text
              style={styles.hyperlinkStyle}
              onPress={() => {
                Linking.openURL('https://twitter.com/en/tos');
              }}>Terms of Service </Text>and{' '}
            <Text
              style={styles.hyperlinkStyle}
              onPress={() => {
                Linking.openURL('https://twitter.com/en/privacy');
              }}>Privacy Policy</Text>,
            including
            <Text
              style={styles.hyperlinkStyle}
              onPress={() => {
                Linking.openURL('https://stripe.com/cookies-policy/legal https://stripe.com/cookies-policy/legal');
              }}> Cookie Use</Text>.
          </Text>
        </View>
      </View>

      <View style={{ flex: .5, ...styles.loginTextContainer }}>
        <Text> Already have an account? </Text>
        <Link href={'/Login'} ><Text style={{ color: 'blue' }}>Log in</Text></Link>
      </View>

    </View>
  )
}

export default OnBoarding