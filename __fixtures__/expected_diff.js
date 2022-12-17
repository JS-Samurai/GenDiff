export default () => {
  const diff = [
    {
      key: 'common',
      value: [
        { key: 'follow', value: false, type: 'added' },
        { key: 'setting1', value: 'Value 1', type: 'unchanged' },
        { key: 'setting2', value: '200', type: 'deleteted' },
        {
          key: 'setting3', value1: 'true', value2: 'null', type: 'changed',
        },
        { key: 'setting4', value: 'blah blah', type: 'added' },
        {
          key: 'setting5',
          value: [{ key5: 'value5' }],
          type: 'added',
        },
        {
          key: 'setting6',
          value:
            [
              {
                key: 'doge',
                value: [
                  {
                    key: 'wow', value1: '', value2: 'so much', type: 'changed',
                  },
                ],
                type: 'unchaged',
              },
              { key: 'key', value: 'value', type: 'unchanged' },
              { key: 'ops', value: 'vops', type: 'added' },
            ],
          type: 'unchanged',
        },
      ],
      type: 'unchanged',
    },
    {
      key: 'group1',
      value: [
        {
          key: 'baz', value1: 'bas', value2: 'bars', type: 'changed',
        },
        { key: 'foo', value: 'bar', type: 'unchanged' },
        {
          key: 'nest', value1: [{ key: 'value' }], value2: 'str', type: 'changed',
        },
      ],
      type: 'unchanged',
    },
    {
      key: 'group2',
      value: [{
        abc: 12345,
        deep: {
          id: 45,
        },
      }],
      type: 'deleted',
    },
    {
      key: 'group3',
      value: [{
        deep: {
          id: {
            number: 45,
          },
        },
        fee: 100500,
      }],
      type: 'added',
    },
  ];

  return diff;
};
