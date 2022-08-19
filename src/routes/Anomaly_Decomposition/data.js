const data = [
  {
    name: 'Top Level',
    percentage: 50,
    eventcount: 86249,
    children: [
      {
        name: 'Level 2: A',
        percentage: 70,
        eventcount: 42151,
        children: [
          { name: 'Level 3A: A', percentage: 90, eventcount: 33374 },
          { name: 'Level 3A:B', percentage: 20, eventcount: 8074 },
          { name: 'Level 3A:C', percentage: 100, eventcount: 632 },
          { name: 'Level 3A:D', percentage: 50, eventcount: 89 }
        ]
      },
      {
        name: 'Level 2: B',
        percentage: 80,
        eventcount: 41762,
        children: [
          { name: 'Level 3B: A', percentage: 30, eventcount: 20462 },
          {
            name: 'Level 3B:B',
            percentage: 50,
            eventcount: 21300,
            children: [
              { name: 'Level 3BB:1', percentage: 50, eventcount: 10000 },
              { name: 'Level 3BB:2', percentage: 100, eventcount: 3300 },
              { name: 'Level 3BB:3', percentage: 90, eventcount: 3000 },
              {
                name: 'Level 3BB:4',
                percentage: 40,
                eventcount: 5000,
                children: [
                  { name: 'Level 3BB4:1', percentage: 30, eventcount: 2500 },
                  { name: 'Level 3BB4:2', percentage: 75, eventcount: 2500 }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

export default data;
