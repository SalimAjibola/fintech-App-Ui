import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import userPhoto from './../../assets/images/download.png';
import { Feather, MaterialIcons, Ionicons, AntDesign, FontAwesome, Octicons, SimpleLineIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Link, router } from 'expo-router'; // Import useRouter hook

/**
 * The `Settings` component provides a user interface for the settings screen of the application.
 * It displays user information, account balance, and various settings options.
 *
 * @component
 */
export default function Settings() {
  // State to manage the visibility of the balance
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  /**
   * Toggles the visibility of the account balance between visible and hidden.
   */
  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  /**
   * Navigates to the Referral screen.
   */

  return (
    <LinearGradient
      colors={['#8B52FF', '#fff']} // Gradient colors for background
      start={{ x: 2.7, y: 0.9 }} // Gradient start position
      end={{ x: 1.3, y: 1.5 }} // Gradient end position
    >
      <ScrollView className="h-full">
        <View className="px-6 mt-[10%]">
          {/* User profile section */}
          <View className="flex-1 items-center justify-center flex-row gap-3">
            {/* User profile photo */}
            <Link href="./settings">
              <Image
                source={userPhoto}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 99, // Makes the image circular
                }}
              />
            </Link>

            <View className="flex flex-row items-center justify-between w-[86%]">
              <View className="pt-auto">
                <Text className="text-black text-xl mb-3 font-semibold">Martins Chidume</Text>
                <TouchableOpacity className="rounded-full bg-white h-10 w-28 flex items-center justify-center">
                  <Text className="text-red-600 text-base font-bold">Not verified</Text>
                </TouchableOpacity>
              </View>
              <View className="flex flex-row items-center ml-auto space-x-6">
                {/* QR code scanner button */}
                <TouchableOpacity>
                  <MaterialIcons name="qr-code-scanner" size={24} color="black" />
                </TouchableOpacity>
                {/* Notifications button */}
                <TouchableOpacity>
                  <Feather name="bell" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Account balance section */}
          <View className="px-4 py-4 bg-transparent rounded-lg">
            <View className="flex flex-row mb-2 items-center">
              <Text className="text-sm pr-1">Available asset balance</Text>
              {/* Button to toggle balance visibility */}
              <TouchableOpacity onPress={toggleBalanceVisibility}>
                {isBalanceVisible ? (
                  <Ionicons name="eye-outline" size={24} color="black" />
                ) : (
                  <Feather name="eye-off" size={24} color="black" />
                )}
              </TouchableOpacity>
            </View>

            <View className="flex flex-row items-center">
              <Text className="text-xl font-bold flex-shrink gap-6 ml-2">
                {isBalanceVisible ? '900,000' : '********'}
                <Text className="font-normal"> USD</Text>
              </Text>
              {/* Total Referral earnings */}
              <TouchableOpacity className="ml-auto rounded-full bg-transparent h-10 w-32 flex items-center justify-center">
                <Text className="text-black text-base font-normal">Referral earnings</Text>
                <Text className="text-black text-base font-bold">50,000 <Text className="font-normal">USD</Text></Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Settings options */}
          <View className="bg-white py-5 px-5 rounded-lg">
            {/* Security settings */}
            <TouchableOpacity>
            <View className="flex flex-row items-center pb-4">
              <MaterialIcons name="security" size={24} color="purple" />
              <Text className="ml-4 flex-1 text-lg">Security</Text>
              <AntDesign name="right" size={24} color="#C0C2C9" />
            </View>
            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: '90%', marginBottom: 12 }} />
            </TouchableOpacity>

            {/* Notification settings */}
            <TouchableOpacity>
            <View className="flex flex-row items-center pb-4">
              <Feather name="bell" size={24} color="purple" />
              <Text className="ml-4 flex-1 text-lg">Notification</Text>
              <AntDesign name="right" size={24} color="#C0C2C9" />
            </View>
            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: '90%', marginBottom: 12 }} />
            </TouchableOpacity>

            {/* Report scam */}
            <TouchableOpacity>
            <View className="flex flex-row items-center pb-4">
              <MaterialIcons name="report" size={24} color="purple" />
              <Text className="ml-4 flex-1 text-lg">Report scam</Text>
              <AntDesign name="right" size={24} color="#C0C2C9" />
            </View>
            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: '90%', marginBottom: 12 }} />
            </TouchableOpacity>

            {/* Referral program */}
            <TouchableOpacity onPress={() => router.push('../../Referral')}>
            <View className="flex flex-row items-center pb-4">
              <Octicons name="gift" size={24} color="purple" />
              <Text className="ml-4 flex-1 text-lg">Referral</Text>
              <AntDesign name="right" size={24} color="#C0C2C9" />
            </View>
            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: '90%', marginBottom: 12 }} />
            </TouchableOpacity>

            {/* Rate the app */}
            <TouchableOpacity>
            <View className="flex flex-row items-center pb-4">
              <AntDesign name="staro" size={24} color="purple" />
              <Text className="ml-4 flex-1 text-lg">Rate SFx</Text>
              <AntDesign name="right" size={24} color="#C0C2C9" />
            </View>
            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: '90%', marginBottom: 12 }} />
            </TouchableOpacity>

            {/* Help and support */}
            <TouchableOpacity>
            <View className="flex flex-row items-center pb-4">
              <Ionicons name="help-circle-outline" size={24} color="purple" />
              <Text className="ml-4 flex-1 text-lg">Help & support</Text>
              <AntDesign name="right" size={24} color="#C0C2C9" />
            </View>
            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: '90%', marginBottom: 12 }} />
            </TouchableOpacity>

            {/* About us */}
            <TouchableOpacity>
            <View className="flex flex-row items-center pb-4">
              <FontAwesome name="group" size={24} color="purple" />
              <Text className="ml-4 flex-1 text-lg">About us</Text>
              <AntDesign name="right" size={24} color="#C0C2C9" />
            </View>
            </TouchableOpacity>
          </View>

          {/* Logout button */}
          <TouchableOpacity>
          <View className="flex items-center mt-6">
            <TouchableOpacity
              className="flex flex-row items-center justify-center w-80 h-16 bg-white rounded-lg shadow-2xl shadow-purple-500/50"
              activeOpacity={0.8}
            >
              <SimpleLineIcons name="login" size={24} color="grey" style={{ marginRight: 8 }} />
              <Text className="text-slate-900 text-lg font-semibold">Logout</Text>
            </TouchableOpacity>
          </View>
          </TouchableOpacity>

          {/* Version information */}
          <View className="items-center top-5">
            <Text className="text-slate-500">Version:2.0</Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
