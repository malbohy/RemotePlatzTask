import React, { Component, PropTypes } from 'react';
import {
    Image,
    Linking,
    RefreshControl,
    ScrollView,
    Text,
    ToastAndroid,
    View,
} from 'react-native';
import App from './App';
import styles from './Movie';
import { Rating, AirbnbRating } from 'react-native-ratings';


class MovieItem extends Component {

    constructor(props) {
        super(props);
        console.log("value is ");
        console.log(this.props.item.image.uri);
        this.state = {
            movieDetails : this.props.item
        }
    }

    componentWillMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    render() {
        return (
                <View style={{height:200 , width:200 , margin:20}} >
                    <View style={{flex:2}}>
                        <Image
                            source={{ uri: this.props.item.image.uri}}
                            style={{flex:1, width:"100%", height:"100%", resizeMode:'cover' , backgroundColor:'red' ,borderRadius:20}}
                        />
                    </View>
                    <View style={{flex:1}} >
                        <Text>
                            {this.state.movieDetails.category}
                        </Text>
                        <Rating
                            isDisabled={true}
                            ratingCount={5}
                            imageSize={20}
                            // style={{ paddingVertical: 10 }}
                        />
                    </View>

                </View>
        );
    }
}




class Movie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies : this.props.items
        }
    }

    render() {
        console.log(this.props.items);
        return (
            <View>
                <ScrollView
                    scrollEventThrottle={16}
                >
                    <View style={{flex:1}}>
                        <Text style={{fontSize:24, fontWeight:'700' , paddingHorizontal: 50}}>
                            Related Movies
                        </Text>

                        <View  style={{height:200, marginTop: 50}}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                pagingEnabled={true}
                            >
                                {
                                    this.state.movies.map((y) => {
                                        return (<MovieItem item={y} />);
                                    })
                                }

                            </ScrollView>
                        </View>

                    </View>
                </ScrollView>
            </View>
        );
    }
}



export default Movie;
