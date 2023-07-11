import { Section } from './section/section';
import { Phonebook } from './phonebook/phonebook';

export const App = () => {
  return (
    <div>
      ceva text
      <Section title={'Phonebook'} />
      <Phonebook />
    </div>
  );
};
