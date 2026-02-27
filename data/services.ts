export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  benefits: string[];
  features: string[];
  process: { title: string; description: string }[];
  image: string;
  icon: string;
  faqs: FAQ[];
  /** Used to generate unique content per location */
  locationIntros: Record<string, string>;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Garden Office Installation',
    slug: 'garden-office-installation',
    description: 'Professional installation of insulated, year-round garden offices designed for remote working.',
    longDescription: "Transform your work-from-home experience with a bespoke garden office. Our network of professional installers across London provides dedicated, quiet, and comfortable workspaces separate from your main house. Designed for year-round use, these garden offices are fully insulated, secure, and built to the highest standards — ensuring you can focus on your business without distractions.",
    benefits: [
      "Separate work and home life for better productivity",
      "Add significant value to your property",
      "Eliminate commuting time and costs",
      "Professional environment for client meetings",
      "Potential tax relief for business use"
    ],
    features: [
      "High-grade thermal insulation for year-round comfort",
      "Double or triple glazed windows and doors",
      "Secure locking systems",
      "Full electrical packages including data points",
      "Durable, low-maintenance exterior cladding"
    ],
    process: [
      { title: "Free Consultation", description: "We discuss your requirements, budget, and site conditions — completely free of charge." },
      { title: "Bespoke Design", description: "Your matched installer creates a design that fits your garden and working needs perfectly." },
      { title: "Professional Installation", description: "Efficient construction with minimal disruption to your home, typically 1-2 weeks." },
      { title: "Final Handover", description: "Thorough checks and walkthrough to ensure your complete satisfaction before sign-off." }
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    icon: 'Briefcase',
    faqs: [
      {
        question: "Do I need planning permission for a garden office?",
        answer: "In most cases, garden offices fall under 'permitted development' rights and do not require planning permission, provided they meet certain criteria regarding height (2.5m near boundaries) and location. However, we always recommend checking with your local authority, especially for listed buildings or conservation areas."
      },
      {
        question: "Is the garden office suitable for year-round use?",
        answer: "Yes. All our recommended installers specialise in fully insulated garden rooms with double or triple glazing and heating options, ensuring a comfortable workspace throughout winter and summer."
      },
      {
        question: "How long does a typical installation take?",
        answer: "Most garden office installations take between 1-2 weeks depending on size and specification. Modular options can sometimes be installed in as little as 2-3 days."
      },
      {
        question: "What size garden office do I need?",
        answer: "For a single-person office, we recommend at least 3m x 2.5m. For a shared workspace or one with meeting space, 4m x 3m or larger is ideal. Your installer will help you determine the best size for your needs."
      },
      {
        question: "Can I get internet and power in the garden office?",
        answer: "Absolutely. All installations include a full electrical package. Internet can be provided via an ethernet cable from the house, a powerline adapter, or a dedicated WiFi extender."
      }
    ],
    locationIntros: {
      'central-london': "With space at a premium in Central London, a garden office is one of the smartest investments a homeowner can make. Our vetted installers understand the unique challenges of building in tightly packed urban plots — from restricted access to conservation area rules — and deliver beautiful, functional offices that maximise every square foot.",
      'north-london': "North London's tree-lined suburbs from Barnet to Highgate are ideal for garden offices. With larger-than-average gardens and a high concentration of remote workers, our installers in North London have extensive experience creating productive home workspaces that blend with the area's leafy character.",
      'east-london': "East London's creative energy extends into the garden. From Hackney conversions to Walthamstow family homes, our recommended installers bring a design-forward approach to garden offices. They understand the mix of Victorian terraces and new-builds across East London and can work with any garden size.",
      'south-london': "From the Victorian gardens of Dulwich to the generous plots of Bromley, South London offers excellent conditions for garden offices. Our local installers know the planning nuances across boroughs like Lewisham, Greenwich, and Croydon, and deliver offices that add real value to South London properties.",
      'west-london': "West London's premium residential areas demand premium garden rooms. Our installers serving Ealing, Richmond, and Chiswick specialise in high-end garden offices with architectural finishes that complement the area's sought-after period properties.",
      'nw-london': "From Hampstead's conservation areas to Wembley's modern developments, North West London presents diverse challenges for garden office installation. Our vetted local installers navigate the specific planning requirements across Camden, Brent, and Harrow with expertise built over years of local projects.",
      'ne-london': "North East London — from Walthamstow to Woodford — is seeing a boom in garden office installations as remote work becomes permanent. Our recommended installers in the area offer competitive pricing and understand the mix of 1930s semis and post-war housing that defines the NE London landscape.",
      'sw-london': "South West London's family-friendly suburbs like Wimbledon, Putney, and Clapham are perfectly suited to garden offices. With strong property values and excellent gardens, a well-built garden office here isn't just a workspace — it's a serious investment that our local installers can help you realise.",
      'se-london': "South East London, from Blackheath to Bromley, offers some of the best gardens in the capital for office builds. Our SE London installers specialise in working with the area's varied terrain and deliver offices that meet the high expectations of homeowners in Greenwich, Lewisham, and beyond."
    }
  },
  {
    id: '2',
    title: 'Soundproof Music Studios',
    slug: 'soundproof-music-studios',
    description: 'Acoustically treated garden rooms for musicians, producers, and podcasters.',
    longDescription: "Create your perfect creative sanctuary with a soundproof garden music studio. Whether you're a professional producer, a band needing rehearsal space, a music teacher, or a podcaster, our recommended garden studios deliver superior acoustic performance. We understand the importance of sound isolation and internal acoustics, connecting you with specialists who build spaces where you can play, record, and mix without disturbing the neighbours.",
    benefits: [
      "Professional-grade sound isolation",
      "Optimised internal acoustics for recording and mixing",
      "24/7 access to your creative space",
      "Privacy and separation from the household",
      "Customisable layout for equipment and instruments"
    ],
    features: [
      "Decoupled 'room-within-a-room' construction",
      "Acoustic glass and heavy-duty soundproof doors",
      "Silent ventilation and climate control systems",
      "Specialised acoustic treatment panels",
      "Floating floors to minimise vibration transmission"
    ],
    process: [
      { title: "Acoustic Assessment", description: "Evaluate your noise requirements, intended instruments, and site conditions." },
      { title: "Technical Design", description: "Detailed plans focusing on soundproofing specifications and acoustic treatment." },
      { title: "Specialist Build", description: "Construction using specialist acoustic materials and decoupled building techniques." },
      { title: "Sound Testing", description: "Professional sound checks to ensure performance meets your specifications." }
    ],
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1200',
    icon: 'Music',
    faqs: [
      {
        question: "How effective is the soundproofing?",
        answer: "Our specialist installers use high-density acoustic insulation, decoupled structures, and acoustic glass to achieve significant sound reduction — typically 40-50dB — making them suitable for drumming, amplified instruments, and recording."
      },
      {
        question: "Can I install air conditioning in a music studio?",
        answer: "Yes, and it's recommended. Our installers fit silent HVAC systems specifically designed for studio environments that won't interfere with recordings or produce unwanted noise."
      },
      {
        question: "How much does a soundproof garden studio cost?",
        answer: "Prices typically range from £25,000 to £60,000+ depending on size and acoustic specification. Soundproof studios cost more than standard garden rooms due to specialist materials and construction methods."
      }
    ],
    locationIntros: {
      'central-london': "In Central London, noise regulations are strict and neighbours are close. Our specialist soundproof studio installers in Central London use advanced acoustic engineering to ensure you can play, record, and produce at any hour without complaints — even in densely built areas like Islington and Camden.",
      'north-london': "North London has a rich musical heritage, and our recommended studio installers understand what musicians here need. From Finchley to Muswell Hill, they build studios that handle everything from acoustic sessions to full band rehearsals, with soundproofing that respects the suburban quiet.",
      'east-london': "East London's thriving music scene makes it a hotspot for garden studio builds. Our installers serving Hackney, Leyton, and Stratford specialise in compact, high-performance studios that deliver professional-grade acoustics even in smaller urban gardens.",
      'south-london': "South London's vibrant music community — from Brixton's live scene to Peckham's studios — drives strong demand for private recording spaces. Our recommended installers across South London build studios that handle everything from grime production to jazz rehearsal.",
      'west-london': "West London's musical pedigree speaks for itself. Our studio installers in areas like Hammersmith, Shepherd's Bush, and Notting Hill create acoustically perfect spaces for professionals who demand the best, with soundproofing that keeps the peace in premium residential streets.",
      'nw-london': "From Abbey Road's legacy to Camden's live music scene, North West London is music territory. Our specialist installers in NW London build studios that honour this tradition, delivering professional-grade acoustic isolation in residential gardens across Hampstead, Kilburn, and St John's Wood.",
      'ne-london': "North East London's growing creative community is driving demand for home studios. Our installers in Walthamstow, Chingford, and Woodford offer excellent value for soundproof builds, making professional music production accessible to NE London's musicians and producers.",
      'sw-london': "South West London's leafy suburbs provide ideal conditions for garden music studios. Our recommended installers in Wimbledon, Putney, and Clapham build discreet, high-performance studios that let you create without disturbing the neighbourhood's tranquil character.",
      'se-london': "South East London's diverse music scene needs diverse studio solutions. Our installers across Greenwich, Lewisham, and Bromley create everything from intimate podcasting booths to full drum-ready rehearsal rooms, all with professional-grade soundproofing."
    }
  },
  {
    id: '3',
    title: 'Garden Gyms',
    slug: 'garden-gyms',
    description: 'Personal fitness spaces with reinforced floors built directly in your garden.',
    longDescription: "Achieve your fitness goals with a private garden gym just steps from your back door. No more commuting to the gym or waiting for equipment. Our recommended garden gym installers across London build spaces designed to handle heavy equipment and high-impact workouts, with reinforced floors and ample headroom. Create a motivating environment tailored to your workout style — whether that's weights, cardio, yoga, CrossFit, or martial arts.",
    benefits: [
      "Convenience of a home gym without losing an indoor room",
      "Save hundreds per year on gym memberships and travel",
      "Complete privacy to workout on your schedule",
      "Customisable for your specific equipment and activities",
      "Year-round use with proper insulation and climate control"
    ],
    features: [
      "Reinforced flooring rated for heavy weights and impacts",
      "Extra-height ceilings (2.4m+) for overhead exercises",
      "Climate control for comfortable workouts year-round",
      "Full-length mirrors and specialist lighting options",
      "Secure access and durable, easy-clean finishes"
    ],
    process: [
      { title: "Site Survey", description: "Assess ground conditions, access routes for materials, and electrical supply." },
      { title: "Gym Layout Design", description: "Detailed planning for your specific equipment, activities, and space requirements." },
      { title: "Heavy-Duty Build", description: "Reinforced construction with structural flooring to support gym use." },
      { title: "Fit Out & Handover", description: "Installation of specialist flooring, electrics, climate control, and final checks." }
    ],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200',
    icon: 'Dumbbell',
    faqs: [
      {
        question: "Does the floor need reinforcement for heavy weights?",
        answer: "Yes. Garden gyms require a reinforced floor structure to handle the weight of equipment (squat racks, plates, machines) and impact from dropping weights. Our installers design the base specifically for gym use, typically using steel or engineered timber subframes."
      },
      {
        question: "What is the minimum ceiling height for a garden gym?",
        answer: "We recommend an internal height of at least 2.4m for overhead exercises like shoulder press and pull-ups. 2.5m is ideal if permitted within your area's planning guidelines."
      },
      {
        question: "Can I install a sauna or shower in a garden gym?",
        answer: "Yes. Plumbing can be extended to garden buildings for showers, and infrared saunas are popular additions. Your installer can advise on the best setup for your needs."
      }
    ],
    locationIntros: {
      'central-london': "Space is precious in Central London, making a garden gym the ultimate home fitness upgrade. Our recommended installers in Central London are experts at maximising compact spaces — building gyms that fit Olympic platforms and squat racks into surprisingly small garden footprints across Westminster, Kensington, and Islington.",
      'north-london': "North London's health-conscious residents are embracing garden gyms. From Barnet's family homes to Highgate's period properties, our installers build reinforced, climate-controlled workout spaces that save you the daily trek to a crowded gym.",
      'east-london': "East London's CrossFit and strength training community is strong, and our garden gym installers across Hackney, Stratford, and Newham build spaces tough enough to handle serious training — with reinforced floors, proper ventilation, and room for full rigs.",
      'south-london': "South London's fitness enthusiasts are converting gardens into private gyms across Clapham, Dulwich, and Croydon. Our recommended installers deliver heavy-duty builds with the reinforced structural work needed for free weights and cardio equipment.",
      'west-london': "West London's premium fitness culture extends into the garden. Our installers in Richmond, Ealing, and Chiswick create luxury home gyms with high-end finishes, climate control, and smart home integration — a step above any commercial gym.",
      'nw-london': "From Hampstead's wellness scene to Harrow's family homes, North West London is prime territory for garden gyms. Our local installers build everything from compact HIIT spaces to fully equipped weight rooms, all with proper reinforcement for heavy use.",
      'ne-london': "North East London offers excellent value for garden gym installations. Our recommended builders in Walthamstow, Woodford, and Ilford deliver solid, well-insulated gyms that transform your training routine without breaking the bank.",
      'sw-london': "South West London's active communities in Wimbledon, Putney, and Battersea are ideal for garden gyms. Our installers here are experienced with the larger garden plots typical of SW London, often incorporating extras like saunas and outdoor shower areas.",
      'se-london': "South East London's growing fitness scene is driving demand for home gym builds. Our installers across Blackheath, Greenwich, and Bromley deliver reinforced garden gyms that can handle everything from powerlifting to Peloton."
    }
  },
  {
    id: '4',
    title: 'Bespoke Garden Rooms',
    slug: 'bespoke-garden-rooms',
    description: 'Custom-designed garden buildings tailored to your exact specifications and style.',
    longDescription: "Don't settle for off-the-shelf. Our bespoke garden room installers design from the ground up to match your exact specifications, materials, and aesthetic vision. Whether you have an awkwardly shaped garden, specific material requirements, or a unique multi-purpose brief, our network of craftspeople bring it to life. From contemporary architectural statements to traditional timber retreats, we connect you with builders who create spaces that complement your home perfectly.",
    benefits: [
      "Maximise space in irregular or awkward-shaped gardens",
      "Choose materials that perfectly match your home's style",
      "Unique designs that reflect your personality",
      "Flexible layouts for multi-purpose use",
      "High-end finishes and custom architectural features"
    ],
    features: [
      "Full architectural design services included",
      "Choice of premium cladding (Cedar, Larch, Composite, Zinc)",
      "Custom glazing configurations (Bi-folds, Sliding, Corner windows)",
      "Integrated decking, landscaping, and green roof options",
      "Smart home integration and underfloor heating"
    ],
    process: [
      { title: "Discovery Consultation", description: "In-depth discussion to understand your vision, lifestyle, and how you'll use the space." },
      { title: "Architectural Design", description: "Detailed drawings, material selection, and 3D visualisations for your approval." },
      { title: "Planning Support", description: "Full management of any necessary planning applications or neighbour consultations." },
      { title: "Expert Craftsmanship", description: "Skilled construction with meticulous attention to every detail and finish." }
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    icon: 'Home',
    faqs: [
      {
        question: "Can a bespoke garden room include a toilet or shower?",
        answer: "Yes. Plumbing can be installed in bespoke garden rooms by connecting to the main house's water and waste systems. Our recommended installers manage the full process including groundwork and building control compliance."
      },
      {
        question: "What foundations are used?",
        answer: "The most common options are ground screws and concrete pad foundations. Both minimise disruption to your garden while providing a stable, long-lasting base. Your installer will recommend the best option based on your soil conditions."
      },
      {
        question: "How long does a bespoke build take?",
        answer: "Bespoke projects typically take 3-6 weeks from start of construction, plus 2-4 weeks for design and planning. More complex builds with plumbing or planning applications may take longer."
      }
    ],
    locationIntros: {
      'central-london': "Bespoke garden rooms in Central London demand architectural sensitivity. Our recommended designers and builders in Westminster, Chelsea, and Islington create stunning contemporary and traditional garden buildings that respect conservation areas while pushing creative boundaries within permitted development rules.",
      'north-london': "North London's diverse architecture — from Edwardian terraces in Crouch End to modern builds in Barnet — calls for bespoke solutions. Our installers design garden rooms that complement each property's unique character, using premium materials that age beautifully alongside the main house.",
      'east-london': "East London's design-conscious homeowners want garden rooms that make a statement. Our bespoke builders in Hackney, Waltham Forest, and Tower Hamlets embrace bold, contemporary designs with features like green roofs, Corten steel, and floor-to-ceiling glazing.",
      'south-london': "South London's varied housing stock — from Victorian villas in Dulwich to inter-war semis in Croydon — benefits from bespoke design. Our recommended builders craft garden rooms that feel like natural extensions of each property, not bolt-on additions.",
      'west-london': "West London homeowners expect exceptional quality, and our bespoke garden room builders deliver. Serving Kensington, Richmond, and Ealing, they create architectural garden buildings with premium materials, smart home technology, and finishes that rival high-end interior design.",
      'nw-london': "The diverse streetscapes of North West London — from Hampstead's Georgian elegance to Wembley's modern housing — require adaptable, bespoke design. Our builders in NW London excel at creating garden rooms that feel intentional and permanent, whatever the architectural context.",
      'ne-london': "North East London's homeowners are discovering that bespoke doesn't mean unaffordable. Our recommended builders in Walthamstow, Woodford, and Ilford create custom garden rooms with thoughtful design and quality materials at prices that make sense for the area.",
      'sw-london': "South West London's premium housing market warrants premium garden rooms. Our bespoke builders in Wimbledon, Putney, and Kingston create standout designs that become genuine selling points — adding measurable value to already valuable properties.",
      'se-london': "From Blackheath's period homes to Bromley's leafy estates, South East London offers varied canvases for bespoke garden rooms. Our recommended builders deliver designs that respect each neighbourhood's character while creating something genuinely unique."
    }
  },
  {
    id: '5',
    title: 'Garden Annexes',
    slug: 'garden-annexes',
    description: 'Self-contained living spaces perfect for guests, family, or rental income.',
    longDescription: "Provide comfortable, independent living space for family members with a self-contained garden annex. Perfect for elderly relatives (Granny Annexes), young adults needing independence, guest accommodation, or even rental income. Our recommended installers build fully habitable homes to building control standards, complete with kitchens, bathrooms, and living areas. They offer a cost-effective alternative to care homes, house extensions, or buying a separate property.",
    benefits: [
      "Keep family close while maintaining independence and privacy",
      "Cost-effective alternative to care homes or house extensions",
      "Increase your property value significantly",
      "Faster construction compared to traditional building extensions",
      "Potential rental income stream (subject to planning)"
    ],
    features: [
      "Full kitchen and bathroom installation",
      "Building Control compliant construction",
      "Accessible design options (ramps, wet rooms, wide doorways)",
      "High-performance insulation exceeding Part L requirements",
      "Separate utility connections and metering"
    ],
    process: [
      { title: "Feasibility Assessment", description: "Check planning viability, site suitability, and building control requirements for habitable space." },
      { title: "Planning Application", description: "Full management of the planning permission process, including design and submit documentation." },
      { title: "Building Control", description: "Ensuring all regulations for habitable space are met, including fire safety and accessibility." },
      { title: "Complete Construction", description: "Full build including all utilities, plumbing, electrics, and interior finishes." }
    ],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    icon: 'House',
    faqs: [
      {
        question: "Do I need planning permission for a garden annex?",
        answer: "Yes. Garden annexes intended for sleeping or living accommodation almost always require planning permission, as they go beyond permitted development rights. Our partner installers manage the full application process on your behalf."
      },
      {
        question: "Can I rent out a garden annex?",
        answer: "This depends on your planning permission conditions. Some approvals restrict use to 'ancillary' accommodation for family only, while others permit independent letting. We recommend discussing your intentions with your installer at the feasibility stage."
      },
      {
        question: "How much does a garden annex cost?",
        answer: "Garden annexes typically cost between £60,000 and £120,000+ depending on size, specification, and finishing level. While this is more than a standard garden room, it's significantly less than a traditional extension or buying additional property."
      }
    ],
    locationIntros: {
      'central-london': "A garden annex in Central London is a serious asset. With property prices at a premium, our recommended annex builders in Westminster, Islington, and Camden help homeowners create self-contained living spaces that can house family, guests, or generate rental income — all while navigating the area's stringent planning requirements.",
      'north-london': "North London's established residential areas in Barnet, Enfield, and Haringey are seeing growing demand for garden annexes. Our local builders understand the planning landscape across North London boroughs and build compliant, comfortable annexes that keep families together while maintaining independence.",
      'east-london': "East London's multigenerational families are turning to garden annexes as a practical housing solution. Our recommended builders across Newham, Redbridge, and Waltham Forest deliver building-control-compliant annexes with full kitchens and bathrooms at competitive prices.",
      'south-london': "South London's larger garden plots — particularly in Bromley, Croydon, and Sutton — are ideal for garden annexes. Our installers here have extensive experience with planning applications and build fully compliant annexes that add genuine value to South London properties.",
      'west-london': "West London's high property values make garden annexes particularly attractive as both family accommodation and investment. Our recommended builders in Richmond, Hounslow, and Ealing create high-specification annexes with premium finishes that maximise the return on your investment.",
      'nw-london': "North West London's family-oriented communities across Harrow, Brent, and Barnet are embracing garden annexes. Our local builders deliver fully habitable, accessible living spaces that comply with all building regulations while keeping families connected under one roof — just with separate front doors.",
      'ne-london': "Garden annexes in North East London offer outstanding value. With lower land costs and generally more relaxed planning in areas like Havering, Redbridge, and Barking & Dagenham, our recommended builders help NE London homeowners create additional living space at a fraction of extension costs.",
      'sw-london': "South West London's premium housing market in Wimbledon, Kingston, and Richmond makes garden annexes a smart investment. Our recommended builders create high-end, fully self-contained units that serve as guest suites, family accommodation, or high-yield rental properties.",
      'se-london': "South East London offers excellent opportunities for garden annexes, with many properties in Bromley, Bexley, and Greenwich having suitable garden sizes. Our recommended builders navigate the varying planning approaches across SE London boroughs and deliver compliant, comfortable living spaces."
    }
  },
  {
    id: '6',
    title: 'Garden Art Studios',
    slug: 'garden-art-studios',
    description: 'Light-filled creative spaces designed for artists, crafters, and hobbyists.',
    longDescription: "Unleash your creativity in a purpose-built garden art studio. We connect you with specialist installers who design spaces prioritising natural light, ventilation, and practicality. Whether you paint, sculpt, sew, throw pottery, or craft, a dedicated studio allows you to leave your work out and return to it whenever inspiration strikes. Enjoy the peace and quiet of the garden while you work — no more clearing the dining table.",
    benefits: [
      "Abundant natural light for accurate colour work",
      "Dedicated space to leave projects set up permanently",
      "Peaceful, inspiring environment for creative concentration",
      "Easy-to-clean surfaces and practical, hardwearing layouts",
      "Inspiration from your garden surroundings through generous glazing"
    ],
    features: [
      "North-facing or skylighted glazing for consistent, even light",
      "Velux skylights and large bi-fold or sliding doors",
      "Utility sinks and practical, easy-clean flooring",
      "Tall ceilings for large canvases, easels, or equipment",
      "Ventilation systems for fumes, dust, or kiln extraction"
    ],
    process: [
      { title: "Light & Orientation Analysis", description: "Site assessment to position the studio for optimal, consistent natural light." },
      { title: "Creative Layout Design", description: "Planning for storage, work surfaces, sinks, power, and your specific creative needs." },
      { title: "Specialist Build", description: "Constructing a bright, airy, and fully insulated shell with your chosen glazing." },
      { title: "Finishing & Fit-Out", description: "Installing practical flooring, task lighting, ventilation, and utility connections." }
    ],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
    icon: 'Palette',
    faqs: [
      {
        question: "How do you maximise natural light in a garden studio?",
        answer: "Our recommended installers use large glazing panels, skylights, and careful orientation (north-facing where possible) to ensure consistent, even natural light — which is crucial for colour-accurate art work."
      },
      {
        question: "Can I install a kiln in a garden art studio?",
        answer: "Yes, with proper electrical supply and ventilation. Ceramic kilns require adequate power (often 32A or higher) and heat extraction. Our specialist installers can advise on the specific requirements for your equipment."
      },
      {
        question: "Is the space suitable for messy work like pottery or sculpture?",
        answer: "Absolutely. We recommend durable, easy-to-clean flooring (vinyl, polished concrete, or commercial-grade laminate), utility sinks, and splash-resistant wall finishes — all of which our installers can provide."
      }
    ],
    locationIntros: {
      'central-london': "Central London's thriving art scene extends into the garden. Our specialist studio installers in areas like Islington, Camden, and Southwark create light-filled creative spaces in even the most compact urban gardens — using clever glazing and orientation to maximise natural light where space is limited.",
      'north-london': "North London's artistic communities — from Highgate's painters to Crouch End's craftspeople — are natural candidates for garden art studios. Our recommended installers understand the importance of light quality and build studios with north-facing glazing and skylights that deliver consistent, even illumination.",
      'east-london': "East London is the creative heart of the capital, and our garden studio installers match that energy. Serving artists across Hackney, Walthamstow, and Bow, they build studios with generous glazing, practical flooring, and the kind of raw, industrial-meets-garden aesthetic that East London creatives love.",
      'south-london': "South London's creative communities in Peckham, Brixton, and Dulwich are embracing garden art studios. Our recommended installers deliver beautifully lit spaces with practical features — utility sinks, kiln-ready electrics, and ventilation — that let South London artists focus on their craft.",
      'west-london': "West London's cultural heritage inspires some of our finest garden studio builds. Our installers in Hammersmith, Kensington, and Richmond create elegant, light-filled studios that double as beautiful garden features — with premium finishes and architectural glazing that impresses as much as it performs.",
      'nw-london': "From Hampstead's artistic tradition to Camden's creative pulse, North West London has always nurtured artists. Our recommended studio builders in NW London create dedicated creative spaces with optimised natural light, proper ventilation, and the peace and quiet that creative work demands.",
      'ne-london': "North East London's growing creative community is finding that garden studios offer the perfect balance of affordability and quality. Our recommended builders in Walthamstow, Leyton, and Woodford create bright, practical studios that give NE London artists their own dedicated creative haven.",
      'sw-london': "South West London's leafy gardens in Wimbledon, Putney, and Richmond are perfect settings for art studios. Our recommended installers create light-filled spaces with generous skylights and bi-fold doors that connect the creative interior with the garden's natural beauty.",
      'se-london': "South East London's artistic communities across Deptford, Peckham, and Greenwich are embracing garden studios as commercial studio rents soar. Our recommended builders deliver professional-grade creative spaces with proper lighting, ventilation, and utility connections at a fraction of ongoing studio costs."
    }
  }
];

export const getAllServiceSlugs = (): string[] => services.map(s => s.slug);
export const getServiceBySlug = (slug: string): Service | undefined => services.find(s => s.slug === slug);
