import Header from '../component/Header';
import Banner from '../component/Banner';
import Card from '../component/Card';

let images:Array<string> = ['https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?cs=srgb&dl=pexels-pixabay-271816.jpg&fm=jpg','https://cityfurnish.com/blog/wp-content/uploads/2023/04/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg-min.jpg','https://images.ctfassets.net/5de70he6op10/5GwtnJTWNaVv6t7kD57WTI/85db8cf22797709a8a4184236c699b1c/581937399-furniture_gateway_ls_01_d.jpg']
function Index(){
    return (
        <>
            <Header/>
            <Banner/>
            
            {images.map((image) => (
            <Card imgUrl={image} />

            ))}
            
        </>

    );
}

export default Index;