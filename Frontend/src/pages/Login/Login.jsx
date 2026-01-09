import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Mail, Lock, UserCircle } from 'lucide-react';
import Button from '../../components/UI/Button';
import { mockApi } from '../../api/mockData';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'student'
  });
  const [loading, setLoading] = useState(false);

  const quickLogins = [
    { role: 'admin', email: 'admin@coachpro.com', password: 'admin123', label: 'Admin' },
    { role: 'teacher', email: 'sarah.johnson@coachpro.com', password: 'teacher123', label: 'Teacher' },
    { role: 'student', email: 'rahul.sharma@coachpro.com', password: 'student123', label: 'Student' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await mockApi.login(formData.email, formData.password);
      localStorage.setItem('user', JSON.stringify(response.user));
      localStorage.setItem('token', response.token);
      navigate(`/${response.user.role}/dashboard`);
    } catch (error) {
      alert('Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickLogin = (login) => {
    setFormData({ email: login.email, password: login.password, role: login.role });
    setTimeout(() => {
      document.querySelector('form').dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-100 to-dark flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-gold to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <GraduationCap className="w-9 h-9 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome to CoachPro</h1>
          <p className="text-gray-400">Sign in to access your dashboard</p>
        </div>

        {/* Login Form */}
        <div className="bg-dark-100 border border-dark-300 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Login As
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['admin', 'teacher', 'student'].map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => setFormData({ ...formData, role })}
                    className={`
                      px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                      ${formData.role === role
                        ? 'bg-gold text-dark'
                        : 'bg-dark-200 text-gray-400 hover:bg-dark-300'
                      }
                    `}
                  >
                    {role.charAt(0).toUpperCase() + role.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-dark-200 border border-dark-300 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="your.email@coachpro.com"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full bg-dark-200 border border-dark-300 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full" size="lg" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          {/* Quick Login */}
          <div className="mt-8 pt-6 border-t border-dark-300">
            <p className="text-xs text-gray-400 text-center mb-4">Quick Login (Demo)</p>
            <div className="grid grid-cols-3 gap-2">
              {quickLogins.map((login) => (
                <button
                  key={login.role}
                  onClick={() => handleQuickLogin(login)}
                  className="flex flex-col items-center gap-2 p-3 bg-dark-200 hover:bg-dark-300 border border-dark-300 hover:border-gold/50 rounded-lg transition-all duration-200"
                >
                  <UserCircle className="w-6 h-6 text-gray-400" />
                  <span className="text-xs font-medium text-gray-300">{login.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-400 mt-6">
          Don't have an account? <a href="#" className="text-gold hover:underline">Contact Admin</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
