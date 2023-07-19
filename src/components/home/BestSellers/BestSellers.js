import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Vivo 1"
          func1="Compact"
          func2="Connected"
          func3="Adaptable"
          feat1="• One Platform-Three Models"
          feat2="• Lightweight and Compact "
          feat3="• Integrated Humidifier"
          feat21="• Prepared for Breas Cloud-based Solutions"
          feat22="• Comprehensive synchronization option"
          feat23="• Connectivity with Bluetooth/Wi-Fi and 
          Cellular options"
          feat24="• Summary and detailed data download"
          feat25="• Smart notification functions"
          feat31="• Wide range of Modes"
          feat32="• Adult and paediatric (>10kg)"
          feat33="• Intuitive Interface"
          feat34="• Extensive therapy data "
          feat35="• Suitable for use in hospital and home"
          feat36="• Closer monitoring with Breas 
          accessory box"
          // feat31=""

          color="Blank and White"
          badge={true}
          des="The Vivo 1 is a new generation ventilator designed for personalized and comfortable 
          non-invasive respiratory support for non-dependent patients with chronic breathing 
          insufficiency. The intuitive interface ensures ease of use. A comprehensive set of modes and 
          extensive monitoring capabilities allow for great flexibility, making the ventilator a perfect choice 
          for a variety of patients."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Vivo 2"
          func1="Compact"
          func2="Connected"
          func3="Adaptable"
          feat1="• One Platform-Three Models"
          feat2="• Lightweight and Compact "
          feat3="• Integrated Humidifier with
          heated wire circuit"
          feat31="• Wide range of Modes"
          feat32="• Adult and paediatric (>10kg)"
          feat33="• Intuitive Interface"
          feat34="• Extensive therapy data"
          feat35="• Suitable for use in hospital and home"
          feat36="• Closer monitoring with Breas
          accessory box"
          feat21="• EveryWare – Secure cloud-based remote
          monitoring*"
          feat22="• Adult and paediatric (>10kg)"
          feat23="• PC Software – Desktop-based with Live
          Viewer"
        
          color="Gray"
          badge={false}
          des="The Vivo 2 is a new generation ventilator designed for personalized and comfortable
          non-invasive respiratory support for non-dependent patients with chronic breathing
          insufficiency. The intuitive interface ensures ease of use. A comprehensive set of modes and
          extensive monitoring capabilities allow for great flexibility, making the ventilator a perfect choice
          for a variety of patients"
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Vivo 3"
          func1="Compact"
          func2="Connected"
          func3="Adaptable"
          feat1="• One Platform-Three Models"
          feat2="• Lightweight and Compact "
          feat3="• Integrated Humidifier with
          heated wire circuit"
          feat31="• Wide range of Modes"
          feat32="• Adult and paediatric (>10kg)"
          feat33="• Intuitive Interface"
          feat34="• Extensive therapy data"
          feat35="• Suitable for use in hospital and home"
          feat36="• Closer monitoring with Breas
          accessory box"
          feat21="• EveryWare – Secure cloud-based remote
          monitoring*"
          feat22="• Adult and paediatric (>10kg)"
          feat23="• PC Software – Desktop-based with Live
          Viewer"
        
          color="Gray"
          badge={false}
          des="The Vivo 3 is a new generation ventilator designed for personalized and comfortable
          non-invasive respiratory support for non-dependent patients with chronic breathing
          insufficiency. The intuitive interface ensures ease of use. A comprehensive set of modes and
          extensive monitoring capabilities allow for great flexibility, making the ventilator a perfect choice
          for a variety of patients"
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Vivo-45-LS"
          func1="DESIGNED FOR EVERYDAY LIFE"
          func2="ADAPTABLE TO CLINICAL NEEDS"
          func3="REMOTE MONITORING"
          feat1="• Small, neat and user friendly"
          feat2="• Integrated humidifier and heated wire connection"
          feat3="• 2.5 h internal + 6.5 h click-in battery for use on the move"
          feat21="• Pressure and volume modes"
          feat22="• Both passive circuits and circuits with active exhalation valve"
          feat23="• Options for a wide range of conditions and patients from 5 kg"
          feat24="• Integrated polygraphy tracing: SpO2
          , FiO2
          , CO2
          , respiratory effort belts"
          
          feat31="• Prepared for WiFi and Bluetooth communication"
          feat32="• Prepared for Breas Cloud Service and simplified patient management"
          
          color="Black"
          badge={false}
          des="To meet the needs connected to a wide range of
          respiratory conditions a ventilator must offer outstanding clinical versatility and performance. But
          equally important, it must be designed around
          the patient’s life, activities and home environment. That’s why we’ve created Vivo 45 LS – a life support
          ventilator for adult and pediatric patients from 5 kg.
          The Vivo 45 LS is designed to maximize independence and mobility. That´s what we mean by
          “Designed For EveryDay Life”.
          
          "
        />

