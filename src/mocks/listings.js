const upcs = ['10882875096107', '10899875096221', '10287587963332', '1089875095529', '1089875012345']
const cms = [4489, 1754, 9908, 9920, 4233];
const times = ['2018-11-29', '2018-11-28', '2018-12-02', '2018-11-30', '2018-11-29'];
const descriptions = [
  'Duis non tortor at nunc molestie pulvinar sodales vel velit.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque.',
  'Donec dapibus tortor dolor, quis egestas mi fringilla sit amet.',
  'Morbi imperdiet diam eget tortor cursus pellentesque. Quisque lobortis quis.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit.',
];

const listings = Array(5).fill(null).map((_, index) => ({
  id: index,
  upc: upcs[index],
  description: descriptions[index],
  cm: cms[index],
  time: times[index],
  status: (index === 3) ? 'REJECTED' : 'ON HOLD',
  reason: 'Reason provided by the clerk lorem ipsum',
}));

export default listings;