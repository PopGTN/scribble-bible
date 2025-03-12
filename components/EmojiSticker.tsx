import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {useAnimatedStyle, useSharedValue, withSpring} from 'react-native-reanimated';
import {type ImageSource} from 'expo-image';

type Props = {
    imageSize: number;
    stickerSource: ImageSource;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
    //useSharedValue(imageSize) Special kinda making a special variable for animations. Got to make them this way or
    // they might not work

    const scaleImage = useSharedValue(imageSize);
    //Used for Pan Gesture
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);


    const doubleTap = Gesture.Tap()
        .numberOfTaps(2) //Determinds how many taps active the code below
        .onStart(() => {
            if (scaleImage.value !== imageSize * 2) {
                scaleImage.value = scaleImage.value * 2;
            } else {
                scaleImage.value = Math.round(scaleImage.value / 2);
            }
        });

    const imageStyle = useAnimatedStyle(() => {
        return {
            width: withSpring(scaleImage.value),
            height: withSpring(scaleImage.value),
        };
    });

    //This is similar to the double tap gesture
    const drag = Gesture.Pan().onChange(event => {
        translateX.value += event.changeX;
        translateY.value += event.changeY;
    });

    const containerStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value,
                },
                {
                    translateY: translateY.value,
                },
            ],
        };
    });

    /*Changed from <view> tag to the <Animated.View> for Pan Gesture */
    return (
        <GestureDetector gesture={drag}>
            <Animated.View style={[containerStyle, { top: -350 }]}>
                <GestureDetector gesture={doubleTap}>
                    <Animated.Image
                        source={stickerSource}
                        resizeMode="contain"
                        style={[imageStyle, {width: imageSize, height: imageSize}]}
                    />
                </GestureDetector>
            </Animated.View>
        </GestureDetector>

    );
}
