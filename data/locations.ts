export interface SubLocation {
  name: string;
  slug: string;
}

export interface Location {
  id: string;
  name: string;
  slug: string;
  latitude: number;
  longitude: number;
  description: string;
  subLocations: SubLocation[];
}

function toSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function makeSubs(names: string[]): SubLocation[] {
  return names.map(name => ({ name, slug: toSlug(name) }));
}

export const locations: Location[] = [
  {
    id: '1',
    name: 'Central London',
    slug: 'central-london',
    latitude: 51.5074,
    longitude: -0.1278,
    description: "Central London's dense urban landscape presents unique challenges and opportunities for garden rooms. With premium property values and limited outdoor space, a well-designed garden room can be transformative — adding workspace, studio space, or even a self-contained annex to some of the most valuable real estate in the world.",
    subLocations: makeSubs(['Westminster', 'City of London', 'Kensington', 'Chelsea', 'Islington', 'Camden', 'Southwark', 'Lambeth', 'Hackney', 'Tower Hamlets', 'Holborn', 'Clerkenwell', 'Soho', 'Mayfair', 'Marylebone', 'Pimlico'])
  },
  {
    id: '2',
    name: 'North London',
    slug: 'north-london',
    latitude: 51.5908,
    longitude: -0.1096,
    description: "North London offers some of the best conditions for garden rooms in the capital. From Barnet's spacious plots to Highgate's tree-lined gardens, the area combines generous outdoor space with high concentrations of remote workers and creative professionals — making it a hotspot for garden offices, studios, and annexes.",
    subLocations: makeSubs(['Barnet', 'Enfield', 'Haringey', 'Finchley', 'Highgate', 'Muswell Hill', 'Wood Green', 'Tottenham', 'Southgate', 'Palmers Green', 'Edmonton', 'Whetstone', 'Mill Hill', 'Hendon', 'Crouch End', 'Hornsey'])
  },
  {
    id: '3',
    name: 'East London',
    slug: 'east-london',
    latitude: 51.5362,
    longitude: 0.0462,
    description: "East London's creative energy and diverse housing stock make it an exciting area for garden rooms. From Victorian terraces in Hackney to new-build developments in Stratford, our installers bring a design-forward approach to every project — whether it's a sleek home office, a soundproof studio, or a bespoke retreat.",
    subLocations: makeSubs(['Hackney', 'Tower Hamlets', 'Newham', 'Waltham Forest', 'Redbridge', 'Barking', 'Dagenham', 'Stratford', 'Canary Wharf', 'Bow', 'Poplar', 'East Ham', 'West Ham', 'Leyton', 'Chingford', 'Bethnal Green'])
  },
  {
    id: '4',
    name: 'South London',
    slug: 'south-london',
    latitude: 51.4225,
    longitude: -0.1030,
    description: "South London's varied landscape — from the Victorian elegance of Dulwich to the buzzing energy of Brixton — offers fantastic opportunities for garden rooms. Many South London properties boast generous gardens, and our recommended installers know the planning landscape across every borough.",
    subLocations: makeSubs(['Lambeth', 'Southwark', 'Lewisham', 'Greenwich', 'Croydon', 'Bromley', 'Sutton', 'Merton', 'Wandsworth', 'Brixton', 'Peckham', 'Camberwell', 'Dulwich', 'Crystal Palace', 'Streatham', 'Tooting'])
  },
  {
    id: '5',
    name: 'West London',
    slug: 'west-london',
    latitude: 51.5101,
    longitude: -0.3086,
    description: "West London's premium residential areas demand premium garden rooms. From Ealing's Edwardian streets to Richmond's riverside homes, the area's high property values and discerning homeowners push our recommended installers to deliver their finest work — with architectural finishes and attention to detail that complement some of London's most desirable properties.",
    subLocations: makeSubs(['Ealing', 'Hounslow', 'Hillingdon', 'Brent', 'Harrow', 'Hammersmith', 'Fulham', 'Richmond', 'Chiswick', 'Acton', 'Shepherds Bush', 'Notting Hill', 'Kensington', 'Maida Vale', 'Paddington', 'Bayswater'])
  },
  {
    id: '6',
    name: 'North West London',
    slug: 'nw-london',
    latitude: 51.5524,
    longitude: -0.2315,
    description: "North West London blends cultural richness with residential calm — from Hampstead's village atmosphere to Wembley's modern developments. Our recommended garden room installers across NW London navigate conservation areas, restrictive covenants, and varied garden sizes with the expertise that comes from years of local projects.",
    subLocations: makeSubs(['Hampstead', 'Kilburn', 'Mill Hill', 'Hendon', 'Golders Green', 'Wembley', 'Willesden', 'Neasden', 'Cricklewood', 'West Hampstead', 'Swiss Cottage', 'St Johns Wood', 'Queens Park', 'Kensal Rise', 'Brondesbury', 'Dollis Hill'])
  },
  {
    id: '7',
    name: 'North East London',
    slug: 'ne-london',
    latitude: 51.5833,
    longitude: 0.0333,
    description: "North East London offers excellent value for garden room installations. With a mix of inter-war housing, 1930s semis, and newer developments across areas like Walthamstow, Woodford, and Ilford, the area provides good-sized gardens and generally favourable planning conditions at more accessible price points than inner London.",
    subLocations: makeSubs(['Walthamstow', 'Leyton', 'Chingford', 'Woodford', 'Wanstead', 'Ilford', 'Romford', 'Hornchurch', 'Upminster', 'Rainham', 'Seven Kings', 'Goodmayes', 'Gants Hill', 'South Woodford', 'Loughton', 'Buckhurst Hill'])
  },
  {
    id: '8',
    name: 'South West London',
    slug: 'sw-london',
    latitude: 51.4426,
    longitude: -0.1968,
    description: "South West London's family-friendly suburbs — from Wimbledon's leafy streets to Clapham's Victorian terraces — are perfectly suited to garden rooms. Strong property values, excellent garden sizes, and a high proportion of professional families make SW London one of the most active areas for garden office and gym installations in the capital.",
    subLocations: makeSubs(['Wimbledon', 'Putney', 'Clapham', 'Battersea', 'Balham', 'Tooting', 'Streatham', 'Mitcham', 'Morden', 'New Malden', 'Surbiton', 'Kingston', 'Richmond', 'Twickenham', 'Wandsworth', 'Southfields'])
  },
  {
    id: '9',
    name: 'South East London',
    slug: 'se-london',
    latitude: 51.4500,
    longitude: 0.0000,
    description: "South East London combines value with character. From Blackheath's elegant period homes to Bromley's spacious family estates, SE London properties often feature the kind of generous gardens that are ideal for substantial garden room projects — including annexes, large studios, and fully-equipped home gyms.",
    subLocations: makeSubs(['Greenwich', 'Lewisham', 'Bexley', 'Bromley', 'Woolwich', 'Peckham', 'Dulwich', 'Crystal Palace', 'Sydenham', 'Eltham', 'Catford', 'Forest Hill', 'Blackheath', 'Charlton', 'Plumstead', 'Sidcup'])
  }
];

export const getAllLocationSlugs = (): string[] => locations.map(l => l.slug);
export const getLocationBySlug = (slug: string): Location | undefined => locations.find(l => l.slug === slug);

/** Find which parent location a sub-location belongs to */
export const findParentLocation = (subSlug: string): Location | undefined => {
  return locations.find(l => l.subLocations.some(s => s.slug === subSlug));
};
