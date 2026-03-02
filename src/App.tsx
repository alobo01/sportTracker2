import React, { useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import CalendarScreen from './screens/CalendarScreen';
import StatsScreen from './screens/StatsScreen';
import SessionScreen from './screens/SessionScreen';
import SessionSummaryScreen from './screens/SessionSummaryScreen';
import BottomNav from './components/BottomNav';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [sessionState, setSessionState] = useState<'none' | 'active' | 'summary'>('none');

  const renderScreen = () => {
    switch (currentTab) {
      case 'home':
        return <HomeScreen onStartSession={() => setSessionState('active')} />;
      case 'program':
      case 'calendar':
        return <CalendarScreen />;
      case 'stats':
        return <StatsScreen />;
      case 'profile':
        return <div className="flex-1 flex items-center justify-center text-slate-400">Profile Screen (Coming Soon)</div>;
      default:
        return <HomeScreen onStartSession={() => setSessionState('active')} />;
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-background-dark overflow-hidden relative">
      {renderScreen()}
      
      {sessionState === 'none' && (
        <BottomNav 
          currentTab={currentTab} 
          setCurrentTab={setCurrentTab} 
          onStartSession={() => setSessionState('active')} 
        />
      )}

      {sessionState === 'active' && (
        <SessionScreen onEndSession={() => setSessionState('summary')} />
      )}

      {sessionState === 'summary' && (
        <SessionSummaryScreen onClose={() => setSessionState('none')} />
      )}
    </div>
  );
}
