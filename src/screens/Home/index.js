import React, {Component} from 'react';
import {
  FlatList,
  Platform,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  BackHandler,
  Button,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import Offer from '../../components/shop/Offer';
import HeaderButton from '../../components/UI/HeaderButton';
import ProductItem from '../../components/shop/ProductItem';
import Colors from '../../constants/Colors';
import Card from '../../components/UI/Card';
import {SliderBox} from 'react-native-image-slider-box';
import AssetsImages from '../../assets';
import BtnWithImage from '../../components/shop/BtnWithImage';
import ImageCarousel, {Pagination} from 'react-native-snap-carousel';
import Seach from '../../components/shop/Seach';
import CustomHeader from '../../components/UI/CustomHeader';
import Statusbar from '../../components/UI/Statusbar';
import {CONST} from '../../utils/constants';
export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        'https://source.unsplash.com/1024x768/?nature',
        'https://source.unsplash.com/1024x768/?nature',
        'https://source.unsplash.com/1024x768/?nature',
      ],

      offers: [
        {
          Promotions: [
            {
              Seeall: 'See all',
              Promotions: 'Promotions',
              offers: [
                {
                  urls: AssetsImages.Banner,
                },
                {
                  urls: AssetsImages.Banner,
                },
                {
                  urls: AssetsImages.Banner,
                },
                {
                  urls: AssetsImages.Banner,
                },
              ],
              isProducts: [
                {
                  title: 'Vegetable',
                  imageProduct: AssetsImages.Vegetables,
                },
                {
                  title: 'Fruit',
                  imageProduct: AssetsImages.Fruits,
                },
                {
                  title: 'Cleaning',
                  imageProduct: AssetsImages.Cleaning,
                },
                {
                  title: 'Grocery',
                  imageProduct: AssetsImages.Grocery,
                },
                {
                  title: 'Meat',
                  imageProduct: AssetsImages.Meat,
                },
                {
                  title: 'Spice',
                  imageProduct: AssetsImages.Spice,
                },
                {
                  title: 'Fish',
                  imageProduct: AssetsImages.Fish,
                },
                {
                  title: 'Edible Oil',
                  imageProduct: AssetsImages.EdibleOil,
                },
              ],
            },
          ],
          TopCategories: [
            {
              TopCategories: 'TopCategories',
              isProducts: [
                {
                  title: 'Vegetable',
                  imageProduct: AssetsImages.Vegetables,
                },
                {
                  title: 'Fruit',
                  imageProduct: AssetsImages.Fruits,
                },
                {
                  title: 'Cleaning',
                  imageProduct: AssetsImages.Cleaning,
                },
                {
                  title: 'Grocery',
                  imageProduct: AssetsImages.Grocery,
                },
                {
                  title: 'Meat',
                  imageProduct: AssetsImages.Meat,
                },
                {
                  title: 'Spice',
                  imageProduct: AssetsImages.Spice,
                },
                {
                  title: 'Fish',
                  imageProduct: AssetsImages.Fish,
                },
                {
                  title: 'Edible Oil',
                  imageProduct: AssetsImages.EdibleOil,
                },
              ],
            },
          ],
          BestSeller: [
            {
              BestSeller: 'BestSeller',
              product: [
                {
                  title: 'fingers Pulse Oxims',
                  descraption: 'fingers Pulse Oxims',
                  price: '15.99',
                  cutPrece: '15.99',

                  imageProduct: AssetsImages.Vegetables,
                },
                {
                  title: 'Dentainer salver',
                  descraption: 'Dentainer salver',
                  price: '15.99',
                  cutPrece: '15.99',
                  imageProduct: AssetsImages.Vegetables,
                },
                {
                  title: 'Atta & Other floure',
                  price: '15.99',
                  cutPrece: '15.99',
                  descraption: 'Atta & Other floure',
                  imageProduct: AssetsImages.Vegetables,
                },
                {
                  title: 'Shampoo',
                  price: '15.99',
                  cutPrece: '15.99',
                  descraption: 'Atta & Other floure',
                  imageProduct: AssetsImages.Vegetables,
                },
              ],
            },
          ],
        },
      ],
    };
  }
  _BestSeller = ({item}) => {
    if (item.BestSeller) {
      return (
        <View>
          <View
            style={{
              marginLeft: 15,
              marginRight: 15,
              marginTop: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                marginLeft: 15,
                marginTop: 10,
                fontWeight: 'bold',
              }}>
              Today's Best Deals
            </Text>
          </View>
          <View style={{marginBottom: 10}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={item.BestSeller[0].product}
              horizontal={true}
              keyExtractor={(item) => item.price}
              renderItem={({item}) => (
                <Card style={styles.product}>
                  <View style={styles.touchable}>
                    <View>
                      <View style={styles.imageContainer}>
                        <Image source={item.imageProduct} />
                      </View>
                      <View style={styles.details}>
                        <Text style={styles.title}>{item.title}</Text>
                        <View style={{flexDirection: 'row'}}>
                          <View>
                            <Text
                              style={{
                                fontSize: 10,
                                color: '#999',
                                marginRight: 10,
                              }}>
                              ${item.price}
                            </Text>
                          </View>

                          <View>
                            <Text style={{fontSize: 15, color: 'blue'}}>
                              ${item.price}
                            </Text>
                            <View
                              style={{
                                width: 50,
                                height: 2,
                                position: 'absolute',
                                marginTop: 10,
                                backgroundColor: '#999',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </Card>
              )}
            />
          </View>
        </View>
      );
    }
  };

  _TopCategories = ({item}) => {
    if (item.TopCategories) {
      return (
        <View>
          <View
            style={{
              marginLeft: 15,
              marginRight: 15,
              marginTop: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,

                fontWeight: 'bold',
              }}>
              Promotions
            </Text>
          </View>
          <View style={{marginBottom: 10}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              numColumns={4}
              data={item.TopCategories[0].isProducts}
              keyExtractor={(item) => item.title}
              renderItem={(itemData) => (
                <View
                  style={{
                    marginLeft: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={itemData.item.imageProduct}
                    //  style={{width: '20%', width: '20%'}}
                  />
                  <Text style={{fontSize: 12}}>{itemData.item.title}</Text>
                </View>
              )}
            />
          </View>
        </View>
      );
    }
  };

  _renderData = ({item}) => {
    if (item.Promotions) {
      return (
        <View style={{marginBottom: 10}}>
          <FlatList
            data={item.Promotions[0].offers}
            showsHorizontalScrollIndicator={true}
            horizontal={true}
            keyExtractor={(item) => item.Promotions}
            renderItem={(itemData) => (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={itemData.item.urls}
                  style={{width: 100, resizeMode: 'stretch', height: 200}}
                />
              </View>
            )}
          />
          <View
            style={{
              marginLeft: 15,
              marginRight: 15,
              marginTop: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,

                fontWeight: 'bold',
              }}>
              {item.Promotions[0].Promotions}
            </Text>
            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => {}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  marginRight: 5,
                }}>
                {item.Promotions[0].Seeall}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginBottom: 10}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={item.Promotions[0].isProducts}
              numColumns={4}
              keyExtractor={(item) => item.title}
              renderItem={(itemData) => (
                <View
                  style={{
                    marginLeft: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={itemData.item.imageProduct}
                    //  style={{width: '20%', width: '20%'}}
                  />
                  <Text style={{fontSize: 12}}>{itemData.item.title}</Text>
                </View>
              )}
            />
          </View>
          <View style={{marginBottom: 10}}>
            <FlatList
              data={item.Promotions[0].offers}
              numColumns={2}
              keyExtractor={(item) => item.urls}
              renderItem={(itemData) => (
                <View>
                  <Image
                    source={itemData.item.urls}
                    style={{width: 180, resizeMode: 'stretch', height: 100}}
                  />
                </View>
              )}
            />
          </View>
        </View>
      );
    }
  };

  render() {
    return (
      <>
        <Statusbar backgroundColor="#FFF" barStyle="light-content" />
        <ScrollView style={{flex: 1, height: '100%', backgroundColor: 'white'}}>
          <View>
            <CustomHeader
              // img={AssetsImages.search}
              inputStat={'hgjk'}
              search={AssetsImages.search}
              notification={AssetsImages.search}
              // navigation={this.props.navigation}
              // CallFuncations={() => {
              //   //  this.props.navigation.openDrawer();
              // }}
            />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={{flex: 1, marginTop: 2}}>
                <SliderBox
                  sliderBoxHeight={200}
                  images={this.state.dataSource}
                  autoplay
                  circleLoop
                  resizeMethod={'resize'}
                  resizeMode={'cover'}
                  dotColor="#FFF"
                  inactiveDotColor="#90A4AE"
                  dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 10,
                    marginHorizontal: 10,
                    padding: 0,
                    margin: 0,
                  }}
                  imageLoadingColor="red"
                  //  paginationBoxVerticalPadding={20}
                />
              </View>
            </View>
            <View>
              <FlatList
                data={this.state.offers}
                keyExtractor={(item) => item.TopCategories}
                renderItem={this._renderData}
              />
            </View>
            <View>
              <FlatList
                data={this.state.offers}
                keyExtractor={(item) => item.TopCategories}
                renderItem={this._TopCategories}
              />
            </View>
            <View>
              <FlatList
                data={this.state.offers}
                keyExtractor={(item) => item.TopCategories}
                renderItem={this._BestSeller}
              />
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  product: {
    width: 150,
    height: 150,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: '65%',

    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  details: {
    marginLeft: 10,
    marginTop: 5,
    height: '10%',
    width: '100%',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 13,
  },
  price: {
    fontFamily: 'open-sans',
    fontSize: 13,
    color: '#888',
    marginRight: 10,
  },
  actions: {
    flexDirection: 'row',

    alignItems: 'center',
  },
});
export default index;
