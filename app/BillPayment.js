import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather, MaterialIcons, Ionicons, AntDesign, FontAwesome, Octicons, Fontisto, Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

export default function BillPayment() {
  return (
    <View className="bg-purple-100 h-full py-10 px-10">
      {/* Bills payment section */}
      <View className="px-4 py-4 bg-slate-100 rounded-lg my-[4%] gap-4 mb-[10%]">
           
              <View className="flex flex-row items-center pb-5">
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
                <TouchableOpacity className="ml-auto rounded-full flex items-center justify-center">
                <Ionicons name="water" size={24} color="purple" />
                  <Text className="text-black text-base font-medium">Water</Text>
                </TouchableOpacity>
              </View>

              <View className="flex flex-row">
                {/* Internet payment button */}
                <TouchableOpacity className="rounded-full flex items-center justify-center">
                <MaterialCommunityIcons name="card" size={24} color="purple" />
                  <Text className="text-black text-base font-medium">Airtime</Text>
                </TouchableOpacity>

                {/* Tuition payment button */}
                <TouchableOpacity className="pl-10 rounded-full flex items-center justify-center">
                <FontAwesome name="plane" size={24} color="orange" />
                  <Text className="text-black text-base font-medium">Flight</Text>
                </TouchableOpacity>
              </View>
            </View>

    </View>
  );
}
