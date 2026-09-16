// functions/_lib/defaults.js

export const DEFAULTS_EN = {
  site: {
    company: "Shandong Yuhui New Materials Co., Ltd.",
    phone: "+86 187 5430 0933",
    phoneRaw: "8618754300933",
    email: "huizheng326@gmail.com",
    linkedin: "https://www.linkedin.com/",
    address: "Shandong Province, China",
    utilTag: "Photoluminescent Materials Manufacturer · Shandong, China"
  },
  hero: [
    { kicker:"Factory Direct · Since Shandong",
      title:"Glow in the Dark Powder & Luminous Products — Direct from Our Factory",
      text:"Strontium aluminate photoluminescent pigment with 8–12 hours afterglow. Batch luminance testing, MSDS documentation, global shipping experience.",
      bg:"s1", glow:"rgba(160,255,200,.55)" },
    { kicker:"Full Specification Range",
      title:"200 – 2000 Mesh · Round / Irregular / Coated · 4 Glow Colors",
      text:"Whatever your application — coatings, inks, plastics, resin or signage — we have the matching grade and can customize for your market.",
      bg:"s2", glow:"rgba(120,200,255,.5)" },
    { kicker:"For Distributors & Brands",
      title:"OEM · Private Label · Custom Packaging — Your Brand, Our Glow",
      text:"Helping importers and brands in 50+ countries build their own luminous product lines with reliable lead times and honest communication.",
      bg:"s3", glow:"rgba(160,255,190,.5)" }
  ],
  applications: [
    { id:"safety",   icon:"🚪", name:"Safety & Exit Signage", desc:"Photoluminescent egress marking and signage systems." },
    { id:"decor",    icon:"🪨", name:"Decorative Stones",     desc:"Garden, pathway, aquarium and landscape glow stones." },
    { id:"textile",  icon:"👕", name:"Textile & Apparel",     desc:"Glow prints, embroidery and screen-printed garments." },
    { id:"coatings", icon:"🎨", name:"Coatings & Inks",       desc:"Solvent, water-based and UV-curable glow systems." },
    { id:"plastics", icon:"⚙️", name:"Plastics & Resin",      desc:"Masterbatch, injection and cast resin applications." },
    { id:"crafts",   icon:"✨", name:"Arts & Crafts",         desc:"DIY kits, nail art, toys and novelty products." }
  ],
  products: [
    { id:"glow-powder", name:"Glow in the Dark Powder", tag:"Best Seller", icon:"✨", grad:"g1", apps:["coatings","textile","crafts","plastics"],
      summary:"Rare-earth strontium aluminate pigment. 10× brighter and 3× longer than old zinc sulfide type. For coatings, inks, plastics, resin, ceramics.",
      specs:[{k:"Afterglow",v:"8–12+ hours"},{k:"Particle size",v:"200–2000 mesh"},{k:"Glow color",v:"Blue-green / Yellow-green"},{k:"Base material",v:"SrAl₂O₄:Eu,Dy"},{k:"Packaging",v:"1 kg foil bag / 25 kg drum"}],
      notes:"Store sealed and dry. Avoid prolonged moisture exposure. Free 50–100 g samples for evaluation (freight collect)." },
    { id:"luminous-stones", name:"Luminous Stones & Gravel", tag:"Decorative", icon:"🪨", grad:"g2", apps:["decor","crafts"],
      summary:"Charge-and-glow stones for gardens, pathways, aquariums, vases and landscape art. Waterproof, UV-stable, reusable for years.",
      specs:[{k:"Sizes",v:"8–10 / 20–30 / 30–50 mm"},{k:"Colors",v:"Mixed / Custom"},{k:"Charge time",v:"10–20 min sunlight"},{k:"Material",v:"Resin / Stone composite"},{k:"Packaging",v:"Bag / Carton / OEM box"}],
      notes:"Ideal for retail-ready packaging. Custom color mixes and private-label bags available from 500 kg." },
    { id:"glow-paint", name:"Photoluminescent Paint", tag:"Ready-to-use", icon:"🎨", grad:"g3", apps:["safety","coatings","decor"],
      summary:"Pigment-dispersed glow coatings for safety signage, exit paths, machinery marking and feature walls. Interior & exterior grades.",
      specs:[{k:"Carrier",v:"Acrylic / PU base"},{k:"Finish",v:"Matte / Semi-gloss"},{k:"Coverage",v:"Per TDS on request"},{k:"Application",v:"Brush / Roller / Spray"},{k:"Shelf life",v:"12 months sealed"}],
      notes:"Surface preparation matters — clean, dry and primed substrates give the best glow performance." },
    { id:"oem", name:"Custom Grades & OEM", tag:"Custom", icon:"⚗️", grad:"g4", apps:["plastics","coatings","textile","crafts"],
      summary:"Tailored particle size, afterglow curve, color temperature and packaging (from 1 kg foil bags to 25 kg drums) under your brand.",
      specs:[{k:"MOQ (OEM)",v:"From 100 kg"},{k:"Lead time",v:"7–15 days"},{k:"Labeling",v:"Your brand artwork"},{k:"Sampling",v:"Custom sample on request"},{k:"Documentation",v:"COA / MSDS / TDS"}],
      notes:"Send us your target spec or reference sample and we'll match it. NDA available on request." }
  ],
  specs: [
    { grade:"YH-327",  color:"Blue-Green",              mesh:"400 mesh",       glow:"10–12 h", use:"Coatings, inks, masterbatch",            badge:"Most Popular" },
    { grade:"YH-329",  color:"Yellow-Green",            mesh:"600 mesh",       glow:"8–10 h",  use:"Plastics, rubber, crafts",               badge:"" },
    { grade:"YH-805",  color:"Sky Blue",                mesh:"800 mesh",       glow:"6–8 h",   use:"Decor, textiles, films",                 badge:"" },
    { grade:"YH-331C", color:"Blue-Green (waterproof)", mesh:"500 mesh",       glow:"10–12 h", use:"Outdoor coatings, cement, road marking", badge:"Coated" },
    { grade:"YH-Fine", color:"Blue-Green",              mesh:"1500–2000 mesh", glow:"5–8 h",   use:"Printing inks, cosmetics-grade crafts",  badge:"" }
  ],
  faq: [
    { q:"Are samples available?", a:"Yes — 50–100 g free samples of standard grades are available; you only cover express freight (DHL / FedEx / UPS). Custom grades are quoted individually." },
    { q:"What is the difference between glow powder colors?", a:"Blue-green has the brightest and longest afterglow (10–12 h); yellow-green appears brighter to the eye at first; sky blue and other custom colors suit decorative uses with slightly shorter glow time." },
    { q:"Is the powder safe?", a:"Our strontium aluminate pigment is non-toxic, non-radioactive and chemically stable. Compliance documentation (MSDS and test reports) is provided with every shipment. Please still avoid inhalation of fine dust and use standard PPE when handling." },
    { q:"What are MOQ, payment terms and lead time?", a:"Standard grades: MOQ from 1 kg for trial orders, 100+ kg for stock items. Payment: T/T, Western Union, Alibaba Trade Assurance. Lead time: 3–7 days for stock, 7–15 days for OEM orders." },
    { q:"Which Incoterms do you support?", a:"EXW, FOB Qingdao/Shanghai, CIF to most ports, and DDP to selected countries. Our logistics team arranges air, sea and express door-to-door shipping." }
  ]
};

