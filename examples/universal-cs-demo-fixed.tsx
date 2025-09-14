// Test cs() function with Text and Image components without specifying component type
import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { cs } from "cyclone-styles";

export default function UniversalCsDemo() {
  return (
    <ScrollView style={cs("flex-1 bg-gray-100 p-4")}>
      <Text style={cs("text-2xl font-bold mb-6 text-center text-blue-600")}>
        Universal cs() Function Demo ✨
      </Text>

      <View style={cs("bg-green-100 p-4 rounded-lg mb-6")}>
        <Text style={cs("text-green-800 font-semibold mb-2")}>🎉 Success!</Text>
        <Text style={cs("text-green-700")}>
          The cs() function now works universally with View, Text, and Image
          components without needing to specify the component type parameter!
        </Text>
      </View>

      {/* Text Components */}
      <View style={cs("mb-8")}>
        <Text style={cs("text-lg font-semibold mb-4 text-green-600")}>
          ✅ Text Components (no component parameter needed):
        </Text>

        <Text style={cs("text-xs text-gray-500 mb-2")}>
          Extra small text (text-xs)
        </Text>

        <Text style={cs("text-sm text-gray-600 mb-2")}>
          Small text (text-sm)
        </Text>

        <Text style={cs("text-base text-gray-700 mb-2")}>
          Base text (text-base)
        </Text>

        <Text style={cs("text-lg text-gray-800 mb-2")}>
          Large text (text-lg)
        </Text>

        <Text style={cs("text-xl font-bold text-blue-600 mb-2")}>
          Extra large bold text (text-xl font-bold)
        </Text>

        <Text style={cs("text-center text-red-500 font-semibold mb-2")}>
          Centered red semibold text
        </Text>

        <Text style={cs("text-right text-green-500 italic mb-2")}>
          Right-aligned green italic text
        </Text>

        <Text style={cs("uppercase text-purple-500 tracking-wider mb-2")}>
          Uppercase with letter spacing
        </Text>
      </View>

      {/* Image Components */}
      <View style={cs("mb-8")}>
        <Text style={cs("text-lg font-semibold mb-4 text-green-600")}>
          ✅ Image Components (no component parameter needed):
        </Text>

        <View style={cs("flex-row flex-wrap gap-4 mb-4")}>
          {/* Small square image */}
          <Image
            source={{ uri: "https://picsum.photos/50/50?random=1" }}
            style={cs("w-12 h-12 rounded")}
          />

          {/* Medium square image with border */}
          <Image
            source={{ uri: "https://picsum.photos/60/60?random=2" }}
            style={cs("w-16 h-16 rounded-lg border-2 border-blue-500")}
          />

          {/* Large rounded image */}
          <Image
            source={{ uri: "https://picsum.photos/80/80?random=3" }}
            style={cs("w-20 h-20 rounded-full")}
          />
        </View>

        {/* Full width image */}
        <Image
          source={{ uri: "https://picsum.photos/300/150?random=4" }}
          style={cs("w-full h-32 rounded-lg")}
          resizeMode="cover"
        />
      </View>

      {/* View Components */}
      <View style={cs("mb-8")}>
        <Text style={cs("text-lg font-semibold mb-4 text-green-600")}>
          ✅ View Components (still work perfectly):
        </Text>

        <View style={cs("bg-blue-500 p-4 rounded-lg mb-4")}>
          <Text style={cs("text-white font-bold")}>Blue background view</Text>
        </View>

        <View style={cs("border-2 border-gray-300 p-4 rounded-lg mb-4")}>
          <Text style={cs("text-gray-700")}>Bordered view</Text>
        </View>

        <View style={cs("shadow-lg bg-white p-4 rounded-lg mb-4")}>
          <Text style={cs("text-gray-800")}>View with shadow</Text>
        </View>
      </View>

      {/* Complex mixed layout */}
      <View style={cs("mb-8")}>
        <Text style={cs("text-lg font-semibold mb-4 text-green-600")}>
          ✅ Complex Mixed Layout:
        </Text>

        <View style={cs("bg-white p-4 rounded-xl shadow-md")}>
          <View style={cs("flex-row items-center mb-4")}>
            <Image
              source={{ uri: "https://picsum.photos/40/40?random=7" }}
              style={cs("w-10 h-10 rounded-full mr-3")}
            />
            <View style={cs("flex-1")}>
              <Text style={cs("font-bold text-gray-900")}>John Doe</Text>
              <Text style={cs("text-sm text-gray-500")}>@johndoe</Text>
            </View>
          </View>

          <Text style={cs("text-gray-700 mb-4")}>
            This layout uses cs() with View, Text, and Image components without
            needing to specify component types! 🎉
          </Text>

          <View style={cs("flex-row justify-between")}>
            <View style={cs("flex-row items-center")}>
              <Text style={cs("text-xs text-gray-500 mr-4")}>❤️ 42 likes</Text>
              <Text style={cs("text-xs text-gray-500")}>💬 7 comments</Text>
            </View>
            <Text style={cs("text-xs text-blue-500")}>2 min ago</Text>
          </View>
        </View>
      </View>

      <View style={cs("bg-blue-100 p-4 rounded-lg mb-4")}>
        <Text style={cs("text-blue-800 font-semibold mb-2")}>
          💡 How it works:
        </Text>
        <Text style={cs("text-blue-700 mb-2")}>
          • cs("text-lg font-bold") works with Text components
        </Text>
        <Text style={cs("text-blue-700 mb-2")}>
          • cs("w-20 h-20 rounded") works with Image components
        </Text>
        <Text style={cs("text-blue-700")}>
          • cs("bg-blue-500 p-4") works with View components
        </Text>
      </View>
    </ScrollView>
  );
}
