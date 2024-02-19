import * as stylex from '@stylexjs/stylex';
// pages/index.tsx
import { NextPage } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BUTTON_SIZES, BUTTON_STYLES } from '@/styles/button';
import { LAYOUT } from '@/styles/layout';
import Button from '@/components/Button';
import { CARD} from '@/styles/card';
import Dashboard from '@/components/Dashboard';
import { mockSurveys } from './mockData/dashboardData';




const HomePage: NextPage = () => {
  const isAuthenticated = true; // Replace with your authentication logic

  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <main >
        {isAuthenticated ? (
          <div   >
            {/* {{...stylex.props(CARD.default)}} */}
            <h2>My Surveys</h2>
           <Dashboard surveys={mockSurveys} />
          </div>
        ) : (
          <div  >
            <h2>Welcome to Survey App!</h2>
            <p>Please log in to view your surveys.</p>
          </div>
        )}
      </main>
      <button {...stylex.props(BUTTON_STYLES.base, BUTTON_SIZES.lg, BUTTON_STYLES.primary)}>Big</button>
      <button {...stylex.props(BUTTON_STYLES.base,BUTTON_SIZES.md,BUTTON_STYLES.primary)}>Big</button>
      <button {...stylex.props(BUTTON_STYLES.base,BUTTON_SIZES.sm,BUTTON_STYLES.primary)}>Big</button>
      <button {...stylex.props(BUTTON_STYLES.base,BUTTON_SIZES.lg, BUTTON_STYLES.secondary)}>Big</button>
      <button {...stylex.props(BUTTON_STYLES.base,BUTTON_SIZES.md,BUTTON_STYLES.secondary)}>Big</button>
      <button {...stylex.props(BUTTON_STYLES.base,BUTTON_SIZES.sm,BUTTON_STYLES.secondary)}>Big</button>
        <Button    type={BUTTON_STYLES.primary} size={BUTTON_SIZES.lg} />
      <Button    type={BUTTON_STYLES.secondary} size={BUTTON_SIZES.md} />
{/* // type='secondary' size='lg' rounding='full' */}
      <h1>The quick brown fox jumps over the lazy dog.</h1>
<h2>Jackdaws love my big sphinx of quartz.</h2>
<h3>Mr. Jock, TV quiz PhD, bags few lynx.</h3>
<h4>Grumpy wizards make toxic brew for the evil Queen and Jack.</h4>
<h5>Fix problem quickly with galvanized jets.</h5>
<h6>Brawny gods just flocked up to quiz and vex him.</h6>
<p>Brawny gods just flocked up to quiz and vex him.</p>
      <Footer />
    </>
  );
};

export default HomePage;