export const DEFAULTS_AR = {
  site: {
    company: "شركة شاندونغ يوهوي للمواد الجديدة المحدودة",
    phone: "+86 187 5430 0933",
    phoneRaw: "8618754300933",
    email: "huizheng326@gmail.com",
    linkedin: "https://www.linkedin.com/",
    address: "مقاطعة شاندونغ، الصين",
    utilTag: "مصنّع مواد فسفورية متوهجة · شاندونغ، الصين"
  },
  hero: [
    { kicker:"مباشرة من المصنع · شاندونغ",
      title:"مسحوق متوهج في الظلام ومنتجات مضيئة — مباشرة من مصنعنا",
      text:"صبغة ألومينات السترونشيوم الفسفورية بتوهج متبقي من 8 إلى 12 ساعة. اختبار إضاءة لكل دفعة، وثائق MSDS، وخبرة تصدير عالمية.",
      bg:"s1", glow:"rgba(160,255,200,.55)" },
    { kicker:"نطاق مواصفات كامل",
      title:"من 200 إلى 2000 شبكة · مستدير / غير منتظم / مطلي · 4 ألوان توهج",
      text:"أيًا كان تطبيقك — طلاءات، أحبار، بلاستيك، راتنج أو لافتات — لدينا الدرجة المناسبة ويمكننا تخصيصها لسوقك.",
      bg:"s2", glow:"rgba(120,200,255,.5)" },
    { kicker:"للموزعين والعلامات التجارية",
      title:"تصنيع بعلامتك · تغليف مخصص — علامتك، وتوهجنا",
      text:"نساعد المستوردين والعلامات التجارية في أكثر من 50 دولة على بناء خطوط منتجات مضيئة بمواعيد تسليم موثوقة وتواصل صادق.",
      bg:"s3", glow:"rgba(160,255,190,.5)" }
  ],
  applications: [
    { id:"safety",   icon:"🚪", name:"لافتات السلامة والمخارج", desc:"أنظمة لافتات وعلامات مخارج فسفورية." },
    { id:"decor",    icon:"🪨", name:"أحجار زخرفية",           desc:"أحجار متوهجة للحدائق والممرات وأحواض الأسماك." },
    { id:"textile",  icon:"👕", name:"المنسوجات والملابس",     desc:"طباعات متوهجة وتطريز وملابس مطبوعة." },
    { id:"coatings", icon:"🎨", name:"الطلاءات والأحبار",      desc:"أنظمة توهج بالمذيبات والماء والأشعة فوق البنفسجية." },
    { id:"plastics", icon:"⚙️", name:"البلاستيك والراتنج",     desc:"ماسترباتش وحقن وراتنج مصبوب." },
    { id:"crafts",   icon:"✨", name:"الفنون والحرف",          desc:"أطقم DIY وفنون الأظافر والألعاب والمنتجات المبتكرة." }
  ],
  products: [
    { id:"glow-powder", name:"مسحوق متوهج في الظلام", tag:"الأكثر مبيعًا", icon:"✨", grad:"g1", apps:["coatings","textile","crafts","plastics"],
      summary:"صبغة ألومينات السترونشيوم النادرة. أكثر سطوعًا 10 مرات وأطول 3 مرات من النوع القديم. للطلاءات والأحبار والبلاستيك والراتنج والسيراميك.",
      specs:[{k:"التوهج المتبقي",v:"8–12+ ساعة"},{k:"حجم الجزيء",v:"200–2000 شبكة"},{k:"لون التوهج",v:"أزرق-أخضر / أصفر-أخضر"},{k:"المادة الأساسية",v:"SrAl₂O₄:Eu,Dy"},{k:"التغليف",v:"كيس 1 كجم / برميل 25 كجم"}],
      notes:"يُخزّن مغلقًا وجافًا. تجنب التعرض المطوّل للرطوبة. عينات مجانية 50–100 غرام للتقييم (الشحن على حساب العميل)." },
    { id:"luminous-stones", name:"أحجار وحصى مضيئة", tag:"زخرفي", icon:"🪨", grad:"g2", apps:["decor","crafts"],
      summary:"أحجار تُشحن وتتوهج للحدائق والممرات وأحواض الأسماك والمزهريات والفنون الطبيعية. مقاومة للماء والأشعة، قابلة لإعادة الاستخدام لسنوات.",
      specs:[{k:"الأحجام",v:"8–10 / 20–30 / 30–50 ملم"},{k:"الألوان",v:"مختلطة / مخصصة"},{k:"مدة الشحن",v:"10–20 دقيقة تحت الشمس"},{k:"المادة",v:"راتنج / مركّب حجري"},{k:"التغليف",v:"كيس / كرتون / علبة OEM"}],
      notes:"مثالية للتغليف الجاهز للبيع. خلطات ألوان مخصصة وأكياس بعلامتك من 500 كجم." },
    { id:"glow-paint", name:"طلاء فسفوري", tag:"جاهز للاستخدام", icon:"🎨", grad:"g3", apps:["safety","coatings","decor"],
      summary:"طلاءات متوهجة بلون مشتت للافتات السلامة وممرات الخروج وعلامات الآلات والجدران المميزة. للاستخدام الداخلي والخارجي.",
      specs:[{k:"الحامل",v:"أكريليك / بولي يوريثان"},{k:"التشطيب",v:"مطفي / شبه لامع"},{k:"التغطية",v:"حسب TDS عند الطلب"},{k:"التطبيق",v:"فرشاة / بكرة / رش"},{k:"مدة الصلاحية",v:"12 شهرًا مغلقًا"}],
      notes:"تحضير السطح مهم — الأسطح النظيفة والجافة والمجهزة تعطي أفضل توهج." },
    { id:"oem", name:"درجات مخصصة وخدمة OEM", tag:"مخصص", icon:"⚗️", grad:"g4", apps:["plastics","coatings","textile","crafts"],
      summary:"حجم جزيء ومنحنى توهج ودرجة لون وتغليف مخصص (من أكياس 1 كجم إلى براميل 25 كجم) بعلامتك التجارية.",
      specs:[{k:"الحد الأدنى (OEM)",v:"من 100 كجم"},{k:"مدة التسليم",v:"7–15 يومًا"},{k:"الملصقات",v:"تصميم علامتك"},{k:"العينات",v:"عينة مخصصة عند الطلب"},{k:"الوثائق",v:"COA / MSDS / TDS"}],
      notes:"أرسل لنا المواصفات المطلوبة أو عينة مرجعية وسنطابقها. اتفاقية سرية متاحة عند الطلب." }
  ],
  specs: [
    { grade:"YH-327",  color:"أزرق-أخضر",              mesh:"400 شبكة",       glow:"10–12 س", use:"طلاءات، أحبار، ماسترباتش",         badge:"الأكثر طلبًا" },
    { grade:"YH-329",  color:"أصفر-أخضر",              mesh:"600 شبكة",       glow:"8–10 س",  use:"بلاستيك، مطاط، حرف",               badge:"" },
    { grade:"YH-805",  color:"أزرق سماوي",             mesh:"800 شبكة",       glow:"6–8 س",   use:"ديكور، منسوجات، أفلام",            badge:"" },
    { grade:"YH-331C", color:"أزرق-أخضر (مقاوم للماء)",mesh:"500 شبكة",       glow:"10–12 س", use:"طلاءات خارجية، أسمنت، علامات طرق", badge:"مطلي" },
    { grade:"YH-Fine", color:"أزرق-أخضر",              mesh:"1500–2000 شبكة", glow:"5–8 س",   use:"أحبار الطباعة، حرف تجميلية",       badge:"" }
  ],
  faq: [
    { q:"هل تتوفر عينات؟", a:"نعم — عينات مجانية 50–100 غرام من الدرجات القياسية متاحة؛ تتحمل أنت تكلفة الشحن السريع (DHL / FedEx / UPS). الدرجات المخصصة تُسعّر بشكل فردي." },
    { q:"ما الفرق بين ألوان المسحوق المتوهج؟", a:"الأزرق-الأخضر الأكثر سطوعًا وأطول توهجًا (10–12 ساعة)؛ الأصفر-الأخضر يبدو أكثر سطوعًا في البداية؛ الأزرق السماوي والألوان المخصصة مناسبة للاستخدامات الزخرفية مع توهج أقصر قليلاً." },
    { q:"هل المسحوق آمن؟", a:"صبغة ألومينات السترونشيوم غير سامة وغير مشعة ومستقرة كيميائيًا. تُرفق وثائق المطابقة (MSDS وتقارير الاختبار) مع كل شحنة. تجنب استنشاق الغبار واستخدم معدات الحماية القياسية." },
    { q:"ما هو الحد الأدنى للطلب وشروط الدفع ومدة التسليم؟", a:"الدرجات القياسية: الحد الأدنى من 1 كجم للطلبات التجريبية، و100+ كجم للمخزون. الدفع: حوالة بنكية، ويسترن يونيون، ضمان التجارة من علي بابا. مدة التسليم: 3–7 أيام للمخزون، 7–15 يومًا لطلبات OEM." },
    { q:"ما شروط التجارة الدولية التي تدعمونها؟", a:"EXW، FOB تشينغداو/شنغهاي، CIF لمعظم الموانئ، وDDP لدول مختارة. يرتب فريقنا الشحن جوًا وبحرًا وبابًا إلى باب." }
  ]
};

export function getDefaults(lang){
  return lang === "ar" ? DEFAULTS_AR : DEFAULTS_EN;
}