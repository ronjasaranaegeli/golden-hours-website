
import { Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import AnimatedDemo from '@/pages/AnimatedDemo';
import NotFound from '@/pages/NotFound';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as SonnerToaster } from '@/components/ui/sonner';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/animated-demo" element={<AnimatedDemo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
      <SonnerToaster position="top-right" />
    </>
  );
}

export default App;
