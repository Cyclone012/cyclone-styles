/**
 * Direct Style Usage Examples
 * This demonstrates the new global styles system without needing cs() function
 */

import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";

// Method 1: Import specific style functions
import {
  $,
  getLayoutStyles,
  getSpacingStyles,
  getColorStyles,
  getTypographyStyles,
} from "../lib/index";

// Method 2: Import from preset for auto-setup
// import '../lib/preset';

const DirectStylesDemo = () => {
  // Get pre-computed style objects
  const layout = getLayoutStyles();
  const spacing = getSpacingStyles();
  const colors = getColorStyles();
  const typography = getTypographyStyles();

  return (
    <ScrollView style={$.flex1()}>
      {/* Method 1: Using $ shorthand for common styles */}
      <View style={$.flexRow()}>
        <Text style={[$.textLg(), $.fontBold(), $.textBlack()]}>
          Direct Styles Demo
        </Text>
      </View>

      {/* Method 2: Using individual style objects */}
      <View style={[layout.flexCol, spacing.p4, colors.bgWhite]}>
        <Text style={[typography.textBase, colors.textGray700]}>
          This text uses direct style objects without cs() function
        </Text>
      </View>

      {/* Method 3: Combining direct styles with custom styles */}
      <Pressable
        style={[
          $.rounded(),
          $.p4(),
          $.bgBlue(),
          { marginTop: 16 }, // Custom style mixed in
        ]}
      >
        <Text style={[$.textWhite(), $.textCenter(), $.fontBold()]}>
          Direct Style Button
        </Text>
      </Pressable>

      {/* Method 4: Using direct object access */}
      <View
        style={[
          layout.flex1,
          layout.justifyCenter,
          layout.itemsCenter,
          spacing.m4,
          colors.bgGray100,
        ]}
      >
        <Text
          style={[typography.textXl, colors.textBlue500, typography.fontBold]}
        >
          Centered Content
        </Text>
      </View>

      {/* Method 5: Complex layout with direct styles */}
      <View style={[$.flexRow(), $.p4()]}>
        <View style={[$.flex1(), $.p2(), $.bgRed(), $.rounded()]}>
          <Text style={[$.textWhite(), $.textCenter()]}>Box 1</Text>
        </View>

        <View
          style={[
            $.flex1(),
            $.p2(),
            $.bgGreen(),
            $.rounded(),
            { marginLeft: 8 },
          ]}
        >
          <Text style={[$.textWhite(), $.textCenter()]}>Box 2</Text>
        </View>

        <View
          style={[
            $.flex1(),
            $.p2(),
            colors.bgBlue500,
            $.rounded(),
            { marginLeft: 8 },
          ]}
        >
          <Text style={[$.textWhite(), $.textCenter()]}>Box 3</Text>
        </View>
      </View>

      {/* Method 6: Card example with direct styles */}
      <View style={[$.rounded(), $.shadow(), $.p6(), $.m4(), colors.bgWhite]}>
        <Text style={[$.textLg(), $.fontBold(), $.m2()]}>Card Title</Text>
        <Text style={[$.textBase(), colors.textGray700, $.m2()]}>
          This is a card component built entirely with direct styles. No cs()
          function needed!
        </Text>

        <View style={[$.flexRow(), $.justifyBetween(), { marginTop: 16 }]}>
          <Pressable style={[$.p3(), $.rounded(), colors.bgGray200]}>
            <Text style={[$.textSm(), colors.textGray700]}>Cancel</Text>
          </Pressable>

          <Pressable style={[$.p3(), $.rounded(), colors.bgBlue500]}>
            <Text style={[$.textSm(), $.textWhite(), $.fontBold()]}>
              Confirm
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Performance comparison section */}
      <View style={[$.p4(), colors.bgGray100, $.m4(), $.rounded()]}>
        <Text style={[$.textLg(), $.fontBold(), $.m2()]}>
          Performance Benefits
        </Text>
        <Text style={[$.textSm(), colors.textGray700, $.m1()]}>
          ✅ No function calls during render
        </Text>
        <Text style={[$.textSm(), colors.textGray700, $.m1()]}>
          ✅ Pre-computed StyleSheet objects
        </Text>
        <Text style={[$.textSm(), colors.textGray700, $.m1()]}>
          ✅ Better tree-shaking potential
        </Text>
        <Text style={[$.textSm(), colors.textGray700, $.m1()]}>
          ✅ TypeScript autocompletion
        </Text>
      </View>
    </ScrollView>
  );
};

export default DirectStylesDemo;
