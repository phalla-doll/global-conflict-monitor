export interface IntelligenceEvent {
  id: string;
  category: 'ACTIVE' | 'ESCALATION' | 'POLITICAL' | 'ANALYSIS';
  country: string;
  escalation: number;
  headline: string;
  summary: string;
  actors: string;
  casualties: number;
  time: string;
  source: string;
  isNew: boolean;
  lat: number;
  lng: number;
  type: string;
}

export const mockData: IntelligenceEvent[] = [
  {
    id: 'event-1',
    category: 'ACTIVE',
    country: 'RUSSIA VS UKRAINE',
    escalation: 8.2,
    headline: 'Intensified artillery exchanges along eastern front',
    summary: 'AI Analysis indicates a 40% increase in artillery fire over the last 12 hours, suggesting preparation for localized offensives. Satellite imagery confirms movement of mechanized units towards staging areas.',
    actors: 'Russia vs Ukraine',
    casualties: 14,
    time: '12m ago',
    source: 'Reuters',
    isNew: true,
    lat: 48.3794,
    lng: 31.1656,
    type: 'ARTILLERY'
  },
  {
    id: 'event-2',
    category: 'ESCALATION',
    country: 'SOUTH CHINA SEA',
    escalation: 6.8,
    headline: 'Naval vessels shadow foreign carrier group',
    summary: 'Multiple fast attack craft observed shadowing carrier strike group. Radio warnings issued but no direct engagement. SIGINT intercepts suggest heightened readiness levels.',
    actors: 'China vs US',
    casualties: 0,
    time: '45m ago',
    source: 'OSINT',
    isNew: true,
    lat: 14.5995,
    lng: 114.5155,
    type: 'NAVAL'
  },
  {
    id: 'event-3',
    category: 'POLITICAL',
    country: 'MIDDLE EAST',
    escalation: 5.4,
    headline: 'Emergency diplomatic summit called in Cairo',
    summary: 'Regional leaders convene following recent border incursions. Sanctions package being drafted. Diplomatic cables indicate a low probability of immediate de-escalation.',
    actors: 'Multiple',
    casualties: 0,
    time: '2h ago',
    source: 'Al Jazeera',
    isNew: false,
    lat: 30.0444,
    lng: 31.2357,
    type: 'DIPLOMATIC'
  },
  {
    id: 'event-4',
    category: 'ANALYSIS',
    country: 'RED SEA',
    escalation: 7.1,
    headline: 'Maritime shipping disruption index rises',
    summary: 'Commercial shipping routes showing increased deviation patterns due to localized conflict risks. Insurance premiums for the corridor have spiked by 15% in the last 24 hours.',
    actors: 'Houthi Rebels vs Coalition',
    casualties: 0,
    time: '4h ago',
    source: 'Internal AI',
    isNew: false,
    lat: 16.5,
    lng: 41.0,
    type: 'MARITIME'
  },
  {
    id: 'event-5',
    category: 'ACTIVE',
    country: 'SUDAN',
    escalation: 7.9,
    headline: 'Heavy fighting reported in capital outskirts',
    summary: 'Urban combat intensifies near key infrastructure. Reports of airstrikes targeting supply depots. Civilian evacuation corridors remain compromised.',
    actors: 'SAF vs RSF',
    casualties: 42,
    time: '1h ago',
    source: 'UNHCR',
    isNew: true,
    lat: 15.5007,
    lng: 32.5599,
    type: 'URBAN COMBAT'
  },
  {
    id: 'event-6',
    category: 'ESCALATION',
    country: 'KOREAN PENINSULA',
    escalation: 6.5,
    headline: 'Unannounced missile test detected',
    summary: 'Early warning systems tracked two short-range ballistic missiles launched towards the eastern sea. Flight data suggests testing of new solid-fuel capabilities.',
    actors: 'North Korea',
    casualties: 0,
    time: '3h ago',
    source: 'JCS',
    isNew: false,
    lat: 39.0392,
    lng: 125.7625,
    type: 'MISSILE TEST'
  },
  {
    id: 'event-7',
    category: 'POLITICAL',
    country: 'TAIWAN STRAIT',
    escalation: 5.8,
    headline: 'Air defense identification zone incursions',
    summary: 'Record number of military aircraft entered the ADIZ over a 24-hour period. Sorties included fighter jets and electronic warfare aircraft.',
    actors: 'China vs Taiwan',
    casualties: 0,
    time: '5h ago',
    source: 'MND',
    isNew: false,
    lat: 24.1477,
    lng: 119.5,
    type: 'AIRSPACE'
  },
  {
    id: 'event-8',
    category: 'ACTIVE',
    country: 'SAHEL REGION',
    escalation: 6.9,
    headline: 'Insurgent attack on military outpost',
    summary: 'Coordinated assault involving VBIEDs and small arms fire. Reinforcements delayed due to improvised explosive devices on approach routes.',
    actors: 'State Forces vs Insurgents',
    casualties: 18,
    time: '6h ago',
    source: 'Local Media',
    isNew: false,
    lat: 13.5116,
    lng: 2.1254,
    type: 'TERRORISM'
  },
  {
    id: 'event-9',
    category: 'ANALYSIS',
    country: 'GLOBAL CYBER',
    escalation: 6.0,
    headline: 'Critical infrastructure targeted by APT group',
    summary: 'Pattern analysis reveals coordinated scanning and exploitation attempts against energy sector networks across Europe. Attribution points to state-sponsored actors.',
    actors: 'APT29 vs EU Energy Sector',
    casualties: 0,
    time: '8h ago',
    source: 'Cyber Command',
    isNew: false,
    lat: 50.1109,
    lng: 8.6821,
    type: 'CYBER'
  },
  {
    id: 'event-10',
    category: 'ESCALATION',
    country: 'EASTERN EUROPE',
    escalation: 5.2,
    headline: 'Troop buildup detected near border',
    summary: 'Commercial satellite imagery reveals new encampments and logistics hubs established within 50km of the border. Estimated 15,000 personnel deployed.',
    actors: 'Belarus vs NATO',
    casualties: 0,
    time: '12h ago',
    source: 'Maxar',
    isNew: false,
    lat: 53.9006,
    lng: 27.5590,
    type: 'TROOP MOVEMENT'
  },
  {
    id: 'event-11',
    category: 'POLITICAL',
    country: 'UNITED NATIONS',
    escalation: 3.5,
    headline: 'Resolution vetoed in Security Council',
    summary: 'Draft resolution calling for immediate ceasefire vetoed. Alternative proposals being circulated among non-permanent members.',
    actors: 'UNSC',
    casualties: 0,
    time: '14h ago',
    source: 'UN Web TV',
    isNew: false,
    lat: 40.7489,
    lng: -73.9680,
    type: 'DIPLOMATIC'
  },
  {
    id: 'event-12',
    category: 'ACTIVE',
    country: 'MYANMAR',
    escalation: 7.2,
    headline: 'Rebel coalition captures regional command center',
    summary: 'Weeks of siege culminate in the fall of a major military base. Significant cache of weapons and ammunition reportedly seized by opposition forces.',
    actors: 'Junta vs EAOs',
    casualties: 56,
    time: '18h ago',
    source: 'Irrawaddy',
    isNew: false,
    lat: 21.9162,
    lng: 95.9560,
    type: 'GROUND COMBAT'
  }
];
