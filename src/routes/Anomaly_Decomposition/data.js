const data = [
  {
    name: 'Top Level',
    children: [
      {
        name: 'Level 2: A',
        children: [
          { name: 'Level 3A: A' },
          { name: 'Level 3A:B' },
          { name: 'Level 3A:C' },
          { name: 'Level 3A:D' }
        ]
      },
      {
        name: 'Level 2: B',
        children: [
          { name: 'Level 3B: A' },
          {
            name: 'Level 3B:B',
            children: [
              { name: 'Level 3BB:1' },
              { name: 'Level 3BB:2' },
              { name: 'Level 3BB:3' },
              {
                name: 'Level 3BB:4',
                children: [{ name: 'Level 3BB4:1' }, { name: 'Level 3BB4:2' }]
              }
            ]
          }
        ]
      }
    ]
  }
];

export default data;
