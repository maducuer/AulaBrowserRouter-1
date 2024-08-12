import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css',
export default function Home(){
    return (
<>
<Carousel
infiniteLoop
useKeyboardArrows
autoPlay
showArrows={true}
showStatus={false}
showThumbs={false}
>
<div>
    <img src='https://images-na.ssl-images-amazon.com/images/G/32/kindle/email/2024/medicgomes/1500x180_Desk_Record.jpg'/>
</div>
<div>
    <img src='https://images-na.ssl-images-amazon.com/images/G/32/kindle/email/2024/medicgomes/OCT24/750x180_promo21.jpg'/>
</div>
<div>
    <img src='https://images-na.ssl-images-amazon.com/images/G/32/kindle/email/2024/medicgomes/OCT24/750x180_promo11.jpg'/>
</div>
</Carousel>
</>
    )
}