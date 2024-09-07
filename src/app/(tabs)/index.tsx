import { Button, FlatList, SafeAreaView, Text, View } from "react-native";
import { Link, router } from "expo-router";
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { AntDesign } from "@expo/vector-icons";
import { Post, useDeletePostMutation, useGetPostsQuery } from "@reduxs";
import { colors, styles } from "@themes";
import { Image } from "expo-image";
import Animated from "react-native-reanimated";
import { useCallback } from "react";

const AnimatedImage = Animated.createAnimatedComponent(Image);

export default function HomeScreen() {
  const { data } = useGetPostsQuery();
  const [deletePost] = useDeletePostMutation();

  const _handleDeletePost = useCallback( async (id: number) => {
    // dispatch(deletePost(id));
    const response = await deletePost(id).unwrap();
    
  }, []);

  const _renderPostItem = ({ item }: { item: Post }) => {
    return (
      <View
        style={[
          styles.rounded_12,
          styles.shadow_md,
          { backgroundColor: colors.white },
        ]}
      >
        <View
          style={[
            styles.border_b_1,
            { borderColor: colors.black },
            styles.row,
            styles.items_center,
            styles.justify_between,
            styles.gap_16,
            styles.p_12,
          ]}
        >
          <Text
            style={[
              styles.text_black,
              styles.text_16,
              styles.flex,
            ]}
          >
            {item.id}: {item.title}
          </Text>
          <AntDesign name={"delete"} size={24} color={colors.error} onPress={() => _handleDeletePost(item.id)} />
        </View>
        <Text style={[styles.text_black, styles.text_14, styles.p_12]}>
          {item.body}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.flex]}>
      {data && (
        <FlatList
          data={data}
          contentContainerStyle={[styles.gap_16, styles.m_x_12]}
          renderItem={_renderPostItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </SafeAreaView>
  );
}
