import { useState } from 'react';

type AppView = 'main' | 'login' | 'settings';

function App() {
  const [view, setView] = useState<AppView>('main');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen h-screen min-w-0 min-h-0 flex justify-center p-6">
      {view}
    </div>
  );
}

export default App;
