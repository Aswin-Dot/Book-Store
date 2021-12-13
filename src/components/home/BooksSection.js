import React from 'react';
import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { myBooksData, categoriesData } from "../../data"
import { icons, COLORS, SIZES, FONTS } from "../../constants";

const BooksSection = () => {
  const navigation = useNavigation();

  const [selectedCategory, setSelectedCategory] = React.useState(1)

  const renderItemBooks = ({ item, index }) => {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            marginLeft: index == 0 ? SIZES.padding : 0,
            marginRight:
              index == myBooksData.length - 1 ? SIZES.padding : SIZES.base,
          }}
          onPress={() => navigation.navigate("BookDetails", {
            book: item
          })}
        >
          {/* bookcover */}
          <Image
            source={item.bookCover}
            resizeMode="cover"
            style={{
              height: 200,
              width: 140,
              borderRadius: 20,
            }}
          />

          {/* Book Info */}
          <View
            style={{
              marginTop: SIZES.radius,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={icons.clock_icon}
              style={{
                width: 16,
                height: 16,
                tintColor: COLORS.lightGray,
              }}
            />
            <Text
              style={{
                marginLeft: 5,
                ...FONTS.body4,
                color: COLORS.lightGray,
              }}
            >
              {item.lastRead}
            </Text>

            <Image
              source={icons.page_icon}
              style={{
                marginLeft: SIZES.radius,
                width: 16,
                height: 16,
                tintColor: COLORS.lightGray,
              }}
            />
            <Text
              style={{
                marginLeft: 5,
                ...FONTS.body4,
                color: COLORS.lightGray,
              }}
            >
              {item.completion}
            </Text>
          </View>
        </TouchableOpacity>
      );
  }

  const renderItemCategoryHeader = ({ item }) => {
      return (
        <TouchableOpacity
          style={{ flex: 1, marginRight: SIZES.padding }}
          onPress={() => setSelectedCategory(item.id)}
        >
          {selectedCategory == item.id && (
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>
              {item.categoryName}
            </Text>
          )}
          {selectedCategory != item.id && (
            <Text style={{ ...FONTS.h4, color: COLORS.lightGray }}>
              {item.categoryName}
            </Text>
          )}
        </TouchableOpacity>
      );
  }

  const renderItemCategoryList = () => {
    var books = [];

    let selectedCategoryBooks = categoriesData.filter(
      (a) => a.id == selectedCategory
    );
    books = selectedCategoryBooks[0].books;

    return (
      <View
        style={{
          flex: 1,
          marginTop: SIZES.radius,
          paddingLeft: SIZES.padding,
        }}
      >
        {/* <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
        /> */}
        {books.map((item, index) => {
          return (
            <View key={index}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  flexDirection: "row",
                  marginBottom: SIZES.base,
                }}
                onPress={() =>
                  navigation.navigate("BookDetails", {
                    book: item,
                  })
                }
              >
                {/* book Cover */}
                <Image
                  source={item.bookCover}
                  resizeMode="cover"
                  style={{
                    height: 120,
                    width: 75,
                    borderRadius: 10,
                  }}
                />

                {/* Book name and author */}
                <View
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    marginLeft: SIZES.base,
                  }}
                >
                  <Text style={{ ...FONTS.h3, color: COLORS.white }}>
                    {item.bookName}
                  </Text>
                  <Text style={{ ...FONTS.h4, color: COLORS.lightGray4 }}>
                    {item.author}
                  </Text>

                  {/* book info */}
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      marginTop: SIZES.radius,
                    }}
                  >
                    <Image
                      source={icons.page_filled_icon}
                      resizeMode="contain"
                      style={{
                        width: 16,
                        height: 16,
                        tintColor: COLORS.lightGray,
                      }}
                    />
                    <Text
                      style={{
                        ...FONTS.body4,
                        color: COLORS.lightGray,
                        paddingHorizontal: SIZES.radius,
                        marginTop: -2,
                      }}
                    >
                      {item.pageNo}
                    </Text>

                    <Image
                      source={icons.read_icon}
                      resizeMode="contain"
                      style={{
                        width: 16,
                        height: 16,
                        tintColor: COLORS.lightGray,
                      }}
                    />
                    <Text
                      style={{
                        ...FONTS.body4,
                        color: COLORS.lightGray,
                        paddingHorizontal: SIZES.radius,
                        marginTop: -2,
                      }}
                    >
                      {item.readed}
                    </Text>
                  </View>

                  {/* Genre */}
                  <View style={{ flexDirection: "row", marginTop: SIZES.base }}>
                    {item.genre.includes("Adventure") && (
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          paddingHorizontal: SIZES.base,
                          height: 28,
                          marginRight: SIZES.base,
                          backgroundColor: COLORS.darkGreen,
                          borderRadius: SIZES.base,
                        }}
                      >
                        <Text
                          style={{ ...FONTS.body4, color: COLORS.lightGreen }}
                        >
                          Adventure
                        </Text>
                      </View>
                    )}
                    {item.genre.includes("Romance") && (
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          paddingHorizontal: SIZES.base,
                          height: 28,
                          marginRight: SIZES.base,
                          backgroundColor: COLORS.darkRed,
                          borderRadius: SIZES.base,
                        }}
                      >
                        <Text
                          style={{ ...FONTS.body4, color: COLORS.lightRed }}
                        >
                          Romance
                        </Text>
                      </View>
                    )}
                    {item.genre.includes("Drama") && (
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          paddingHorizontal: SIZES.base,
                          height: 28,
                          marginRight: SIZES.base,
                          backgroundColor: COLORS.darkBlue,
                          borderRadius: SIZES.base,
                        }}
                      >
                        <Text
                          style={{ ...FONTS.body4, color: COLORS.lightBlue }}
                        >
                          Drama
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
              </TouchableOpacity>

              {/* Bookmark button */}
              <TouchableOpacity
                style={{ position: "absolute", top: 5, right: 15 }}
              >
                <Image
                  source={icons.bookmark_icon}
                  resizeMode="contain"
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: COLORS.lightGray,
                  }}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {/* header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: SIZES.padding,
          alignItems: "center",
        }}
      >
        <Text style={{ ...FONTS.h2, color: COLORS.white }}>My Books</Text>
        <TouchableOpacity onPress={() => console.log("see more")}>
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.lightGray,
              textDecorationLine: "underline",
            }}
          >
            see more
          </Text>
        </TouchableOpacity>
      </View>

      {/* Books */}
      <View style={{ flex: 1, marginTop: SIZES.padding }}>
        <FlatList
          data={myBooksData}
          renderItem={renderItemBooks}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Category Header */}
      <View
        style={{
          flex: 1,
          marginLeft: SIZES.padding,
          marginTop: SIZES.padding,
        }}
      >
        <FlatList
          data={categoriesData}
          renderItem={renderItemCategoryHeader}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Category List */}
        {renderItemCategoryList()}
    </View>
  );
};

export default BooksSection;