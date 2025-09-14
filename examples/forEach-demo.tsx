/**
 * Practical forEach Examples with Cyclone Styles
 * Demonstrates how to use forEach effectively in React Native components
 */

import React, { useState } from "react";
import { View, Text, ScrollView, Pressable, TextInput } from "react-native";
import { cs } from "cyclone-styles";

const ForEachExamplesDemo = () => {
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());
  const [formData, setFormData] = useState<Record<string, string>>({});

  // Example 1: Creating a grid of colored boxes using forEach
  const createColorGrid = () => {
    const colors = [
      "red",
      "green",
      "blue",
      "yellow",
      "purple",
      "orange",
      "pink",
      "cyan",
      "lime",
      "indigo",
    ];
    const colorBoxes: JSX.Element[] = [];

    colors.forEach((color, index) => {
      const isSelected = selectedItems.has(index);

      colorBoxes.push(
        <Pressable
          key={index}
          style={cs(
            `w-16 h-16 m-1 rounded-lg items-center justify-center ${
              isSelected ? "border-4 border-gray-800" : "border border-gray-300"
            }`
          )}
          onPress={() => {
            const newSelected = new Set(selectedItems);
            if (newSelected.has(index)) {
              newSelected.delete(index);
            } else {
              newSelected.add(index);
            }
            setSelectedItems(newSelected);
          }}
        >
          <View style={cs(`w-12 h-12 rounded`)} className={`bg-${color}-500`} />
          <Text style={cs("text-xs mt-1")}>{index + 1}</Text>
        </Pressable>
      );
    });

    return colorBoxes;
  };

  // Example 2: Processing form fields with forEach
  const formFields = [
    { name: "firstName", label: "First Name", required: true },
    { name: "lastName", label: "Last Name", required: true },
    { name: "email", label: "Email", required: true },
    { name: "phone", label: "Phone", required: false },
    { name: "address", label: "Address", required: false },
  ];

  const validateForm = () => {
    const errors: string[] = [];

    formFields.forEach((field) => {
      const value = formData[field.name] || "";
      if (field.required && !value.trim()) {
        errors.push(`${field.label} is required`);
      }
    });

    return errors;
  };

  // Example 3: Creating navigation items with forEach
  const createNavigation = () => {
    const navItems = [
      { label: "Home", icon: "🏠", active: true },
      { label: "Profile", icon: "👤", active: false },
      { label: "Settings", icon: "⚙️", active: false },
      { label: "Messages", icon: "💬", active: false },
      { label: "Logout", icon: "🚪", active: false },
    ];

    const navigationElements: JSX.Element[] = [];

    navItems.forEach((item, index) => {
      navigationElements.push(
        <Pressable
          key={index}
          style={cs(
            `flex-row items-center p-3 mx-2 my-1 rounded-lg ${
              item.active ? "bg-blue-500" : "bg-gray-100 hover:bg-gray-200"
            }`
          )}
        >
          <Text style={cs("text-lg mr-3")}>{item.icon}</Text>
          <Text
            style={cs(
              `font-medium ${item.active ? "text-white" : "text-gray-700"}`
            )}
          >
            {item.label}
          </Text>
        </Pressable>
      );
    });

    return navigationElements;
  };

  // Example 4: Processing data with statistics
  const processStatistics = () => {
    const data = [
      { category: "Sales", value: 12500, trend: "up" },
      { category: "Users", value: 8900, trend: "up" },
      { category: "Revenue", value: 45000, trend: "down" },
      { category: "Orders", value: 2340, trend: "up" },
    ];

    const statCards: JSX.Element[] = [];
    let totalValue = 0;

    // Use forEach to calculate total and create cards
    data.forEach((stat, index) => {
      totalValue += stat.value;

      statCards.push(
        <View key={index} style={cs("bg-white p-4 m-2 rounded-lg shadow-sm")}>
          <Text style={cs("text-sm text-gray-600 mb-1")}>{stat.category}</Text>
          <Text style={cs("text-2xl font-bold text-gray-900 mb-2")}>
            {stat.value.toLocaleString()}
          </Text>
          <View style={cs("flex-row items-center")}>
            <Text style={cs("text-lg mr-1")}>
              {stat.trend === "up" ? "📈" : "📉"}
            </Text>
            <Text
              style={cs(
                `text-sm font-medium ${
                  stat.trend === "up" ? "text-green-600" : "text-red-600"
                }`
              )}
            >
              {stat.trend === "up" ? "Trending up" : "Trending down"}
            </Text>
          </View>
        </View>
      );
    });

    return { statCards, totalValue };
  };

  const { statCards, totalValue } = processStatistics();
  const errors = validateForm();

  return (
    <ScrollView style={cs("flex-1 bg-gray-50")}>
      {/* Header */}
      <View style={cs("p-4 bg-white border-b border-gray-200")}>
        <Text style={cs("text-2xl font-bold text-gray-900 mb-2")}>
          forEach() Function Examples
        </Text>
        <Text style={cs("text-gray-600")}>
          Practical demonstrations of forEach in React Native
        </Text>
      </View>

      {/* Example 1: Color Grid */}
      <View style={cs("p-4 bg-white m-4 rounded-lg shadow-sm")}>
        <Text style={cs("text-lg font-bold text-gray-900 mb-3")}>
          1. Interactive Color Grid
        </Text>
        <Text style={cs("text-sm text-gray-600 mb-4")}>
          forEach creates an array of Pressable components. Tap boxes to select
          them.
        </Text>

        <View style={cs("flex-row flex-wrap justify-center")}>
          {createColorGrid()}
        </View>

        <Text style={cs("text-sm text-center text-gray-500 mt-2")}>
          Selected: {selectedItems.size} items
        </Text>
      </View>

      {/* Example 2: Dynamic Form */}
      <View style={cs("p-4 bg-white m-4 rounded-lg shadow-sm")}>
        <Text style={cs("text-lg font-bold text-gray-900 mb-3")}>
          2. Dynamic Form Generation
        </Text>
        <Text style={cs("text-sm text-gray-600 mb-4")}>
          forEach processes field configuration to create form inputs and
          validation.
        </Text>

        {formFields.map((field, index) => (
          <View key={index} style={cs("mb-4")}>
            <Text style={cs("text-sm font-medium text-gray-700 mb-1")}>
              {field.label}{" "}
              {field.required && <Text style={cs("text-red-500")}>*</Text>}
            </Text>
            <TextInput
              style={cs("border border-gray-300 rounded-md p-3 bg-white")}
              placeholder={`Enter ${field.label.toLowerCase()}`}
              value={formData[field.name] || ""}
              onChangeText={(text) =>
                setFormData({ ...formData, [field.name]: text })
              }
            />
          </View>
        ))}

        {errors.length > 0 && (
          <View style={cs("bg-red-50 border border-red-200 rounded-md p-3")}>
            <Text style={cs("text-red-800 font-medium mb-2")}>
              Validation Errors:
            </Text>
            {errors.map((error, index) => (
              <Text key={index} style={cs("text-red-600 text-sm")}>
                • {error}
              </Text>
            ))}
          </View>
        )}
      </View>

      {/* Example 3: Navigation Menu */}
      <View style={cs("p-4 bg-white m-4 rounded-lg shadow-sm")}>
        <Text style={cs("text-lg font-bold text-gray-900 mb-3")}>
          3. Navigation Menu
        </Text>
        <Text style={cs("text-sm text-gray-600 mb-4")}>
          forEach builds navigation items with different states and styling.
        </Text>

        <View>{createNavigation()}</View>
      </View>

      {/* Example 4: Statistics Dashboard */}
      <View style={cs("p-4 bg-white m-4 rounded-lg shadow-sm")}>
        <Text style={cs("text-lg font-bold text-gray-900 mb-3")}>
          4. Statistics Processing
        </Text>
        <Text style={cs("text-sm text-gray-600 mb-4")}>
          forEach processes data to create stat cards and calculate totals.
        </Text>

        <View style={cs("bg-blue-50 p-4 rounded-lg mb-4")}>
          <Text style={cs("text-sm text-blue-600")}>Total Value</Text>
          <Text style={cs("text-3xl font-bold text-blue-900")}>
            {totalValue.toLocaleString()}
          </Text>
        </View>

        <View style={cs("flex-row flex-wrap")}>{statCards}</View>
      </View>

      {/* Code Examples */}
      <View style={cs("p-4 bg-gray-900 m-4 rounded-lg")}>
        <Text style={cs("text-lg font-bold text-white mb-3")}>
          💻 Key forEach Patterns Used
        </Text>

        <View style={cs("space-y-3")}>
          <View>
            <Text style={cs("text-green-400 font-mono text-sm")}>
              // 1. Building JSX elements
            </Text>
            <Text style={cs("text-gray-300 font-mono text-xs")}>
              items.forEach((item, index) =&gt; {"{"}
            </Text>
            <Text style={cs("text-gray-300 font-mono text-xs ml-4")}>
              elements.push(&lt;Component key={"{index}"} /&gt;);
            </Text>
            <Text style={cs("text-gray-300 font-mono text-xs")}>{"}"});</Text>
          </View>

          <View>
            <Text style={cs("text-green-400 font-mono text-sm")}>
              // 2. Form validation
            </Text>
            <Text style={cs("text-gray-300 font-mono text-xs")}>
              fields.forEach(field =&gt; {"{"}
            </Text>
            <Text style={cs("text-gray-300 font-mono text-xs ml-4")}>
              if (field.required && !value) errors.push(...);
            </Text>
            <Text style={cs("text-gray-300 font-mono text-xs")}>{"}"});</Text>
          </View>

          <View>
            <Text style={cs("text-green-400 font-mono text-sm")}>
              // 3. Data processing
            </Text>
            <Text style={cs("text-gray-300 font-mono text-xs")}>
              data.forEach(item =&gt; {"{"}
            </Text>
            <Text style={cs("text-gray-300 font-mono text-xs ml-4")}>
              total += item.value;
            </Text>
            <Text style={cs("text-gray-300 font-mono text-xs ml-4")}>
              processedItems.push(transform(item));
            </Text>
            <Text style={cs("text-gray-300 font-mono text-xs")}>{"}"});</Text>
          </View>
        </View>
      </View>

      {/* Best Practices */}
      <View style={cs("p-4 bg-white m-4 rounded-lg shadow-sm")}>
        <Text style={cs("text-lg font-bold text-gray-900 mb-3")}>
          ✅ forEach Best Practices
        </Text>

        <View style={cs("space-y-2")}>
          <Text style={cs("text-sm text-gray-700")}>
            • Use forEach for side effects (building arrays, calculations)
          </Text>
          <Text style={cs("text-sm text-gray-700")}>
            • Prefer map() when transforming data for rendering
          </Text>
          <Text style={cs("text-sm text-gray-700")}>
            • Use descriptive variable names in callbacks
          </Text>
          <Text style={cs("text-sm text-gray-700")}>
            • Remember: forEach always returns undefined
          </Text>
          <Text style={cs("text-sm text-gray-700")}>
            • Use index parameter when you need element position
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ForEachExamplesDemo;
