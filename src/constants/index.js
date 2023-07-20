import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
  bestSellerOne,
  newArrFour,
  vivo1,
  vivo45,
  vivo2,
  vivo3,
  vivo65,
  vivo55,
  z2,
  eco,
psg,
resp,
} from "../assets/images/index";
// =================== NavBarList Start here ====================
export const navBarList = [
  {
    _id: 1001,
    title: "Home",
    link: "/",
  },
  {
    _id: 1002,
    title: "Products",
    link: "/products",
  },
  {
    _id: 1003,
    title: "About",
    link: "/about",
  },
  {
    _id: 1004,
    title: "Contact",
    link: "contact",
  },
 
];
// =================== NavBarList End here ======================
// =================== Special Offer data Start here ============
export const SplOfferData = [
  {
    _id: "201",
    img: spfOne,
    productName: "Cap for Boys",
    price: "35.00",
    color: "Blank and White",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: "202",
    img: newArrFour,
    productName: "Tea Table",
    price: "180.00",
    color: "Gray",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: "203",
    img: spfThree,
    productName: "Headphones",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: "204",
    img: spfFour,
    productName: "Sun glasses",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
];
// =================== Special Offer data End here ==============

// =================== PaginationItems Start here ===============

export const paginationItems = [
  {
    _id: 1001,
    img: bestSellerOne,
    productName: "Vivo 1",   
    func1:"Compact",
    func2:"Connected",
    func3:"Adaptable",
    feat1:"• One Platform-Three Models",
    feat2:"• Lightweight and Compact ",
    feat3:"• Integrated Humidifier",
    feat21:"• Prepared for Breas Cloud-based Solutions",
    feat22:"• Comprehensive synchronization option",
    feat23:"• Connectivity with Bluetooth/Wi-Fi and Cellular options",
    feat24:"• Summary and detailed data download",
    feat25:"• Smart notification functions",
    feat31:"• Wide range of Modes",
    feat32:"• Adult and paediatric (>10kg)",
    feat33:"• Intuitive Interface",
    feat34:"• Extensive therapy data ",
    feat35:"• Suitable for use in hospital and home",
    feat36:"• Closer monitoring with Breas accessory box",
    // feat31=""

    color:"Blank and White",
    badge:false,
    des:"The Vivo 1 is a new generation ventilator designed for personalized and comfortable  non-invasive respiratory support for non-dependent patients with chronic breathing insufficiency. The intuitive interface ensures ease of use. A comprehensive set of modes and extensive monitoring capabilities allow for great flexibility, making the ventilator a perfect choice for a variety of patients.",
  },
  {
    _id: 1002,
    img:vivo2,
          productName:"Vivo 2",
          func1:"Compact",
          func2:"Connected",
          func3:"Adaptable",
          feat1:"• One Platform-Three Models",
          feat2:"• Lightweight and Compact ",
          feat3:"• Integrated Humidifier with heated wire circuit",
          feat31:"• Wide range of Modes",
          feat32:"• Adult and paediatric (>10kg)",
          feat33:"• Intuitive Interface",
          feat34:"• Extensive therapy data",
          feat35:"• Suitable for use in hospital and home",
          feat36:"• Closer monitoring with Breas accessory box",
          feat21:"• EveryWare – Secure cloud-based remote monitoring*",
          feat22:"• Adult and paediatric (>10kg)",
          feat23:"• PC Software – Desktop-based with Live Viewer",
          color:"Gray",
          badge:false,
          des:"The Vivo 2 is a new generation ventilator designed for personalized and comfortable  non-invasive respiratory support for non-dependent patients with chronic breathing insufficiency. The intuitive interface ensures ease of use. A comprehensive set of modes and extensive monitoring capabilities allow for great flexibility, making the ventilator a perfect choice for a variety of patients",
  },
  {
    _id: 1003,
    img:vivo3,
          productName:"Vivo 3",
          func1:"Compact",
          func2:"Connected",
          func3:"Adaptable",
          feat1:"• One Platform-Three Models",
          feat2:"• Lightweight and Compact ",
          feat3:"• Integrated Humidifier",
          feat4:"• Internal Battery 4h",
          feat21:"• Prepared for Breas Cloud-based Solutions",
          feat22:"• Comprehensive synchronization option",
          feat23:"• Connectivity with Bluetooth/Wi-Fi and Cellular options",
          feat24:"• Summary and detailed data download",
          feat25:"• Smart notification functions",
          feat31:"• Wide range of Modes",
          feat32:"• Adult and paediatric (>10kg)",
          feat33:"• Intuitive Interface",
          feat34:"• Extensive therapy data ",
          feat35:"• Suitable for use in hospital and home",
          feat36:"• Closer monitoring with Breas accessory box",
          color:"Mixed",
          badge:false,
          des:"The Vivo 3 is a new generation bi-level ventilator designed for personalized and comfortable respiratory support – both non-invasive and invasive – for non-dependent patients with chronic breathing insufficiency. The intuitive interface ensures ease of use. A comprehensive set of modes and extensive monitoring capabilities allow for great flexibility, making the ventilator a perfect choice for a variety of patients. ",
  },
  {
    _id: 1004,
    img:vivo45,
    productName:"Vivo-45-LS",
    func1:"DESIGNED FOR EVERYDAY LIFE",
    func2:"ADAPTABLE TO CLINICAL NEEDS",
    func3:"REMOTE MONITORING",
    feat1:"• Small, neat and user friendly",
    feat2:"• Integrated humidifier and heated wire connection",
    feat3:"• 2.5 h internal + 6.5 h click-in battery for use on the move",
    feat21:"• Pressure and volume modes",
    feat22:"• Both passive circuits and circuits with active exhalation valve",
    feat23:"• Options for a wide range of conditions and patients from 5 kg",
    feat24:"• Integrated polygraphy tracing: SpO2, FiO2, CO2, respiratory effort belts",
    feat31:"• Prepared for WiFi and Bluetooth communication",
    feat32:"• Prepared for Breas Cloud Service and simplified patient management",
    color:"Black",
    badge:true,
    des:"To meet the needs connected to a wide range of respiratory conditions a ventilator must offer outstanding clinical versatility and performance. But equally important, it must be designed around the patient’s life, activities and home environment. That’s why we’ve created Vivo 45 LS – a life support ventilator for adult and pediatric patients from 5 kg. The Vivo 45 LS is designed to maximize independence and mobility. That´s what we mean by “Designed For EveryDay Life”.",
  },
  {
    _id: 1005,
    img: vivo55,
    productName: "Vivo-55",   
    func1:"PERFORMANCE",
    func2:"EXTENSIVE MONITORING",
    func3:"FLEXIBILITY",
    feat1:"• Highly accurate volume delivery and trigger sensitivity",
    feat2:"• Comprehensive set of modes, including mouthpiece ventilation and SIMV",
    feat3:"• Wide range of settings and alarms to adapt to individual patient’s need",
    feat4:"• Invasive and non-invasive ventilation; circuits with active exhalation valve and leakage port",
          feat5:"• Intuitive user interface with direct-access buttons",
          feat6:" Low noise level",
    feat21:"• Pressure and volume modes",
    feat22:"• Both passive circuits and circuits with active exhalation valve",
    feat23:"• Options for a wide range of conditions and patients from 5 kg",
    feat24:"• Integrated polygraphy tracing: SpO2, FiO2, CO2, respiratory effort belts",
    feat31:"• Prepared for WiFi and Bluetooth communication",
    feat32:"• Prepared for Breas Cloud Service and simplified patient management",
    

    color:"Blank and White",
    badge:false,
    des:"To meet the needs connected to a wide range of respiratory conditions a ventilator must offer outstanding clinical versatility and performance. But equally important, it must be designed around the patient’s life, activities and home environment. That’s why we’ve created Vivo 45 LS – a life support ventilator for adult and pediatric patients from 5 kg. The Vivo 45 LS is designed to maximize independence and mobility. That´s what we mean by “Designed For EveryDay Life”.",
  },
  {
    _id: 1006,
    img:vivo65,
    productName:"Vivo-65",
    func1:"PERFORMANCE",
    func2:"EXTENSIVE MONITORING",
    func3:"FLEXIBILITY",
    feat1:"• Highly accurate volume delivery and trigger sensitivity",
    feat2:"• Comprehensive set of modes, including mouthpiece ventilation and SIMV",
    feat3:"• Wide range of settings and alarms to adapt to individual patient’s need",
    feat4:"• Invasive and non-invasive ventilation; circuits with active exhalation valve and leakage port",
    feat5:"• Intuitive user interface with direct-access buttons",
    feat6:" Low noise level",
    feat21:"• Integrated SpO2, CO2 and FiO2 monitoring",
    feat22:"• Numerical data, wave forms and trends on the display",
    feat23:"• PC software enabling real-time monitoring, wave forms and loops, 365 days of data storage and detailed reports ",
    feat24:"• Prepared for connection to Breas cloud solutions",
    
    feat31:"• Robust Scandinavian design for hospital, home and mobile use",
    feat32:"• Wide range of accessories for home and hospital use",
    feat33:"• 12-Hour autonomy with the 4-h internal battery and the 8-h click-on battery combined",
    feat34:"• Protective cover for safe outdoor use",
    feat35:"• 3 Profailes to personalize treatment according to the patient’s requirements",
    color:"Black",
    badge:false,
    des:"The Vivo 65 is an advanced homecare ventilator designed to deliver secure and comfortable (life-support) treatment to adult and pediatric patients from 5 kg. The Vivo 65 can be used for a wide variety of patients thanks to a comprehensive set of modes, circuits and accessories. The dual limb circuit allows for measurement of exhaled volumes providing additional security. The extensive monitoring capabilities help obtain a better insight into the quality of ventilation. The Vivo 65 is an excellent choice for mechanical ventilation at home, in the hospital and in longterm care facilities. The Vivo 65 is prepared for connection to Breas cloud solutions.",
  },
  {
    _id: 1007,
    img: z2,
    productName: "Z2",
    func1:"Z2 CPAP",
    func2:"Z2 Auto",
    feat1:"The Z2® CPAP machine is an ultra-small, light weight, full featured fixed-pressure cpap machine. It is the ultimate fixed pressure cpap for travelers and people with an active lifestyle.",
    feat21:"The Z2 Auto is the same size and weight as the fixed pressure CPAP making it perfect for travel. The therapy pressure adjusts on a breath by breath basis which results in a lower overall mean pressure than the fixed pressure CPAP.",
    
    feat31:"1. Treatment pressure display",
    feat32:"2. Ramp progress indicator (if ramp set)",
    feat33:"3. Ramp time remaining (if ramp set)",
    feat34:"4. Battery status (if present)",
    feat35:"5. AC Power indicator (if connected)",
    feat36:"6. General status display (date, mode, Auto Start/Stop) ",
    feat37:"7. Fault indicator (if fault occurs)",
    color:"Black",
    badge:false,
    des:"",
  },
  {
    _id: 1008,
    img: resp,
    productName: "SOMNOtouch™ Resp",
    func1:"Cardiorespiratory Screening in the size of a credit card",
    func2:"A new generation of polygraphy",
    func3:"Online signal check on tablet PC or mobile phone",
    feat1:"• Smallest screener on the market",
    feat2:"• High resolution touch screen",
    feat3:"• 10 channels integrated in main unit, allows easy application and maximum comfort for the patient",
    feat4:"• Wireless data transfer in realtime",
    feat5:"• Continuous Systolic/Diastolic blood pressure (Option)",
    feat21:"Integrated sensors:    ",
    feat22:"• Flow & Snore (nasalcannula)",
    feat23:"• Effort - Thorax & Abdomen    ",
    feat24:"• SpO2, pulse rate",
    feat25:"• Body position",
feat26:"• Movement (for sleep/wake estimation)",
feat27:"•	CPAP/BiPAP pressure",
feat28:"External sensors:",
feat29:"•	AUX-connection for extended recordings e.g. PLM, ECG, EEG, EOG, EMG",
    feat31:"• Sends a screenshot of the recording for a signal check to your mobile phone - no matter where you are.",
    feat32:"• Transfer times and periods can be programmed individually.",
    
    color:"Black",
    badge:false,
  },
  {
    _id: 1009,
    img: psg,
    productName: "SOMNOtouch™ PSG",
    func1:"Colour Touch Screen",
    func2:"Versatility – In a compact design",
    func3:"Intelligent ConnectTM",
    func4:"Video & Accessories (optional)",
    func5:"Docking Station",
    feat1:"• Start the data recording on the device",
    feat2:"• Signal check on the screen",
    feat3:"• Zoom to a selectable time base",
    feat4:"• Easy to use interface",
    feat5:"• Clear icons to easily identify attached sensors ",
    feat21:"• Respiratory screening, plus recording of EEG, EMG & EOG signals from the headbox and of the ECG & PLM signals with a combi-sensor",
    feat22:"• Minimal costs per measurement",
    feat23:"• Confi gurable across reimbursement systems ",
    feat31:"• Automatic sensor recognition, no montages required",
    feat32:"• Clear icons to easily identify functions/sensors",
    feat33:"• AASM compliant headbox with continuous impedance recording",
    feat41:"• Now with on-line recording capabilities ",
    feat42:"• Powered by our powerful DOMINO Software ",
    feat43:"Complete range of stationary video solutions",
    feat44:"Comfortable Bluetooth receiver (BTR062)",
    feat45:"Include external devices via our ADC board",
    feat51:"Fast recharging for PSG recording",
    feat52:"Fast data transfer (Approx. 90s for a PSG)",
    feat53:"Virtual dockingstation to display device status on PC",
    feat54:"Available in a 3 port design for bigger installations",
    color:"Black",
    badge:false,
    des:"The SOMNOtouch™ PSG combines the comfort, function and power of much larger sleep diagnostic devices in a small perfectly formed size. At only 64 g and 84 mm x 55 mm it is one of the lightest yet powerful touch screen ambulatory/stationary polysomnography devices on the market today.",
  },
  {
    _id: 1010,
    img: eco,
    productName: "SOMNOtouch™ RESP eco ",
    func1:"Diagnose better with SOMNOtouch™ RESP eco ",
    func2:"Simple easy to use interface",
    func3:"One cable – for charging and data transfer",
    feat1:"• Correlation between body position and respiratory events – to better diff erentiate between patients requiring positiona training devices or CPAP therapy",
    feat2:"• Measure RERA’s to help distinguish between AHI and RDI",
    feat3:"• Cheyne Stokes analysis in combination with pulse rate, gives insight to cardiorespiratory health",
    feat4:"• Extensive CPAP pressure report – better define the ideal fi xed pressure for your patients",
    feat5:"• Bruxism screener (optional) – addressing the growing trend toward dental sleep medicine",
    feat21:"• Easy to use for both practitioner and patient",
    feat22:"• Quick start function – one standard montage",
    feat23:"• Easy to use pre-confi gured sleep reports ",
    feat24:"• Marker button to notify of interesting events",
    
    feat31:"• 60min fast charge for an 8h night recording",
    feat32:"• Fast data transfer (Approx. 90s for a full nights study)",
    feat33:"• PC interface – graphical based control",
    feat34:"• Powerful software based on existing DOMINO software platform",
    feat35:"• Manual, semi-auto and automatic scoring available",
    color: "Black",
    badge: true,
    des: "The SOMNOtouch™ RESP eco – joins the SOMNOtouch™ family of products and is positioned primarily at the doctor who only requires a simple respiratory sleep screening device. Responding to the growing demand for low cost home sleep polygraphy devices – the SOMNOtouch™ RESP eco will have 12 channels including one of two optional sensors: abdomen eff ort or bruxism. Using the smart intelligent connect system and a combined data and charging USB cable it is very easy for the clinic and patient to set up and use.",
  },
  // {
  //   _id: 1011,
  //   img: newArrThree,
  //   productName: "cloth Basket",
  //   price: "80.00",
  //   color: "Mixed",
  //   badge: true,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  // {
  //   _id: 1012,
  //   img: newArrFour,
  //   productName: "Funny toys for babies",
  //   price: "60.00",
  //   color: "Mixed",
  //   badge: false,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  // {
  //   _id: 1013,
  //   img: newArrTwo,
  //   productName: "Funny toys for babies",
  //   price: "60.00",
  //   color: "Mixed",
  //   badge: false,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },

  // {
  //   _id: 1014,
  //   img: newArrTwo,
  //   productName: "Smart Watch",
  //   price: "250.00",
  //   color: "Black",
  //   badge: true,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  // {
  //   _id: 1015,
  //   img: newArrFour,
  //   productName: "Funny toys for babies",
  //   price: "60.00",
  //   color: "Mixed",
  //   badge: false,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  // {
  //   _id: 1016,
  //   img: newArrTwo,
  //   productName: "Smart Watch",
  //   price: "250.00",
  //   color: "Black",
  //   badge: true,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  // {
  //   _id: 1017,
  //   img: bestSellerFour,
  //   productName: "Travel Bag",
  //   price: "220.00",
  //   color: "Black",
  //   badge: false,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  // {
  //   _id: 1018,
  //   img: newArrOne,
  //   productName: "Round Table Clock",
  //   price: "44.00",
  //   color: "Black",
  //   badge: true,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  // {
  //   _id: 1019,
  //   img: newArrTwo,
  //   productName: "Smart Watch",
  //   price: "250.00",
  //   color: "Black",
  //   badge: true,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  // {
  //   _id: 1020,
  //   img: newArrThree,
  //   productName: "cloth Basket",
  //   price: "80.00",
  //   color: "Mixed",
  //   badge: true,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  // {
  //   _id: 1021,
  //   img: spfThree,
  //   productName: "Headphones",
  //   price: "25.00",
  //   color: "Mixed",
  //   badge: true,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  // {
  //   _id: 1022,
  //   img: spfFour,
  //   productName: "Sun glasses",
  //   price: "220.00",
  //   color: "Black",
  //   badge: true,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  // {
  //   _id: 1023,
  //   img: bestSellerOne,
  //   productName: "Vivo-1",
  //   price: "35.00",
  //   color: "Blank and White",
  //   badge: true,
  //   des: "PULMONIX 6 is a new generation ventilator designed for personalized and comfortable  non-invasive respiratory support for non-dependent patients with chronic breathing insufficiency. The intuitive interface ensures ease of use. A comprehensive set of modes and extensive monitoring capabilities allow for great flexibility, making the ventilator a perfect choice for a variety of patients.",
  // },
  // {
  //   _id: 1024,
  //   img: spfOne,
  //   productName: "Cap for Boys",
  //   price: "35.00",
  //   color: "Blank and White",
  //   badge: true,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  // {
  //   _id: 1025,
  //   img: spfTwo,
  //   productName: "Tea Table",
  //   price: "180.00",
  //   color: "Gray",
  //   badge: true,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  // {
  //   _id: 1026,
  //   img: spfThree,
  //   productName: "Headphones",
  //   price: "25.00",
  //   color: "Mixed",
  //   badge: true,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  // {
  //   _id: 1027,
  //   img: spfFour,
  //   productName: "Sun glasses",
  //   price: "220.00",
  //   color: "Black",
  //   badge: true,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  // {
  //   _id: 1028,
  //   img: bestSellerOne,
  //   productName: "Vivo-1",   
  //   func1:"Compact",
  //   func2:"Connected",
  //   func3:"Adaptable",
  //   feat1:"• One Platform-Three Models",
  //   feat2:"• Lightweight and Compact ",
  //   feat3:"• Integrated Humidifier",
  //   feat21:"• Prepared for Breas Cloud-based Solutions",
  //   feat22:"• Comprehensive synchronization option",
  //   feat23:"• Connectivity with Bluetooth/Wi-Fi and Cellular options",
  //   feat24:"• Summary and detailed data download",
  //   feat25:"• Smart notification functions",
  //   feat31:"• Wide range of Modes",
  //   feat32:"• Adult and paediatric (>10kg)",
  //   feat33:"• Intuitive Interface",
  //   feat34:"• Extensive therapy data ",
  //   feat35:"• Suitable for use in hospital and home",
  //   feat36:"• Closer monitoring with Breas accessory box",
  //   // feat31=""

  //   color:"Blank and White",
  //   badge:false,
  //   des:"PULMONIX3 is a new generation ventilator designed for personalized and comfortable  non-invasive respiratory support for non-dependent patients with chronic breathing insufficiency. The intuitive interface ensures ease of use. A comprehensive set of modes and extensive monitoring capabilities allow for great flexibility, making the ventilator a perfect choice for a variety of patients.",
  // },
  // {
  //   _id: 1029,
  //   img: bestSellerTwo,
  //   productName: "New Backpack",
  //   price: "180.00",
  //   color: "Gray",
  //   badge: false,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  // {
  //   _id: 1030,
  //   img: bestSellerThree,
  //   productName: "Household materials",
  //   price: "25.00",
  //   color: "Mixed",
  //   badge: true,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  // {
  //   _id: 1031,
  //   img: bestSellerFour,
  //   productName: "Travel Bag",
  //   price: "220.00",
  //   color: "Black",
  //   badge: false,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  // {
  //   _id: 1032,
  //   img: newArrOne,
  //   productName: "Round Table Clock",
  //   price: "44.00",
  //   color: "Black",
  //   badge: true,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  // {
  //   _id: 1033,
  //   img: newArrTwo,
  //   productName: "Smart Watch",
  //   price: "250.00",
  //   color: "Black",
  //   badge: true,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  // {
  //   _id: 1034,
  //   img: newArrThree,
  //   productName: "cloth Basket",
  //   price: "80.00",
  //   color: "Mixed",
  //   badge: true,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  // {
  //   _id: 1035,
  //   img: newArrFour,
  //   productName: "Funny toys for babies",
  //   price: "60.00",
  //   color: "Mixed",
  //   badge: false,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  // {
  //   _id: 1036,
  //   img: newArrTwo,
  //   productName: "Funny toys for babies",
  //   price: "60.00",
  //   color: "Mixed",
  //   badge: false,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  // {
  //   _id: 1037,
  //   img: newArrFour,
  //   productName: "Funny toys for babies",
  //   price: "60.00",
  //   color: "Mixed",
  //   badge: false,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  // {
  //   _id: 1038,
  //   img: newArrTwo,
  //   productName: "Smart Watch",
  //   price: "250.00",
  //   color: "Black",
  //   badge: true,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  // {
  //   _id: 1039,
  //   img: bestSellerFour,
  //   productName: "Travel Bag",
  //   price: "220.00",
  //   color: "Black",
  //   badge: false,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  // {
  //   _id: 1040,
  //   img: newArrOne,
  //   productName: "Round Table Clock",
  //   price: "44.00",
  //   color: "Black",
  //   badge: true,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  // {
  //   _id: 1041,
  //   img: newArrTwo,
  //   productName: "Smart Watch",
  //   price: "250.00",
  //   color: "Black",
  //   badge: true,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  // {
  //   _id: 1042,
  //   img: newArrThree,
  //   productName: "cloth Basket",
  //   price: "80.00",
  //   color: "Mixed",
  //   badge: true,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  // {
  //   _id: 1043,
  //   img: spfThree,
  //   productName: "Headphones",
  //   price: "25.00",
  //   color: "Mixed",
  //   badge: true,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  // {
  //   _id: 1044,
  //   img: spfFour,
  //   productName: "Sun glasses",
  //   price: "220.00",
  //   color: "Black",
  //   badge: true,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  // {
  //   _id: 1045,
  //   img: bestSellerOne,
  //   productName: "Vivo-1",   
  //   func1:"Compact",
  //   func2:"Connected",
  //   func3:"Adaptable",
  //   feat1:"• One Platform-Three Models",
  //   feat2:"• Lightweight and Compact ",
  //   feat3:"• Integrated Humidifier",
  //   feat21:"• Prepared for Breas Cloud-based Solutions",
  //   feat22:"• Comprehensive synchronization option",
  //   feat23:"• Connectivity with Bluetooth/Wi-Fi and Cellular options",
  //   feat24:"• Summary and detailed data download",
  //   feat25:"• Smart notification functions",
  //   feat31:"• Wide range of Modes",
  //   feat32:"• Adult and paediatric (>10kg)",
  //   feat33:"• Intuitive Interface",
  //   feat34:"• Extensive therapy data ",
  //   feat35:"• Suitable for use in hospital and home",
  //   feat36:"• Closer monitoring with Breas accessory box",
  //   // feat31=""

  //   color:"Blank and White",
  //   badge:false,
  //   des:"PULMONIX 2 is a new generation ventilator designed for personalized and comfortable  non-invasive respiratory support for non-dependent patients with chronic breathing insufficiency. The intuitive interface ensures ease of use. A comprehensive set of modes and extensive monitoring capabilities allow for great flexibility, making the ventilator a perfect choice for a variety of patients.",
  // },
  // {
  //   _id: 1046,
  //   img: spfOne,
  //   productName: "Cap for Boys",
  //   price: "35.00",
  //   color: "Blank and White",
  //   badge: true,
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
];
// =================== PaginationItems End here =================
