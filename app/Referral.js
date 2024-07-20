import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, FlatList } from 'react-native';
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import RBSheet from 'react-native-raw-bottom-sheet';
import Group from '../assets/images/Group.png';

// Dummy data for social media options
const socialMediaOptions = [
    { name: 'WhatsApp', icon: 'whatsapp', color: '#25D366' },
    { name: 'Instagram', icon: 'instagram', color: '#C13584' },
    { name: 'Snapchat', icon: 'snapchat', color: '#FFFC00' },
    { name: 'Facebook', icon: 'facebook', color: '#4267B2' },
    { name: 'Twitter', icon: 'twitter', color: '#1DA1F2' },
    { name: 'LinkedIn', icon: 'linkedin', color: '#0e76a8' },
    { name: 'Telegram', icon: 'telegram', color: '#0088cc' },
    { name: 'Email', icon: 'envelope', color: '#D44638' }
];

export default function Referral() {
    const [isBalanceVisible, setIsBalanceVisible] = useState(true);
    const refRBSheet = useRef();

    const toggleBalanceVisibility = () => {
        setIsBalanceVisible(!isBalanceVisible);
    };

    const openShareSheet = () => {
        refRBSheet.current.open();
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.optionButton}>
            <FontAwesome name={item.icon} size={24} color={item.color} />
            <Text style={styles.optionText}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <ScrollView
            style={{ backgroundColor: '#E9DEFF', height: '100%' }}
            contentContainerStyle={{ paddingVertical: 20, paddingHorizontal: 20, alignItems: 'center' }}
        >
            <Text className="font-extrabold text-4xl mb-2">Refer friends!</Text>
            <Text className="text-slate-800 font-light text-base text-center">
                Use your referral code to invite your friends
            </Text>
            <Text className="text-slate-800 font-light text-base text-center">
                and earn once they join, verify and fund
            </Text>
            <Text className="text-slate-800 font-light text-base text-center">
                their account
            </Text>
            <Image
                source={Group}
                style={{
                    width: 150,
                    height: 150,
                }}
                resizeMode="contain"
            />
            <Text className="text-slate-800 text-base font-semibold text-center mt-5">
                You will receive your reward once your friends:
            </Text>

            <View className="flex flex-row space-x-10 mt-5">
                <View className="flex flex-col items-center">
                    <View className="bg-green-400 rounded-full h-12 w-12 items-center justify-center mb-2">
                        <Text className="text-black font-bold text-lg">1</Text>
                    </View>
                    <View className="flex items-center">
                        <Text className="text-center text-base font-semibold">Sign up and</Text>
                        <Text className="text-center text-base font-semibold">verify their</Text>
                        <Text className="text-center text-base font-semibold">account</Text>
                    </View>
                </View>

                <View className="flex flex-col items-center">
                    <View className="bg-green-400 rounded-full h-12 w-12 items-center justify-center mb-2">
                        <Text className="text-black font-bold text-lg">2</Text>
                    </View>
                    <View className="flex items-center">
                        <Text className="text-center text-base font-semibold">Fund their</Text>
                        <Text className="text-center text-base font-semibold">wallet with</Text>
                        <Text className="text-center text-base font-semibold">₦2,000 or</Text>
                        <Text className="text-center text-base font-semibold">more</Text>
                    </View>
                </View>

                <View className="flex flex-col items-center">
                    <View className="bg-green-400 rounded-full h-12 w-12 items-center justify-center mb-2">
                        <Text className="text-black font-bold text-lg">3</Text>
                    </View>
                    <View className="flex items-center">
                        <Text className="text-center text-base font-semibold">Perform a</Text>
                        <Text className="text-center text-base font-semibold">transaction</Text>
                        <Text className="text-center text-base font-semibold">within 24hrs</Text>
                    </View>
                </View>
            </View>

            <View className="px-4 py-4 bg-purple-300 rounded-lg mt-4">
                <View className="flex flex-row mb-4 items-center">
                    <Text className="text-lg font-semibold pr-4">Withdrawable earning</Text>
                    <TouchableOpacity onPress={toggleBalanceVisibility}>
                        {isBalanceVisible ? (
                            <Ionicons name="eye-outline" size={24} color="black" />
                        ) : (
                            <Feather name="eye-off" size={24} color="black" />
                        )}
                    </TouchableOpacity>
                </View>

                <View className="flex flex-row items-center justify-between">
                    <Text className="text-2xl font-bold">
                        {isBalanceVisible ? '50,000' : '********'}
                        <Text className="font-normal"> USD</Text>
                    </Text>

                    <TouchableOpacity className="ml-4 rounded-full bg-purple-500 h-10 w-32 flex items-center justify-center">
                        <Text className="text-white text-lg font-medium">Redeem</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className="flex flex-row justify-between space-x-4 mt-3">
                <View className="flex-1 bg-purple-200 p-4 rounded-lg items-center">
                    <Text className="text-lg font-semibold text-center">Total earnings</Text>
                    <Text className="text-lg font-extrabold text-center">500 USD</Text>
                </View>
                <View className="flex-1 bg-purple-200 p-4 rounded-lg items-center">
                    <Text className="text-lg font-semibold text-center">Total referral</Text>
                    <Text className="text-lg font-extrabold text-center">2</Text>
                </View>
            </View>
            <View
                style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: '90%', marginTop: 8 }}
            />
            <View className="flex flex-row justify-between space-x-4 mt-3">
                <View className="flex-1 bg-purple-200 p-4 rounded-lg border-dashed border-2 border-black">
                    <Text className="text-base font-semibold text-center mb-2">Your referral code</Text>
                    <View className="flex flex-row justify-between items-center">
                        <Text className="text-base font-extrabold">tFh273</Text>
                        <FontAwesome name="files-o" size={24} color="black" />
                    </View>
                </View>
                <TouchableOpacity className="flex-1 flex-row h-16 bg-purple-800 p-1 px-3 rounded-lg items-center justify-between" onPress={openShareSheet}>
                    <FontAwesome name="share-alt" size={24} color="white" />
                    <Text className="text-lg font-semibold text-center text-white">Share</Text>
                </TouchableOpacity>
            </View>

            <RBSheet
                ref={refRBSheet}
                height={400}
                openDuration={250}
                customStyles={{
                    container: styles.bottomSheetContainer,
                }}
            >
                <Text style={styles.sheetTitle}>Share to:</Text>
                <FlatList
                    data={socialMediaOptions}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.name}
                    contentContainerStyle={styles.socialMediaList}
                />
            </RBSheet>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    bottomSheetContainer: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        backgroundColor: '#fff',
    },
    sheetTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    socialMediaList: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    optionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 5,
        backgroundColor: '#F0F0F0',
    },
    optionText: {
        fontSize: 16,
        marginLeft: 10,
        fontWeight: 'bold',
    },
});
