import React, { useRef, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Button, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Feather, MaterialIcons, Ionicons, AntDesign, FontAwesome, Octicons, Fontisto, Foundation } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Link, useRouter } from 'expo-router';
import userPhoto from './../../assets/images/download.png';
import recommendationPhoto from './../../assets/images/recommendation.png';
import ghana from './../../assets/images/Ghana.png';
import nigeria from './../../assets/images/Nigeria.png';


export default function Index() {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const refRBSheet = useRef();
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const closeRBSheet = () => {
    refRBSheet.current.close();
  };

  const router = useRouter();

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  return (
    <ScrollView className="bg-white">
      <LinearGradient
        colors={['#8B52FF', '#fff', '#fff', '#fff']}
        start={{ x: 0.3, y: 0.3 }}
        end={{ x: 0.5, y: 1.5 }}
      >
        <View>
          <View className="px-6 mt-[10%]">
            <View className="flex-1 items-center justify-center flex-row gap-3">
              <Link href="./settings">
                <Image
                  source={userPhoto}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 99,
                  }}
                />
              </Link>

              <View className="flex flex-row items-center justify-between w-[86%]">
                <View className="pt-auto">
                  <Text className="text-purple-300 text-lg mb-3 font-normal">Welcome</Text>
                  <Text className="text-purple-100 text-xl mb-3 font-semibold">Martins Chidume</Text>
                </View>
                <View className="flex flex-row items-center ml-auto space-x-6">
                  <TouchableOpacity>
                    <MaterialIcons name="qr-code-scanner" size={24} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Feather name="bell" size={24} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View className="flex flex-row space-x-3 mt-2 mb-[5%]">
              <TouchableOpacity className="rounded-full bg-white h-10 w-24 flex items-center justify-center">
                <Text className="text-black text-base font-medium">ACCOUNT</Text>
              </TouchableOpacity>
              <TouchableOpacity className="rounded-full h-10 w-24 flex items-center justify-center">
                <Text className="text-white text-base font-semibold">Rate</Text>
              </TouchableOpacity>
              <TouchableOpacity className="rounded-full h-10 w-24 flex items-center justify-center">
                <Text className="text-white text-base font-semibold">Discover</Text>
              </TouchableOpacity>
            </View>

            <View className="px-4 py-4 bg-slate-100 rounded-lg">
              <View className="flex flex-row mb-4 items-center">
                <Text className="text-sm pr-4">Available asset balance</Text>
                <TouchableOpacity onPress={toggleBalanceVisibility}>
                  {isBalanceVisible ? (
                    <Ionicons name="eye-outline" size={24} color="black" />
                  ) : (
                    <Feather name="eye-off" size={24} color="black" />
                  )}
                </TouchableOpacity>
              </View>

              <View className="flex flex-row items-center">
                <Text className="text-lg font-bold flex-shrink">
                  {isBalanceVisible ? '900,000' : '********'}
                  <Text className="font-normal"> USD</Text>
                </Text>
                <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                  <MaterialIcons name="expand-circle-down" size={24} color="black" style={{ marginLeft: 8 }} />
                </TouchableOpacity>
                <TouchableOpacity className="ml-auto rounded-full bg-purple-500 h-10 w-24 flex items-center justify-center">
                  <Text className="text-white text-base font-medium">Add money</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="px-4 py-4 bg-slate-100 rounded-lg my-[2%]">
              <View className="flex flex-row items-center">
                <TouchableOpacity className="rounded-full flex items-center justify-center">
                  <FontAwesome6 name="sack-dollar" size={20} color="purple" />
                  <Text className="text-black text-base font-medium">Withdraw</Text>
                </TouchableOpacity>

                <TouchableOpacity className="ml-auto rounded-full flex items-center justify-center">
                  <AntDesign name="swap" size={20} color="orange" />
                  <Text className="text-black text-base font-medium">Swap</Text>
                </TouchableOpacity>

                <TouchableOpacity className="ml-auto rounded-full flex items-center justify-center">
                  <FontAwesome name="credit-card" size={20} color="green" />
                  <Text className="text-black text-base font-medium">Card</Text>
                </TouchableOpacity>

                <TouchableOpacity className="ml-auto rounded-full flex items-center justify-center"onPress={() => router.push('../../Referral')}
                >
                  <Octicons name="gift" size={20} color="purple" />
                  <Text className="text-black text-base font-medium">Referral</Text>
                </TouchableOpacity>
              </View>
            </View>

            <Swiper
              style={{ height: 200 }}
              showsButtons={false}
              autoplay={true}
              autoplayTimeout={3}
            >
              <View className="px-4 py-4 bg-green-200 rounded-lg my-[5%]">
                <View className="flex flex-row items-center">
                  <View className="flex-1">
                    <Text className="text-lg font-extrabold">Personalized recommendation</Text>
                    <Text className="text-green-500 text-base font-medium">You have made multiple transfers</Text>
                    <Text className="text-green-500 text-base font-medium">to the same account today. <Text className="font-extrabold underline">Review</Text></Text>
                  </View>
                  <Image
                    source={recommendationPhoto}
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: 99,
                      marginLeft: 10,
                    }}
                  />
                </View>
              </View>
              <View className="px-4 py-4 bg-green-200 rounded-lg my-[5%]">
                <View className="flex flex-row items-center">
                  <View className="flex-1">
                    <Text className="text-lg font-extrabold">Special Offer</Text>
                    <Text className="text-green-500 text-base font-medium">Get 10% cashback on your next</Text>
                    <Text className="text-green-500 text-base font-medium">transfer. <Text className="font-extrabold underline">Claim now</Text></Text>
                  </View>
                  <Image
                    source={recommendationPhoto}
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: 99,
                      marginLeft: 10,
                    }}
                  />
                </View>
              </View>
              <View className="px-4 py-4 bg-green-200 rounded-lg my-[5%]">
                <View className="flex flex-row items-center">
                  <View className="flex-1">
                    <Text className="text-lg font-extrabold">New Feature</Text>
                    <Text className="text-green-500 text-base font-medium">Try our new budgeting tool</Text>
                    <Text className="text-green-500 text-base font-medium">to manage your expenses better. <Text className="font-extrabold underline">Explore</Text></Text>
                  </View>
                  <Image
                    source={recommendationPhoto}
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: 99,
                      marginLeft: 10,
                    }}
                  />
                </View>
              </View>
            </Swiper>

            {/* Bills payment section */}
            <View className="px-4 py-4 bg-slate-100 rounded-lg my-[4%] gap-4 mb-[10%] mt-5">
              <View className="flex flex-row items-center">
                <Text className="font-medium text-xl text-slate-600">Bills payment</Text>
                <View className="ml-auto flex flex-row items-center">
                  <Text className="font-medium text-xl">Edit </Text>
                  <Feather name="edit-2" size={15} color="black" />
                </View>
              </View>
              <View
                style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: '90%', marginTop: 8 }}
              />

              <View className="flex flex-row items-center">
                {/* Internet payment button */}
                <TouchableOpacity className="rounded-full flex items-center justify-center">
                  <Fontisto name="world-o" size={24} color="purple" />
                  <Text className="text-black text-base font-medium">Internet</Text>
                </TouchableOpacity>

                {/* Tuition payment button */}
                <TouchableOpacity className="ml-auto rounded-full flex items-center justify-center">
                  <Ionicons name="school-outline" size={24} color="orange" />
                  <Text className="text-black text-base font-medium">Tuition</Text>
                </TouchableOpacity>

                {/* Electricity payment button */}
                <TouchableOpacity className="ml-auto rounded-full flex items-center justify-center">
                  <FontAwesome6 name="bolt-lightning" size={24} color="green" />
                  <Text className="text-black text-base font-medium">Electricity</Text>
                </TouchableOpacity>

                {/* More payments button */}
                <TouchableOpacity className="ml-auto rounded-full flex items-center justify-center"
                onPress={() => router.push('../../BillPayment')}
                >
                  <Foundation name="indent-more" size={24} color="purple" />
                  <Text className="text-black text-base font-medium">More</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Transactions section */}
            <View className="px-4 py-4 bg-slate-100 rounded-lg my-[4%] mt-5 gap-4">
              <View className="flex flex-row items-center">
                <Text className="font-medium text-xl text-slate-600">Transactions</Text>
                <View className="ml-auto flex flex-row items-center">
                  <Text className="font-medium text-xl">View all </Text>
                  <AntDesign name="right" size={24} color="black" />
                </View>
              </View>
              <View
                style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: '90%', marginTop: 8 }}
              />

              <View>
                {/* Individual transaction items */}
                <View className="flex flex-row items-center mb-4">
                  <View className="flex flex-row">
                    <Image
                      source={ghana}
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 99, // Circular image
                      }}
                    />
                    <View
                      style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', width: '80%' }}
                      className="ml-3"
                    >
                      <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>GHN-NGN</Text>
                        <Text>
                          6:00 am <Text style={{ fontWeight: 'bold', fontSize: 24 }}>.</Text> 12 July 2014
                        </Text>
                      </View>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                          500 <Text style={{ fontWeight: '100' }} className="font-semibold">USD</Text>
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>

                <View className="flex flex-row items-center mb-4">
                  <View className="flex flex-row">
                    <Image
                      source={nigeria}
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 99, // Circular image
                      }}
                    />
                    <View
                      style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', width: '80%' }}
                      className="ml-3"
                    >
                      <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>NGN-GHN</Text>
                        <Text>
                          8:27 am <Text style={{ fontWeight: 'bold', fontSize: 24 }}>.</Text> 14 July 2014
                        </Text>
                      </View>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                          470 <Text style={{ fontWeight: '100' }} className="font-semibold">USD</Text>
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>

            </View>

          </View>
        </View>
      </LinearGradient>


      <RBSheet
        ref={refRBSheet}
        height={500}
        openDuration={250}
        customStyles={{
          container: {
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            paddingHorizontal: 30,
            paddingVertical: 40,
            backgroundColor:"white"
          },
        }}
      >
        <View className="flex flex-row items-center">
        <TouchableOpacity onPress={closeRBSheet}>
          <AntDesign name="arrowleft" size={24} color="purple" />
        </TouchableOpacity>
          <Text className="font-bold text-xl text-slate-600 pl-5">Available balance</Text>
        </View>
        <View
          style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: '100%', marginTop: '5%', marginBottom: '5%' }}
          className="flex"
        />
        <View>
          
      <TouchableOpacity
      className="h-20"
        style={[
          styles.container,
          selectedCurrency === 'USD' && styles.selectedContainer
        ]}
        onPress={() => setSelectedCurrency('USD')}
      >
        <Text className="font-bold text-2xl" style={styles.text}>
          900,000 <Text style={styles.currency}>USD</Text>
        </Text>
        <AntDesign
          name="checkcircle"
          size={24}
          color={selectedCurrency === 'USD' ? 'purple' : 'white'}
          style={styles.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity
      className="h-20"
        style={[
          styles.container,
          selectedCurrency === 'TRY' && styles.selectedContainer
        ]}
        onPress={() => setSelectedCurrency('TRY')}
      >
        <Text className="font-bold text-2xl" style={styles.text}>
          900,000 <Text style={styles.currency}>TRY</Text>
        </Text>
        <AntDesign
          name="checkcircle"
          size={24}
          color={selectedCurrency === 'TRY' ? 'purple' : 'white'}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
      </RBSheet>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  selectedContainer: {
    borderColor: 'purple',
  },
  text: {
    flex: 1,
    fontSize: 26,
  },
  currency: {
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 10,
  },
});