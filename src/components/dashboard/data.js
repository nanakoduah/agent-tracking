const kpiData = [
  { target: 2000, achieved: 88, name: 'payment' },
  { target: 1500, achieved: 58, name: 'customers' },
  { target: 20, achieved: 12, name: 'revenue' },
  { target: 1000, achieved: 76, name: 'saving' }
];

const agents = [
  {
    agentCode: '7XTWEGDGTYWTE',
    agentName: 'BABA FUSEINI',
    agentgroup: 2,
    noSubAgents: 53,
    location: { lat: 8.0, lng: -2.3 },
    superAgent: 'SUPER 01'
  },
  {
    agentCode: 'HFSUYEWWEY89',
    agentName: 'KOFI KABOKO',
    agentgroup: 2,
    noSubAgents: 26,
    location: { lat: 7.8, lng: -2.1594 },
    superAgent: 'SUPER 04'
  },
  {
    agentCode: '63RRYRTFGH',
    agentName: 'BABA FUSEINI',
    agentgroup: 3,
    noSubAgents: 53,
    location: { lat: 7.98, lng: -1.99 },
    superAgent: 'SUPER 02'
  },
  {
    agentCode: 'RTUSDGD',
    agentName: 'DUGS MYKEL',
    agentgroup: 4,
    noSubAgents: 26,
    location: { lat: 7.5, lng: -2.0094 },
    superAgent: 'SUPER 04'
  }
];

export { kpiData, agents };