<Product
          _id="1015"
          img={bestSellerFour}
          productName="Vivo-55"
          func1="PERFORMANCE"
          func2="EXTENSIVE MONITORING"
          func3="FLEXIBILITY"
          feat1="• Highly accurate volume delivery and trigger sensitivity"
          feat2="• Comprehensive set of modes, including mouthpiece ventilation and SIMV"
          feat3="• Wide range of settings and alarms to adapt to individual patient’s need"
          feat4="• Invasive and non-invasive ventilation; circuits with active exhalation valve and leakage port"
          feat5="• Intuitive user interface with direct-access buttons"
          feat6=" Low noise level"
          feat21="• Pressure and volume modes"
          feat22="• Both passive circuits and circuits with active exhalation valve"
          feat23="• Options for a wide range of conditions and patients from 5 kg"
          feat24="• Integrated polygraphy tracing: SpO2
          , FiO2
          , CO2
          , respiratory effort belts"
          
          feat31="• Prepared for WiFi and Bluetooth communication"
          feat32="• Prepared for Breas Cloud Service and simplified patient management"
          
          color="Black"
          badge={false}
          des="To meet the needs connected to a wide range of
          respiratory conditions a ventilator must offer outstanding clinical versatility and performance. But
          equally important, it must be designed around
          the patient’s life, activities and home environment. That’s why we’ve created Vivo 45 LS – a life support
          ventilator for adult and pediatric patients from 5 kg.
          The Vivo 45 LS is designed to maximize independence and mobility. That´s what we mean by
          “Designed For EveryDay Life”.
          
          "
        />

<Product
          _id="1016"
          img={bestSellerFour}
          productName="Vivo-65"
          func1="PERFORMANCE"
          func2="EXTENSIVE MONITORING"
          func3="FLEXIBILITY"
          feat1="• Highly accurate volume delivery and trigger sensitivity"
          feat2="• Comprehensive set of modes, including mouthpiece ventilation and SIMV"
          feat3="• Wide range of settings and alarms to adapt to individual patient’s need"
          feat4="• Invasive and non-invasive ventilation; circuits with active exhalation valve and leakage port"
          feat5="• Intuitive user interface with direct-access buttons"
          feat6=" Low noise level"
          feat21="• Integrated SpO2
          , CO2
           and FiO2
           monitoring"
          feat22="• Numerical data, wave forms and trends on the display"
          feat23="• PC software enabling real-time monitoring, wave forms and loops, 365 days of data storage and detailed reports "
          feat24="• Prepared for connection to Breas cloud solutions"
          
          feat31="• Robust Scandinavian design for hospital, home and mobile use"
          feat32="• Wide range of accessories for home and hospital use"
          feat33="• 12-Hour autonomy with the 4-h internal battery and the 8-h click-on battery combined"
          feat34="• Protective cover for safe outdoor use"
          feat35="• 3 Profailes to personalize treatment according to the patient’s requirements"
          color="Black"
          badge={false}
          des="The Vivo 65 is an advanced homecare ventilator designed to deliver secure and comfortable (life-support) treatment to adult and pediatric patients from 5 kg. The Vivo 65 can be used for a wide variety of patients thanks to a comprehensive set of modes, circuits and accessories. The dual limb circuit allows for measurement of exhaled volumes providing additional security. The extensive monitoring capabilities help obtain a better insight into the quality of ventilation. The Vivo 65 is an excellent choice for mechanical ventilation at home, in the hospital and in longterm care facilities. The Vivo 65 is prepared for connection to Breas cloud solutions.
          
          "
        />
      </div>
    </div>
  );
};

export default BestSellers;
