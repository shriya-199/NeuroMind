import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const [userName, setUserName] = useState('');
  const [riskValues, setRiskValues] = useState({
    Stress: 0,
    Anxiety: 0,
    'Cognitive Decline': 0,
    Fatigue: 0,
    'Sleep Deprivation': 0,
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('neuroUser'));
    if (storedUser) {
      setUserName(storedUser.firstName || '');

      if (storedUser.riskFactors) {
        setRiskValues(storedUser.riskFactors);
      }
    }
  }, []);

  const labels = Object.keys(riskValues);
  const dataPoints = Object.values(riskValues);

  const riskData = {
    labels,
    datasets: [
      {
        label: 'Risk Severity',
        data: dataPoints,
        backgroundColor: [
          '#00FF00', // Green
          '#ADFF2F',
          '#FFD700',
          '#FFA500',
          '#FF0000', // Red
        ],
        borderWidth: 0,
        cutout: '60%',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#ffffff',
        },
      },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-[#0000] to-[#009ffd] text-white px-4 pt-[87px]">
      <Navbar />

      {/* Donut Chart */}
      <div className="absolute top-[87px] left-4 w-[230px] h-[230px] z-10">
        <Pie data={riskData} options={options} />
      </div>

      {/* Welcome Section */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] pt-10 text-center space-y-6">
        <h1 className="text-4xl font-bold">
          Welcome back, <span className="text-yellow-300">{userName}</span> 👋
        </h1>
        <p className="text-lg text-white/80 max-w-xl">
          This is your NeuroMind Dashboard — more exciting features coming soon!
        </p>
      </div>

      <Footer />
    </section>
  );
};

export default Dashboard;
