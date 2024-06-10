import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const Service = () => {

    const responsive = {
        0: { items: 1 },
        720: { items: 2 },
        1024: { items: 3 },
    };

    const cards = [
        {
          image: 'https://via.placeholder.com/400x300',
          title: 'रोजगार संधी',
          description: 'निराधार आणि अपंग लोकांसाठी रोजगाराच्या संधी उपलब्ध करून देणे',
        },
        {
          image: 'https://via.placeholder.com/400x300',
          title: 'जेवण व राहण्याची सोय',
          description: 'अपंग आणि निराधार लोकांसाठी मोफत जेवण व राहण्याची सोय',
        },
        {
          image: 'https://via.placeholder.com/400x300',
          title: 'वैद्यकीय सेवा',
          description: 'दवाखाना, औषधे आणि ॲम्बुलन्स सेवा',
        },
        {
          image: 'https://via.placeholder.com/400x300',
          title: 'शव सेवा',
          description: 'अंतिम संस्कारासाठी शव सेवा उपलब्ध',
        },
        {
          image: 'https://via.placeholder.com/400x300',
          title: 'पर्यावरण मोहिमा',
          description: 'पाणी आडवा पाणी जिरवा, झाडे लावा झाडे जगवा आणि स्वच्छ भारत अभियान',
        },
       
    ]
   
      const items = cards.map((card, index) => (
        <div key={index} className="flex-shrink-0 w-64 bg-white shadow-lg rounded-lg overflow-hidden  ml-24 m-4">
          <img src={card.image} alt={card.title} className="w-full h-56 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-700">{card.description}</p>
          </div>
        </div>
      ));

  return (
    <div>
         <div className="w-full overflow-x-auto h-auto p-4">
            
       <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
        disableDotsControls
    />
    </div>
      
    </div>
  )
}

export default Service
