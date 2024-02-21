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
import { mockSurveys } from '../mockData/dashboardData';
// import Table from '@/styl/Table';
import {HEADER} from '@/styles/header'
import {SHADOWS,ROUNDING} from '@/styles/Variables'
// import { useGlobal } from '../appContext';
import { auth } from './firebase';
import RerenderComponent from 'utils/RerenderComponent';
import { useGlobal } from './context';


const HomePage: NextPage = () => {
  // const {isAuth} = useGlobal(); // Replace with your authentication logic
    
  return (
    <>

      <Header/>
      <main >
    
           <Dashboard  />
         
      </main>
      <button {...stylex.props(BUTTON_STYLES.base, BUTTON_SIZES.lg, BUTTON_STYLES.primary)}>Big</button>
      <button {...stylex.props(BUTTON_STYLES.base,BUTTON_SIZES.md,BUTTON_STYLES.primary)}>Big</button>
      <button {...stylex.props(BUTTON_STYLES.base,BUTTON_SIZES.sm,BUTTON_STYLES.primary)}>Big</button>
      <button {...stylex.props(BUTTON_STYLES.base,BUTTON_SIZES.lg, BUTTON_STYLES.secondary)}>Big</button>
      <button {...stylex.props(BUTTON_STYLES.base,BUTTON_SIZES.md,BUTTON_STYLES.secondary)}>Big</button>
      <button {...stylex.props(BUTTON_STYLES.base,BUTTON_SIZES.sm,BUTTON_STYLES.secondary)}>Big</button>
      <Button    type={BUTTON_STYLES.primary} size={BUTTON_SIZES.lg} />
      <Button    type={BUTTON_STYLES.secondary} size={BUTTON_SIZES.md} />
      {/* <RerenderComponent triggerValues= {[auth.currentUser,auth.currentUser?.email,auth.currentUser?.displayName]} /> */}

      <h1>The quick brown fox jumps over the lazy dog.</h1>
<h2>Jackdaws love my big sphinx of quartz.</h2>
<h3>Mr. Jock, TV quiz PhD, bags few lynx.</h3>
<h4>Grumpy wizards make toxic brew for the evil Queen and Jack.</h4>
<h5>Fix problem quickly with galvanized jets.</h5>
<h6>Brawny gods just flocked up to quiz and vex him.</h6>
<p>Brawny gods just flocked up to quiz and vex him.</p>

    </>
  );
};

export default HomePage;
