import React from 'react';
import "./assets/css/Style.css"
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  // Assurez-vous d'avoir un tableau 'todos' défini quelque part dans votre code
  // Par exemple : const todos = ['Apprendre React', 'Lire la documentation', 'Créer une application'];

  return (
      <div className='App'>
        <Navbar /> 
        <div className='main-content'>
          <Sidebar />
          <Dashboard />

        </div>

      </div>
    
  );
}

export default App;
