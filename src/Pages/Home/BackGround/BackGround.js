import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';

const BackGround = () => {
    return (
        <div className="w-100 py-5">
            <Card className="bg-dark text-white">
                <Card.Img src="https://fdn.gsmarena.com/imgroot/news/21/11/huawei-matebook-e-nov-17/inline/-1200/gsmarena_002.jpg" alt="Card image" height={600} />
                <Card.ImgOverlay>
                    <Card.Title>Huawei to unveil new Matebook E on November 17</Card.Title>
                    <Card.Text>
                        Huawei scheduled an event for November 17 where it will unveil plenty of new products from its smart ecosystem, including a Watch GT Runner. The company later revealed a new Matebook E will also take the stage - a two-in-one hybrid with detachable keyboard.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <div className="pt-5 ">
                <>
                    <Card>
                        <Card.Img variant="top" src="https://fdn.gsmarena.com/imgroot/news/21/11/phone-makers-supporting-auto-themes-in-android-12/inline/-1200w5/gsmarena_002.jpg" height={600} />
                        <Card.Body>
                            <Card.Text>
                                The main feature in Google's release of Android 12 is undoubtedly the auto-theming system that extracts colors from the wallpaper you've chosen to magically make a new theme every time you change said wallpaper.

                                This is a big user-facing change in how the operating system works, and we were skeptical as to how many Android device makers would choose to use it in their skins, since it's not always a given that big UI-related changes in Android make it through to all skins, especially the heaviest of them.

                                In this case, however, there seems to be good news. As outed today by a new code commit in Google's Material Components library, it seems like quite a few Android phone makers are ready to incorporate auto-theming into their respective skins.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </>
            </div>
        </div>
    );
};

export default BackGround;